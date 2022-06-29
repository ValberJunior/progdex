import Card from "components/card/Card";
import Data from "data/data.json";
import style from "./_CardList.module.scss";

const CardList = () => {
  return (
    <section className={style.cards}>
      {Data.map(item=>{
        return(
          <Card key={item.Language} {...item}/>
        )
      })}
    </section>
  )
}

export default CardList
