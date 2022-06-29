import { CardList, Header } from 'components'
import "./_home.scss";
import classNames from 'classnames';
import { themeModeEnum } from 'utils/enum/theme-mode-enum';
import { useThemeMode } from 'state/hooks/useThemeMode';

const Home = () => {

  const theme : themeModeEnum = useThemeMode(); 
  
  return (
    <main className={classNames({
      "dark": theme === themeModeEnum.darkMode, 
      "light" : theme === themeModeEnum.lightMode  
      })}> 
      <Header />
      <CardList/>
    </main>
  )
}

export default Home