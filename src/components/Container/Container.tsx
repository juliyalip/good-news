import React from "react";
import style from "./Container.module.scss";

interface IProps {
  children: React.ReactNode;
  flex?: string
}

export default function Container({ children }: IProps) {
  return <div className={style.container}>{children}</div>;
}
