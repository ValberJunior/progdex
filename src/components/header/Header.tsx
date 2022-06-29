import { FaMoon } from "react-icons/fa";
import style from "./header.module.scss";


const Header = () => {
  return (
    <header className={style.container}>
      <section className={style.container__wrapper}>
          <h1>ProgDex</h1>
          <span>Dark )</span>
      </section>
    </header>
  )
}

export default Header