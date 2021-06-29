import styled from 'styled-components';

export const ListContainerStyled = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  flex-wrap: wrap;
  list-style: none;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const ConversationListItemStyled = styled.li`
  padding: 1rem;
  border: 1px solid gray;
  border-top: 0;
`

export const MessageWrapperStyled = styled.div`
  display: flex; 
  align-items: center;
  flex-direction: row;
`
export const MessageWrapperStyledReverse = styled(MessageWrapperStyled) `
  flex-direction: row-reverse;
`

export const ChatMessage = styled.p`
  padding: 0.5rem 0.75rem;
  color: #212121;
  border: 1px solid #F5F5F5;
  border-radius: 10px;
  margin: 0 2rem;
  font-size: 0.875rem;
  margin: 1rem 2rem;
`
export const CustomerMessage = styled(ChatMessage)`
  text-align: left;
  background-color: #F5F5F5;
`

export const BusinessMessage = styled(ChatMessage)`
  text-align: right;
`

export const TimeMessage = styled.p`
  margin: 0 auto;
  font-size: 0.75rem;
  color: #888;
`