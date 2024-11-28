import React, { useState, useEffect } from "react";
import { socket } from "../../socket/socket";
import "./chatPage.css";
import MessageBox from "../messageBox/messageBox";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    function onConnect() {
      console.log(socket.id);
    }

    function onDisconnect() {
      // setIsConnected(false);
    }

    function onMessageEvent(value) {
      console.log(value);

      setMessages((previous) => [...previous, value]);
    }
    try {
      socket.connect();
      console.log(socket);
    } catch (e) {
      console.log(e);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("reply", onMessageEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("reply", onMessageEvent);
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("message", { user: user, msg: input });
      setInput("");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="d-flex flex-column align-items-center min-vh-100  text-light">
      <div
        className="card chat-container p-4 shadow-lg mt-5"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <div className="header">
          <h3>Hello {user.username}</h3>
          <button className="btn logout-button " onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* <h1 className="chat-title text-center mb-4">Chat Room</h1> */}

        {/* Chat Window */}
        <div
          className="chat-window rounded mb-3 mt-3"
          style={{ maxHeight: "400px", overflowY: "auto" }}
        >
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <MessageBox msg={msg} user={user} index={index} />
            ))
          ) : (
            <p className="text-center text-muted">
              No messages yet. Start the conversation!
            </p>
          )}
        </div>

        {/* Input Area */}
        <div className="input-area">
          <input
            className="form-control me-2 chat-input bg-dark"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
          />
          <button className="btn send-button" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
