import React from "react";
import { Link } from "react-router-dom";
import { IItem } from "../../data/navigate";
import style from './Navigate.module.scss'



interface IProp {
  items: IItem[];
}

export default function Navigate({ items }: IProp) {
  return (
    <nav>
    <ul className={style.list}>
      {items.map(({ path, title }) => (
        <li key={title} className={style.item}>
          <Link to={`${path}`}>{title}</Link>
        </li>
      ))}
    </ul>
    </nav>
  );
}
