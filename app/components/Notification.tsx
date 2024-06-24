import React from "react";
import Image from "next/image";
import "../styles/notification.css";

interface NotificationI {
  name: string;
  notText: string;
}

const Notification: React.FC<NotificationI> = ({ name, notText }) => {
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
        <p className="selected_item_to_cart">
          {notText.length > 0 ? "" : "Додано до кошика"}
        </p>
        <p className="name_of_selected_product">
          {notText.length > 0 ? notText : name}
        </p>
        <p className="continue_your_shopping">Продовжити покупки</p>
      </div>
    </div>
  );
};

export default Notification;
