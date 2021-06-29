import React, { FC } from "react";
import { MessageModel } from "utils/interface";
import { ChatMessage } from "components/card/ChatMessage";


interface IProps {
  data: MessageModel;
}

export const MessageListItem: FC<IProps> = ({
  data
}) => {
  const message = data.body
  return (
    <ChatMessage>{ message }</ChatMessage>
  );
};
