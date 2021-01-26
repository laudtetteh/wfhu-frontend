import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = ({links}) => {

    return(

        <nav>
            {links.map((link, index) => {

                return (

                    <NavLink exact
                        to={link.path}
                        activeClassName="current"
                        key={index}>

                      <span name={link.label}>{link.label}</span>

                    </NavLink>
                )
            })}
        </nav>

    );
};

export { MainNav };
