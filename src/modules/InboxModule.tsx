import React from "react";
import InboxConversationList from "./inbox/InboxConversationList";
import MessageBoard from "./inbox/MessageBoard";


function InboxModule() {
  const messageId = 2
  return (
    <>
      <InboxConversationList />
      <MessageBoard messageId={messageId} />
    </>
  );
}

export default InboxModule

