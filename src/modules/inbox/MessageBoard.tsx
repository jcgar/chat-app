import React from "react";
import { useQuery } from "react-query";
import { parseMessageList } from "utils/interface";
import { Chat } from "components/paper/Chat";

function MessageBoard({ messageId }: { messageId: number }) {
  const { isLoading, error, data } = useQuery("message", () => 
    fetch(
      `https://shoppop-trial-api.herokuapp.com/conversations/${messageId}/messages`
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
    : <Chat messages={parseMessageList(data)}/>
  );
}

export default MessageBoard

