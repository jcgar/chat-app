import React from 'react';
import { ReactElement } from 'react';

import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import { createMuiTheme } from '@material-ui/core';


export function withTheme(element: ReactElement) {
  const theme = createMuiTheme({
    mixins: {
      toolbar: {
        minHeight: 45,
      }
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          {element}
        </ThemeProvider>
      </StylesProvider>
    </MuiThemeProvider>
  );
}