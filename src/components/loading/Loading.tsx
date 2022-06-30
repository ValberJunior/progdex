import LoadingGif from "assets/animations/loading.gif";
import style from "./_Loading.module.scss";

const Loading = () => {
  return (
    <div className={style.container}>
        <img src={LoadingGif} alt="animation loading" className={style.container__animation}/>
    </div>
  )
}

export default Loading