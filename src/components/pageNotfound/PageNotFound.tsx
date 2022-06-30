import AnimationError from "assets/animations/pageNotFound.gif";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { pageHome } from "state/ atom";
import style from "./_PageNotFound.module.scss";

const PageNotFound = () => {
  const setHome = useSetRecoilState(pageHome);

  useEffect(() => {
    setHome(false);
  }, [setHome])

  return (
    <div className={style.container}>
      <img src={AnimationError} alt="animation Error..." className={style.container__animation} />
    </div>
  )
}

export default PageNotFound