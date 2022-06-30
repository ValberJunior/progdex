import classNames from "classnames";
import { IProgrammingLanguage } from "interfaces";
import { useTechSelected } from "state/hooks/useTechSelected";
import "./_CardSelected.scss";

const CardSelected = () => {

  const tech:IProgrammingLanguage | null = useTechSelected();
  const ObjectOrientedAndFuncional :boolean = (tech?.ObjectOriented === "Yes" && tech?.Functional ===  "Yes")? true: false;
  const ObjectOriented  :boolean = tech?.ObjectOriented === "Yes"? true: false;
  const Functional :boolean =  tech?.Functional === "Yes" ? true : false;

  return (
    <section className={classNames({
      "containerCard" : true,
      "bgOF" : ObjectOrientedAndFuncional,
      "bgfC" : Functional,
      "bgOO" : ObjectOriented,
      "bgNo" : !Functional && !ObjectOriented})}>

        <article className="containerCard__desc">
          <div className="containerCard__desc-titleAndTag">
            <h3>{tech?.IntendedUse}</h3>
            <span>
              {tech?.Imperative}
            </span>
          </div>
          <div>
            <span className="containerCard__desc-id">#{tech?.Language}</span>
          </div>
        </article>

        <article className="containerCard__details">
          <img src={tech?.Picture}
             alt={tech?.IntendedUse}
             className="containerCard__details-tech"
             />
          <div className="containerCard__details-table">
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