// Packages
import React from 'react'
import logo from '../../../assets/images/logo.svg'
import { Link, NavLink } from 'react-router-dom';
// Components
import Query from "../../components/Query";
import { MainNav } from "../Nav/main";
// Queries
import TOPMENU_QUERY from "../../queries/top-menu/top-menu";

export const Header = ({links}) => {

    return (

        <React.Fragment>

            <header className='bg-yellow'>
                <Link to="/">
                    {logo()}
                </Link>
            </header>

            <Query query={TOPMENU_QUERY}>
                {({ data: { topMenu } }) => {
                  return <MainNav links={topMenu.link} />;
                }}
            </Query>

        </React.Fragment>
    );
}
