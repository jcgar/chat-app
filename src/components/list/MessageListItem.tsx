import React, { FC } from "react";
import { AvatarStyled } from "components/card/styles";
import { BusinessMessage, CustomerMessage, MessageWrapperStyled, MessageWrapperStyledReverse, TimeMessage } from "./styles";

export enum MessageSource {
  customer = 'customer',
  business = 'business',
  time = 'time'
}

export interface MessageListItemData {
  text: string;
  source: MessageSource;
  avatar?: boolean;
}
interface IProps {
  data: MessageListItemData;
}

export const MessageListItem: FC<IProps> = ({
  data
}) => {
  const { text, source, avatar } = data

  const ChatMessage = {
    customer: CustomerMessage,
    business: BusinessMessage,
    time: TimeMessage
  }[source]

  const Wrapper = source === MessageSource.business
    ? MessageWrapperStyledReverse
    : MessageWrapperStyled

  return (
    <Wrapper>
      { avatar && <AvatarStyled />}
      { text && <ChatMessage>{ text }</ChatMessage>}
    </Wrapper>
  )
};
