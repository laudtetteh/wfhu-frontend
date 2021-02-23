import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = ({links, containerClasses, containerId, listClasses, listItemClasses, linkClasses}) => {

    return(

        <React.Fragment>

            <div className={`w-full block flex-grow lg:items-center lg:w-auto hidden ${containerClasses}`} id={containerId} >

                <ul className={`text-sm lg:flex-grow  text-center lg:text-right ${listClasses}`}>

                    {links.map((link, index) => {

                        return (
                            <li className={`stf-nav-list-item block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white text-lg ${listItemClasses}`} key={index}>
                                <NavLink exact
                                    to={link.path}
                                    name={link.label}
                                    className={`stf-nav-list-item-link font-roboto text-red-600 no-underline hover:text-darkblue hover:text-underline py-2 px-4 ${linkClasses}`}
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
