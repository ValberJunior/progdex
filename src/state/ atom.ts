import { IProgrammingLanguage } from "interfaces";
import { atom } from "recoil";
import { themeModeEnum } from "utils/enum/theme-mode-enum";

export const themeMode = atom<themeModeEnum>({
    key: "themeMode",
    default: themeModeEnum.lightMode
});

export const techSelected = atom<IProgrammingLanguage | null>({
    key: "techSelected",
    default: null
})

export const pageHome = atom<boolean>({
    key: "pageHome",
    default: true
})