import { useRecoilValue } from "recoil"
import { themeMode } from "state/ atom"


export const useThemeMode = () =>{
    const themeModeValue = useRecoilValue(themeMode);
    return themeModeValue;
}