import React from "react";
import "./messageBox.css";

const MessageBox = ({ msg, user, index }) => {
  return (
    <div className="cont">
      <div
        className={
          msg.user.id === user.id ? "chat-message left" : "chat-message right"
        }
      >
        {msg.msg}
      </div>
      <p className={msg.user.id === user.id ? "user-left" : "user-right"}>
        Sent By {msg.user.id === user.id ? <span>Me </span> : msg.user.username}
      </p>
    </div>
  );
};

export default MessageBox;
