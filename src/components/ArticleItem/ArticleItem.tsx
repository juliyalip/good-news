import { Link } from "react-router-dom";
import classNames from "classnames";
import { ICity } from "../../data/articles";
import style from "./ArticleItem.module.scss";

const getSpoiler = (text: string) => {
  const maxDescribeText = 70;
  if (text.length <= maxDescribeText) {
    return text;
  }
  // first index after 70 symbol
  const spaceIndex = text.indexOf(" ", maxDescribeText);

  return `${text.substring(0, spaceIndex)} ...`;
};

interface IProps {
  item: ICity;
type: 'standart' | 'top';
}

export default function ArticleItem({ item, type }: IProps) {
  const { id, title, context, city, url, spoiler } = item;
  const spoilerTextShort = getSpoiler(context);

  const stylesLi = classNames([style.item], {
    [style[type]]: type,
  });

  const styleImg = classNames({
    [style.verticalImg]: type === 'top',
    [style.standartImg]: type==="standart"
  })
  
  return (
    <li className={stylesLi}>
      <div className={styleImg}>
        <img src={url} alt={title} className={style.img} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>city: {city}</p>
        <Link to="#">
          <p>{type=== "top" ? spoilerTextShort: spoiler}</p>
        </Link>
      </div>
    </li>
  );
}
