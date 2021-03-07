// Packages
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
// Components
import { Query } from "../../components/Query";
import { MainNav } from "../Nav/main";
// Assets
import logo from '../../../assets/images/logo.svg'
// Queries
import { TOPMENU_QUERY } from "../../queries";

export const Header = (props) => {

    return (

        <React.Fragment>

            <div className="container mx-auto">

                <nav className="flex items-center justify-between flex-wrap bg-white py-6 w-full z-10 top-0">

                    <div className="mr-6 site-logo-container md:max-w-md">
                        <Link to="/" className="text-white no-underline hover:text-white hover:no-underline">
                                <img src={logo} alt="" className="site-logo" />
                        </Link>
                    </div>

                    <div className="block lg:hidden">
                        <button onClick={props.toggleFunction} id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-darkblue border-darkblue hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
                        </button>
                    </div>

                    <Query query={TOPMENU_QUERY}>
                        {({ data: { topMenu } }) => {
                            return <MainNav
                                links={topMenu.link}
                                containerClasses="lg:flex"
                                containerId=""
                                menuVisibility={false}
                                hideMenu={props.hideMenu}
                                listClasses=""
                                listItemClasses="stf-main-nav-list-item mr-4"
                                linkClasses="stf-main-nav-link inline-block stf-nav-list-item-link hover:text-darkblue" />;
                        }}
                    </Query>

                </nav>

            </div>

            <Query query={TOPMENU_QUERY}>
                {({ data: { topMenu } }) => {
                    return <MainNav
                        links={topMenu.link}
                        containerClasses="lg:hidden"
                        containerId="nav-content"
                        menuVisibility={props.menuVisibility}
                        hideMenu={props.hideMenu}
                        listClasses=""
                        listItemClasses=""
                        linkClasses="block hover:bg-blue-100 hover:text-white" />;
                }}
            </Query>

        </React.Fragment>
    );
}
