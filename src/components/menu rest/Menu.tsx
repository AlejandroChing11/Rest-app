import React, { useState } from "react";

import { menu_item } from "../../constant/constant";
import homeIcon from "../../assets/icons/ic_home.svg";
import '../../scss/components/menu.scss';

const Menu = () => {

    const [Active, setActive] = useState<number>(0);
    const styleActive = { color: '#d84a4a' };


    return (
        <div className="menu_conted">
            <div className="menu_conted--itmes">
                <div className="menu_conted--itmes--logo">
                    <span>Recipe </span>
                    <span>app</span>
                </div>
                <ul className="menu_conted--itmes--text">
                    {menu_item.map((e, i) => (
                        <li className="menu_conted--itmes--text--link"
                            style={Active === i ? styleActive : {}}
                            onClick={() => setActive(i)}
                        >
                            {e.name2 + e.name}
                        </li>
                    ))}
                </ul>
                <div className="menu_conted--itmes--home_logo">
                    <img src={homeIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Menu;