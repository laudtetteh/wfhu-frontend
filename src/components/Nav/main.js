import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = ({links}) => {

    return(

        <nav>
            {links.map((link, index) => {

                return (

                    <NavLink exact
                        to={link.URL}
                        activeClassName="current"
                        key={index}>

                      <span name={link.name}>{link.name}</span>

                    </NavLink>
                )
            })}
        </nav>

    );
};

export { MainNav };
