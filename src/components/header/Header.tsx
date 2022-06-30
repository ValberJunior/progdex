import { useState } from "react";
import { FaLongArrowAltLeft, FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { pageHome, themeMode } from "state/ atom";
import { usePageHome } from "state/hooks/usePageHome";
import { useThemeMode } from "state/hooks/useThemeMode";
import { themeModeEnum } from "utils/enum/theme-mode-enum";
import style from "./header.module.scss";

const Header = () => {

  const theme: themeModeEnum = useThemeMode();
  const setTheme = useSetRecoilState(themeMode);
  const home: boolean = usePageHome();
  const setHome = useSetRecoilState(pageHome);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const navigate = useNavigate();

  const selectThemeMode = () => {
    setTheme(theme !== themeModeEnum.darkMode ? themeModeEnum.darkMode : themeModeEnum.lightMode);
    if (theme === themeModeEnum.darkMode) return setDarkMode(true);
    return setDarkMode(false);
  }

  const goHome = () => {
    setHome(true);
    navigate("/");
  }

  return (
    <header className={style.container}>
      <section className={style.container__wrapper}>
        {home ? (<h1 className={style["container__wrapper-title"]}>ProgDex</h1>) :
          (<FaLongArrowAltLeft
            onClick={goHome}
            className={style["container__wrapper-back"]}
          />)
        }
        <span onClick={selectThemeMode}>
          {darkMode ? (<FaMoon className={style["container__wrapper-icon"]} />)
            : (<FaSun className={style["container__wrapper-icon"]} />)
          }
        </span>
      </section>
    </header>
  )
}

export default Header