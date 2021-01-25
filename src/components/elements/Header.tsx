import React from 'react'
import logo from '../../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'

export const Header = ({links}) => {

    return (

        <React.Fragment>

            <header className='bg-yellow'>
                {logo()}
            </header>

            <nav>
                {links.map((link, index) => {

                    return (

                        <NavLink exact
                            to={link.URL} activeClassName="current" key={index}>

                          <span title={link.name}>{link.name}</span>

                        </NavLink>
                    )
                })}
            </nav>

        </React.Fragment>
    );
}
