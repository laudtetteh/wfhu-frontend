// Packages
import React from 'react'
import { Social } from '../Elements/Social';

export const Footer = props => {

    return (

        <React.Fragment>

            <section className="section-footer w-full bg-darkblue text-white py-16 h-60 bottom-0 absolute">

                <div className="container">

                    <Social
                        siteOptions={props.siteOptions}
                        headingColor="white"
                        containerClasses="mx-auto"
                        headingClasses="mb-3 text-center font-bold"
                        listClasses="flex justify-center"
                    />

                    <p className="font-roboto mx-auto block text-center mt-3">&copy; {new Date().getFullYear()} Work from Home University, LLC</p>
                </div>

            </section>

        </React.Fragment>
    );
}
