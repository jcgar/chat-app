import React, { FC } from "react";
import useApp from "setup/app/useApp";
import { ConversationModel } from "utils/interface";
import { ConversationListItem } from "./ConversationListItem";
import { List } from "./List";

interface IProps {
  list: [ConversationModel] | undefined;
}

export const ConversationList: FC<IProps> = ({
  list
}) => {
  
  const { selectConversation } = useApp()

  const onSelect = (i: number) => {
    console.log('onSelect', i);
    selectConversation(i)
  }
  return (
    <List
      list={list}
      onSelect={onSelect}
      item={ConversationListItem}
    >
    </List>
  );
};
