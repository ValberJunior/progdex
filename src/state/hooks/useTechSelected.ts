import { useRecoilValue } from "recoil"
import { techSelected } from "state/ atom"


export const useTechSelected = () => {
    const techSelectedValue = useRecoilValue(techSelected);
    return techSelectedValue;
}