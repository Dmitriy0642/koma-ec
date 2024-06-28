"use client";
import React, { useState, useEffect } from "react";
import { useRequestById } from "../hooks/useRequestById";
import { ProductProps } from "../types/Product";
import { getCookieValue } from "../util/cookiesMatcher";
import { useRequestPost } from "../hooks/useRequestPost";
import Loader from "./Loader";
import Description from "./Description";
import Carousel from "./Carousel";
import LatestArrivals from "./LatestArrivals";
import Notification from "./Notification";
import Image from "next/image";
import { toast } from "sonner";
import "../styles/product.css";

interface ProductPropsI {
  id: string;
  prods: ProductProps[];
  userId?: string;
}

const Product: React.FC<ProductPropsI> = ({ id, prods }) => {
  const userIdCookie = getCookieValue();
  const { data, isLoading, isError } = useRequestById("products", `${id}`);

  const [isSelected, setSelected] = useState("");
  const [isProduct, setIsProduct] = useState({
    userId: `${userIdCookie}`,
    selectedSizeFromShelter: [],
    items: {},
  });
  const [isNotification, setIsNotification] = useState(false);
  const [notificationText, isNotificationText] = useState("");
  const [isKeepSize, setIsKeppSize] = useState([]);

  const { mutate, error } = useRequestPost(
    "cart",
    `${userIdCookie}`,
    isProduct
  );

  useEffect(() => {
    if (data) {
      setIsKeppSize([]);
    }
  }, [data]);

  if (isLoading || prods === undefined) {
    return <Loader />;
  }

  if (isError) {
    console.log(isError);
  }

  const handleClick = (id: string) => {
    setSelected(id);

    const selectedSizeFromShelter = data.sizes.find(
      (item: any) => item.size === id
    );

    if (!selectedSizeFromShelter) {
      setIsNotification(true);
      isNotificationText("Выбранный размер отсутствует на складе");
      setTimeout(() => {
        setIsNotification(false);
        isNotificationText("");
      }, 3000);

      return;
    }

    setIsProduct({
      userId: `${userIdCookie}`,
      selectedSizeFromShelter: selectedSizeFromShelter,
      items: [
        {
          prodId: data._id,
          name: data.name,
          price: data.price,
          sizes: [{ size: id, value: 1 }],
          image: [...data.image],
        },
      ],
    });
  };

  const onSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isSelected) {
      toast.error("Выберите размер");
    } else {
      try {
        mutate(undefined, {
          onSuccess: (resData: any) => {
            if (resData === 200) {
              setIsNotification(true);
              setTimeout(() => {
                setIsNotification(false);
              }, 3000);
            } else if (resData === 220) {
              setIsNotification(true);
              isNotificationText("Вы добавили товар в последнем размере");
              setTimeout(() => {
                setIsNotification(false);
                isNotificationText("");
              }, 3000);
            }
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="wrapper_product">
      <p className="title_naming">Головна / Каталог / {data.name}</p>
      <div className="wrapper_conext">
        <div className="conext">
          <div className="carousel_product">
            {data.image.map((item: string) => (
              <Image
                key={item}
                src={item}
                alt="product_pic"
                width={530}
                height={665}
                className="slides_prod"
                priority
              ></Image>
            ))}
          </div>
          <div className="navbar_product">
            <h2 className="nameofprod">{data.name}</h2>
            <h2 className="color_prod">
              color:
              <p className="color_prod_color"> {data.color}</p>
            </h2>
            <div className="sizes_block">
              <p className="title_size">size:</p>
              {data.sizes.map((item: { size: string }) => (
                <button
                  key={item.size}
                  id={item.size}
                  onClick={(e) => handleClick(e.currentTarget.id)}
                  className={
                    isSelected === item.size
                      ? "button_size_active"
                      : "button_size"
                  }
                >
                  {item.size}
                </button>
              ))}
            </div>
            <p className="price_of_prod">
              {data.price} UAN / {data.priceUsd}$
            </p>
            <button className="add_to_bascet" onClick={(e) => onSend(e)}>
              Додати до кошика
            </button>
          </div>
          <div className="line_product"></div>
          <Description
            codeProduct={data.productCode}
            brand={data.firm}
            countryManufacture={data.countryManyfacture}
            composition={data.composition}
            gender={data.gender}
            features={data.features}
            description={data.description}
          />
          <div className="line_product"></div>
          <div className="block_with_carousel">
            <Carousel
              container="carousel-container_xl"
              slide="slides_xl"
              block="conatiner-title"
              carouselblock="carousel"
              prods={prods}
            />
          </div>
          <div className="block_with_latest_arrivals">
            <LatestArrivals />
          </div>
        </div>
      </div>
      {isNotification && (
        <Notification name={data.name} notText={notificationText} />
      )}
    </div>
  );
};

export default Product;
