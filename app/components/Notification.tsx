import React from "react";
import Image from "next/image";
import "../styles/notification.css";

interface NotificationI {
  name: string;
  selectedSize: string;
}

const Notification: React.FC<NotificationI> = ({ name, selectedSize }) => {
  return (
    <div className="notification_wrapper">
      <div className="line_in_notification">
        <Image
          src="/heart.png"
          width={24}
          height={24}
          alt="heart"
          priority
        ></Image>
        <p className="selected_item_to_cart">Додано до кошика</p>
        <p className="name_of_selected_product">
          {name}({selectedSize})
        </p>
        <p className="continue_your_shopping">Продовжити покупки</p>
      </div>
    </div>
  );
};

export default Notification;
