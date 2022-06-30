import { IProgrammingLanguage } from 'interfaces';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { pageHome, techSelected } from 'state/ atom';
import style from "./_Card.module.scss";

const Card = (props : IProgrammingLanguage | any) => {
  const navigate = useNavigate();
  const setHome = useSetRecoilState(pageHome);
  const setTech = useSetRecoilState(techSelected);

  const openCard = () => {
    navigate("/cardSelected");
    setHome(false);
    setTech(props);
  }

  return (
    <article
      className={style.card}
      onClick={openCard}
      >
        <div className={style.card__description}>
          <h3 className={style["card__description-title"]}>{props.IntendedUse}</h3>
          {props.Functional === "Yes" && <span className={style["card__description-tag"]}>Functional</span>}
          {props.ObjectOriented === "Yes" &&<span className={style["card__description-tag"]}>Object Oriented</span>}
        </div>
        <img src={props.Picture}
          alt={props.language} className={style.card__img}/> 
    </article>
  )
}

export default Card