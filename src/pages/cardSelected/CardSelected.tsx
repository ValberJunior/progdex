import { IProgrammingLanguage } from "interfaces";
import { useTechSelected } from "state/hooks/useTechSelected";
import style from "./_CardSelected.module.scss";

const CardSelected = () => {

  const tech:IProgrammingLanguage | null = useTechSelected();

  return (
    <section className={style.container}>

        <article className={style.container__desc}>
          <div className={style["container__desc-titleAndTag"]}>
            <h3>{tech?.IntendedUse}</h3>
            <span>
              {tech?.Imperative}
            </span>
          </div>
          <div>
            <span className={style["container__desc-id"]}>#{tech?.Language}</span>
          </div>
        </article>

        <article className={style.container__details}>
          <img src={tech?.Picture}
             alt="imaggggg"
             className={style["container__details-tech"]}
             />
          <div className={style["container__details-table"]}>
            <table>
              <thead>
                <tr>
                  <th>{tech?.IntendedUse}</th>
                  <th>Orientada a Objeto?</th>
                  <th>É funcional?</th>
                  <th>É procedural?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4}>
                    Comentaŕios
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

    </section>
  )
}

export default CardSelected