import React, { FC } from "react";
import { IChildren } from "utils/interface";

interface IProps extends IChildren {
}

export const ChatMessage: FC<IProps> = ({
  children
}) => {  
  return (
    <p>
      {children}
    </p>
  );
};
