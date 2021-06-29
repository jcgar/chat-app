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

