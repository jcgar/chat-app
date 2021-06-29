import { ChatWrapper } from "components/layout/styles";
import { MessageList } from "components/list/MessageList";
import { MessageListItemData, MessageSource } from "components/list/MessageListItem";
import React, { FC } from "react";
import { MessageModel } from "utils/interface";

interface IProps {
  messages: [MessageModel];
}

export const Chat: FC<IProps> = ({
  messages
}) => {
  const list = messages.reduce(messageReducer, [])

  return (
    <ChatWrapper>
      <MessageList list={list} />
    </ChatWrapper>
  );
};


function messageReducer(
  tot: MessageListItemData[],
  item: MessageModel,
):any {

  const last = tot.slice(-1)[0]
  const source = {
    'customer': MessageSource.customer,
    'business': MessageSource.business
  }
  const actual = {
    text: item.body,
    source: source[item.sender],
    avatar: true
  }
  const time = {
    text: item.receivedAt,
    source: MessageSource.time
  }
  tot.push(time)

  if (last) {
    if (last.source === actual.source) {
      last.avatar = false
    }
  }

  tot.push(actual)
  return tot
}