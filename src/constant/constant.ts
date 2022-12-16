import vegetarians from "../assets/icons/ic_vegetarian.svg";
import principales from "../assets/icons/ic_main.svg";
import cakes from "../assets/icons/ic_cake.svg";
import fast from "../assets/icons/ic_fast-food.svg";
import menu from "../assets/icons/ic_kids.svg";
import Soup from "../assets/icons/ic_soup.svg";

/* menu items */
export const menu_item = [
  {
    name: "Home",
    name2: "",
  },
  {
    name: "Vegetarianos",
    img: vegetarians,
    name2: " ",
  },
  {
    name: "Principales ",
    name2: "Platos ",
    img: principales,
  },
  {
    name: "Tortas",
    img: cakes,
    name2: " ",
  },
  {
    name: "Rapida  ",
    name2: "Comida ",
    img: fast,
  },
  {
    name: "Niños ",
    name2: "Menú ",
    img: menu,
  },
  {
    name: "Sopas",
    img: Soup,
    name2: " ",
  },
];

/// api interface  

export interface  apiInterface {
  id: number,
  title: string,
  readyInMinutes: number,
  image: string,
  pricePerServing: string,
  weightWatcherSmartPoints:string,
  preparationMinutes: string,
  servings: string,
  load: boolean 
}