import { useRecoilValue } from "recoil"
import { pageHome } from "state/ atom"


export const usePageHome = () => {
    const value = useRecoilValue(pageHome);
    return value;
}