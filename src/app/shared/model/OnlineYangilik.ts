import { Fayl } from "./fayil";
import { Tur } from "./Tur";

export interface OnlineYangilik {
    id: number;
    caption: String;
    link: string;
    image: Fayl;
    boshSahifa: boolean;
    tur: Tur
}