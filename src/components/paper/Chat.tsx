import { MessageList } from "components/list/MessageList";
import React, { FC } from "react";
import { MessageModel } from "utils/interface";

interface IProps {
  messages: [MessageModel];
}

export const Chat: FC<IProps> = ({
  messages
}) => {  
  return (
    <MessageList list={messages} />
  );
};
