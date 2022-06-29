import { atom } from "recoil";
import { themeModeEnum } from "utils/enum/theme-mode-enum";

export const themeMode = atom<themeModeEnum>({
    key: "techsList",
    default: themeModeEnum.lightMode
});