import React from "react";
import { menu_item } from "../../constant/constant";
import "../../scss/components/menu_burguer.scss";

const Menu_movile = () => {
  return (
    <div className="movile_menu_conted">
      <div className="movile_menu_conted--items">
        {menu_item.slice(1).map((e) => (
          <div className="movile_menu_conted--items--item">
            <img src={e.img} alt={e.name + e.name2} />
            <span>{e.name} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu_movile;
