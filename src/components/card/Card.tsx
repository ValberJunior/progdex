import { IProgrammingLanguage } from 'interfaces';
import style from "./_Card.module.scss";

const Card = (props : IProgrammingLanguage | any) => {
  return (
    <article className={style.card}>
        <div className={style.card__description}>
          <h3 className={style["card__description-title"]}>{props.IntendedUse}</h3>
          <span className={style["card__description-tag"]}>Orientado a Objeto</span>
        </div>
        <img src="https://icon-library.com/images/code-icon-png/code-icon-png-5.jpg"
          alt={props.language} className={style.card__img}/> 
    </article>
  )
}

export default Card