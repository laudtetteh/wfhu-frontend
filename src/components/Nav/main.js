import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = ({links}) => {

    return(
        <React.Fragment>
        <ul className="flex">
            {links.map((link, index) => {

                return (
                    <li className="mr-6" key={index}>
                        <NavLink exact
                            to={link.path}
                            name={link.label}
                            className="text-red hover:text-yellow"
                            activeClassName="current">

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
