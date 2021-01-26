import React from 'react'
import logo from '../../../assets/images/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { MainNav } from "../Nav/main";

export const Header = ({links}) => {

    return (

        <React.Fragment>

            <header className='bg-yellow'>
                <Link to="/">
                    {logo()}
                </Link>
            </header>

            <MainNav links={links} />

        </React.Fragment>
    );
}
