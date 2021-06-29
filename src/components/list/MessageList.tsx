import React, { FC } from "react";
import { List } from "./List";
import { MessageListItem, MessageListItemData } from "./MessageListItem";



interface IProps {
  list: MessageListItemData[] | undefined;
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
