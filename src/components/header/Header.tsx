import React, { FC } from "react";
import { IChildren } from "utils/interface";
import HomeIcon from '@material-ui/icons/Home';
import {
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import { AppBarStyled } from "./styles";

interface IProps extends IChildren {
}

export const Header: FC<IProps> = ({
  children
}) => {
  return (
    <AppBarStyled>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6">
          { children }
        </Typography>
      </Toolbar>
    </AppBarStyled>
  );
};
