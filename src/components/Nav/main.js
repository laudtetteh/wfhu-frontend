import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const MainNav = (props) => {

    const location = useLocation();

    useEffect(() => {

        if( location.pathname !== undefined ) {
            props.hideMenu()
        }

    }, [location.pathname])

    return (

        <React.Fragment>

            <div className={`w-full block flex-grow lg:items-center lg:w-auto ${props.menuVisibility ? '' : 'hidden'} ${props.containerClasses}`} id={props.containerId} >

                <ul className={`text-sm lg:flex-grow  text-center lg:text-right ${props.listClasses}`}>

                    {props.links.map((link, index) => {

                        return (
                            <li className={`stf-nav-list-item block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white text-lg ${props.listItemClasses}`} key={index}>
                                <NavLink exact
                                    to={link.path}
                                    name={link.label}
                                    className={`stf-nav-link font-roboto text-red-600 no-underline py-2 px-4 ${props.linkClasses}`}
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
