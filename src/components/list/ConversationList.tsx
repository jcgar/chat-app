import React, { FC } from "react";
import { ConversationModel } from "utils/interface";
import { ConversationListItem } from "./ConversationListItem";
import { List } from "./List";

interface IProps {
  list: [ConversationModel] | undefined;
}

export const ConversationList: FC<IProps> = ({
  list
}) => {
  
  return (
    <List
      list={list}
      item={ConversationListItem}
    >
    </List>
  );
};
