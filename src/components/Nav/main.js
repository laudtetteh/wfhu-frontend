import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = ({links}) => {

    return(
        <React.Fragment>
        <ul className="flex">
            {links.map((link, index) => {

                return (
                    <li className="mr-6">
                        <NavLink exact
                            to={link.path}
                            name={link.label}
                            className="text-red hover:text-yellow"
                            activeClassName="current"
                            key={index}>

                          {link.label}

                        </NavLink>
                    </li>
                )
            })}
        </ul>

        </React.Fragment>

    );
};

export { MainNav };
