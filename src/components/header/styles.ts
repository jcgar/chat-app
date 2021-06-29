import styled from 'styled-components';
import {
  AppBar,
} from '@material-ui/core';

export const AppBarStyled = styled(AppBar).attrs(props => ({
  position: 'static'
}))`
  background: black;
`