import { Conversation } from "components/card/Conversation";
import React, { FC } from "react";
import { ConversationModel, IChildren } from "utils/interface";
import { ConversationListItemStyled } from "./styles";

interface IProps extends IChildren {
  data: ConversationModel;
}

export const ConversationListItem: FC<IProps> = ({
  data
}) => {
  const name = 'John'
  const time = 'just now'
  const message = data.lastMessage.body
  return (
    <ConversationListItemStyled>
      <Conversation
        name={name}
        time={time}
        message={message}></Conversation>
    </ConversationListItemStyled>
  );
};
