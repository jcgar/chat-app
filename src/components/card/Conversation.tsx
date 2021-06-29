import React, { FC } from "react";
import { BottomWrapper, ConversationCardWrapperStyled, Message, Name, Time, TopWrapper } from "./styles";

interface IProps {
  name: React.ReactNode;
  time: string;
  message: string;
}

export const Conversation: FC<IProps> = ({
  name,
  time,
  message
}) => {  
  return (
    <ConversationCardWrapperStyled>
      <TopWrapper>
        <Name>{ name }</Name>
        <Time>{ time }</Time>
      </TopWrapper>
      <BottomWrapper>
        <Message>{ message }</Message>
      </BottomWrapper>
    </ConversationCardWrapperStyled>
  );
};
