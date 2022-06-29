import { Header } from 'components'
import style from "./home.module.scss";
import classNames from 'classnames';
import { themeModeEnum } from 'utils/enum/theme-mode-enum';
import { useThemeMode } from 'state/hooks/useThemeMode';

const Home = () => {

  const theme = useThemeMode(); 
  
  return (
    <main className={classNames({
      [style.dark]: theme === themeModeEnum.darkMode, 
      [style.light] : theme === themeModeEnum.lightMode  
      })}> 
      <Header />
    </main>
  )
}

export default Home