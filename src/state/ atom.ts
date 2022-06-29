import { atom } from "recoil";
import { IProgrammingLanguage } from "interfaces";
import Data from "data/data.json";

const typeData = typeof Data;

export const techsList = atom<IProgrammingLanguage[]>({
    key: "techsList",
    default: []
});