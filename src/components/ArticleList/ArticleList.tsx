import React from "react";
import classNames from "classnames";
import ArticleItem from "../ArticleItem/ArticleItem";
import style from "./ArticleList.module.scss";
import { ICity } from "../../data/articles";

interface IProp {
  items: ICity[];
  type: 'standart' | 'top';
}

export default function ArticleList({ items, type}: IProp) {
  const getStyle = classNames( {
    [style[type]]: type,
      });

  return (
    <ul className={getStyle}>
      {items.map((item) => (
        <ArticleItem item={item} key={item.id} type={type}/>
      ))}
    </ul>
  );
}
