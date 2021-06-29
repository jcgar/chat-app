import React from "react";
import InboxConversationList from "./inbox/InboxConversationList";
import MessageBoard from "./inbox/MessageBoard";


function InboxModule() {
  return (
    <>
      <InboxConversationList />
      <MessageBoard />
    </>
  );
}

export default InboxModule

