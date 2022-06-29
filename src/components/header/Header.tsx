import { FaMoon } from "react-icons/fa";
import style from "./header.module.scss";


const Header = () => {
  return (
    <header className={style.container}>
      <section className={style.container__wrapper}>
          <h1 className={style["container__wrapper-title"]}>ProgDex</h1>
          <FaMoon className={style["container__wrapper-icon"]}/>
      </section>
    </header>
  )
}

export default Header