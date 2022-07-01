import { IProgrammingLanguage } from "interfaces";
import { atom } from "recoil";
import { themeModeEnum } from "utils/enum/theme-mode-enum";

const themeCache = localStorage.getItem("ThemeMode");

export const themeMode = atom<themeModeEnum>({
    key: "themeMode",
    default: themeCache ? JSON.parse(themeCache) : themeModeEnum.lightMode
});

export const techSelected = atom<IProgrammingLanguage | null>({
    key: "techSelected",
    default: null
})

export const pageHome = atom<boolean>({
    key: "pageHome",
    default: true
})