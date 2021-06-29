import React, { FC } from "react";
import { MessageModel } from "utils/interface";
import { List } from "./List";
import { MessageListItem } from "./MessageListItem";

interface IProps {
  list: [MessageModel] | undefined;
}

export const MessageList: FC<IProps> = ({
  list
}) => {
  
  return (
    <List
      list={list}
      item={MessageListItem}
    >
    </List>
  );
};
