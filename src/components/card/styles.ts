import styled from 'styled-components';

export const EllipsisStyled = styled.span`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ConversationCardWrapperStyled = styled.div`
`

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BottomWrapper = styled.div`
  display: grid;
`


export const Message = styled(EllipsisStyled)`
  color: blue;
`

export const Name = styled.div`
  color: orange;
`

export const Time = styled.div`
  color: red;
`
