import React, { FC } from "react";
import { IChildren } from "utils/interface";
import { ListContainerStyled } from "./styles";

interface IProps extends IChildren {
  list?: any[];
  item: React.FC<any>;
  onSelect?: (i: number) => void;
  className?: string;
}

export const List: FC<IProps> = ({
  list = [],
  item: Item,
  onSelect = () => {},
  className,
  children
}) => {
  return (
    <ListContainerStyled className={className}>
      {list.map((item: any, i: number) => (
        <Item onClick={() => onSelect(i)} data={item} key={i} />
      ))}
      <li>{children}</li>
    </ListContainerStyled>
  );
};
