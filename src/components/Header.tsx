import React from 'react'
import logo from '../../assets/images/logo.svg'

export function Header() {

    return (

        <React.Fragment>

            <header className='bg-yellow'>
                {logo()}
            </header>

        </React.Fragment>
    );
}
