export interface IChildren {
  children: React.ReactNode;
}

export interface ConversationModel {
  id: number;
  state: 'open';
  customer: CustomerModel;
  lastMessage: MessageModel;
}

export interface CustomerModel {
  channelAddress: string;
  profileName: string;
}

export interface MessageModel {
  id: number;
  sender: string;
  status: 'received',
  body: string;
  receivedAt: string;
  queuedAt?: string;
  sentAt?: string;
  deliveredAt?: string;
  readAt?: string;
}


export const parseConversationList = (list: any): [ConversationModel] => {
  return (list || []).map((item: any) => {
    const { id, state, customer, last_message } = item
    return {
      id,
      state,
      customer: parseCustomer(customer),
      lastMessage: parseMessage(last_message)
    }
  })
}

export const parseMessageList = (list: any): [MessageModel] => {
  return (list || []).map((item: any) => {
    return parseMessage(item)
  })
}

export const parseCustomer = (customer: any): CustomerModel => (
  {
    channelAddress: customer.channel_address,
    profileName: customer.profile_name
  }
)

export const parseMessage = (message: any): MessageModel => (
  {
    id: message.id,
    sender: message.sender,
    status: message.status,
    body: message.body,
    receivedAt: message.received_at,
    queuedAt: message.queued_at,
    sentAt: message.sent_at,
    deliveredAt: message.delivered_at,
    readAt: message.read_at
  }
)