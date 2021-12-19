import React from "react";
import SidePanel from "./SidePanel/SidePanel";
import MainPanel from "./MainPanel/MainPanel";
import "./ChatPage.css";

const ChatPage = () => {
  return (
    <div className="MainWrap">
      <SidePanel />

      <MainPanel />
    </div>
  );
};

export default ChatPage;
