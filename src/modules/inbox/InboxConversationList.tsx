import React from "react";
import { useQuery } from "react-query";
import { ConversationList } from "components/list/ConversationList";
import { parseConversationList } from "utils/interface";

function InboxConversationList() {
  const { isLoading, error, data } = useQuery("conversations", () => 
    fetch(
      "https://shoppop-trial-api.herokuapp.com/conversations"
    ).then((res) => res.json())
  );

  let message = ''
  if (isLoading) {
    message = "Loading..."
  }
  if (error) {
    message = "An error has occurred: " + error
  }

  console.log('data', data);
  
  return (
    message 
    ? <p>{ message }</p>
    : <ConversationList list={parseConversationList(data)}/>
  );
}

export default InboxConversationList


