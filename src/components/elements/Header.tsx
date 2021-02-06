// Packages
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CSS from 'csstype';
// Components
import Query from "../../components/Query";
import { MainNav } from "../Nav/main";
// Assets
import logo from '../../../assets/images/logo.svg'
// Queries
import TOPMENU_QUERY from "../../queries/top-menu/top-menu";

const svgContainer: CSS.Properties = {
    maxWidth: '400px'
};

export const Header = () => {

    return (

        <React.Fragment>

            <nav className="flex items-center justify-between flex-wrap bg-white py-6 w-full z-10 top-0">

                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to="/" className="text-white no-underline hover:text-white hover:no-underline site-logo">
                            {logo()}
                    </Link>
                </div>

                <div className="block lg:hidden">
                    <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray border-gray-600 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
                    </button>
                </div>

                <Query query={TOPMENU_QUERY}>
                    {({ data: { topMenu } }) => {
                      return <MainNav links={topMenu.link} />;
                    }}
                </Query>

            </nav>

        </React.Fragment>
    );
}
