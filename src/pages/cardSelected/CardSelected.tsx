import classNames from "classnames";
import { IProgrammingLanguage } from "interfaces";
import { useTechSelected } from "state/hooks/useTechSelected";
import "./_CardSelected.scss";

const CardSelected = () => {

  const tech:IProgrammingLanguage | null = useTechSelected();
  const ObjectOrientedAndFuncional :boolean = (tech?.ObjectOriented === "Yes" && tech?.Functional ===  "Yes")? true: false;
  const ObjectOriented  :boolean = tech?.ObjectOriented === "Yes"? true: false;
  const Functional :boolean =  tech?.Functional === "Yes" ? true : false;
  const Procedural :boolean =  tech?.Procedural === "Yes" ? true : false;
  const Generic :boolean =  tech?.Generic === "Yes" ? true : false;
  const Reflective :boolean =  tech?.Reflective === "Yes" ? true : false;
  const EventDriven :boolean =  tech?.EventDriven === "Yes" ? true : false;
  const OtherParadigms :boolean =  tech?.OtherParadigms === "Yes" ? true : false;

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
                  <th>About</th>
                </tr>
              </thead>
            <tbody>
              <tr>
                <td colSpan={2} className="nameTech">
                  {tech?.Imperative}
                </td>
              </tr>
              {!ObjectOriented && !Functional && !Procedural && !Generic ? null :
                (<tr>
                  <td colSpan={2} className="tagsTech">
                    {ObjectOriented && <span>Object Oriented</span>}
                    {Functional && <span>Functional</span>}
                    {Procedural && <span>Procedural</span>}
                    {Generic && <span>Generic</span>}
                  </td>
                </tr>)
              }
              {!Reflective && !EventDriven && !OtherParadigms ? null :
                (<tr>
                  <td colSpan={2} className="tagsTech">
                    {Reflective && <span>Reflective</span>}
                    {EventDriven && <span>EventDriven</span>}
                    {OtherParadigms && <span>OtherParadigms</span>}
                  </td>
                </tr>)
              }
              {tech?.Standardized !== "" &&
                <tr>
                  <td colSpan={2} className="tagsTech">
                    <span>{tech?.Standardized}</span>
                  </td>
                </tr>
              }
            </tbody>
            </table>
          </div>
        </article>

    </section>
  )
}

export default CardSelected