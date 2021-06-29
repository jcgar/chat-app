import React, { FC } from "react";
import { IChildren } from "utils/interface";
import { ListContainerStyled } from "./styles";

interface IProps extends IChildren {
  list?: [any];
  item: React.FC<any>;
  className?: string;
}

export const List: FC<IProps> = ({
  list = [],
  item: Item,
  className,
  children
}) => {
  return (
    <ListContainerStyled className={className}>
      {list.map((item: any, i: number) => (
        <Item data={item} key={i} />
      ))}
      <li>{children}</li>
    </ListContainerStyled>
  );
};
