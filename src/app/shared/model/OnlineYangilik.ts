import { Fayl } from "./fayil";

export interface OnlineYangilik {
    id: number;
    caption: String;
    link: string;
    image: Fayl;
    boshSahifa: boolean;
    tur: string
}