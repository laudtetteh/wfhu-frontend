import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = ({links}) => {

    return(

        <React.Fragment>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">

                    {links.map((link, index) => {

                        return (
                            <li className="mr-3" key={index}>
                                <NavLink exact
                                    to={link.path}
                                    name={link.label}
                                    className="inline-block text-gray-600 no-underline hover:text-gray hover:text-underline py-2 px-4"
                                    activeClassName="current">

                                  {link.label}

                                </NavLink>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </React.Fragment>
    );
};

export { MainNav };
