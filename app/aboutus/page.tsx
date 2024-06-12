import Image from "next/image";
import "../styles/aboutus.css";
export default function Home() {
  return (
    <main className="body_wrapper">
      <p className="routing_title">головна / про нас</p>
      <div className="wrapper_conext">
        <div className="context">
          <span className="text_first">
            Circle Fashion has been a selling the finest designer menswear since
            1996, each season Circle buy the best from the premier designer
            labels in the world. With it's flagship store in Huddersfield,
            Yorkshire, Circle has earned it's reputation as one of the regions
            leading designer menswear retailers.
          </span>
          <Image
            src="/aboutus_pic1.png"
            alt="styssy_logo"
            width={350}
            height={350}
            className="first_pic"
          ></Image>
          <span className="text_second">
            As you browse through the store you will see hand picked items from
            the latest collections of some of the worlds most famous designers.
            Circle has a long tradition working with leading designer menswear
            brands such as Alexander McQueen, Balmain, Dolce & Gabbana,
            Givenchy, Moncler, Stone Island, Valentino and many more. 
          </span>
          <Image
            src="/aboutus_pic2.png"
            alt="si_big_picture"
            width={904}
            height={544}
            className="second_picture"
          ></Image>
          <span className="text_third">
             At Circle menswear we are fully committed to customer service, the
            shop assistants have in depth knowledge of the designer
            menswear collections they are selling. If you have any questions
            about any of our designer menswear products please contact customer
            services on +44 (0)1484 435271 or visit us at our store in
            Huddersfield Town centre.
          </span>
          <Image
            src="/shop_picture.png"
            width={350}
            height={350}
            alt="shop_pic"
            className="third_pic"
          ></Image>
          <p className="location">Харків, вул. Григорія Сковороди, 35</p>
          <p className="phone_num">+38 (000) 000-00-00</p>
          <p className="showus_inst">( слідкуй за нами в instagram )</p>
        </div>
      </div>
    </main>
  );
}
