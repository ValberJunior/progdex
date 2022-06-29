import { useState } from "react";
import { FaMoon , FaSun } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { themeMode } from "state/ atom";
import { useThemeMode } from "state/hooks/useThemeMode";
import { themeModeEnum } from "utils/enum/theme-mode-enum";
import style from "./header.module.scss";

const Header = () => {

  const theme: themeModeEnum = useThemeMode(); 
  const setTheme = useSetRecoilState(themeMode);
  const [ darkMode, setDarkMode ] = useState<boolean>(false);

  const selectThemeMode = ()=>{
       setTheme(theme !== themeModeEnum.darkMode ? themeModeEnum.darkMode : themeModeEnum.lightMode);
       if(theme === themeModeEnum.darkMode) return setDarkMode(true);
       return setDarkMode(false);
  }
  
  return (
    <header className={style.container}>
      <section className={style.container__wrapper}>
          <h1 className={style["container__wrapper-title"]}>ProgDex</h1>
          <span onClick={selectThemeMode}>
            { darkMode ? (<FaMoon className={style["container__wrapper-icon"]} />)
              : (<FaSun className={style["container__wrapper-icon"]} />)
             }
          </span>
      </section>
    </header>
  )
}

export default Header