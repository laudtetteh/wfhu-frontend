// Packages
import React from 'react'
import { Social } from '../Elements/Social';

export const Footer = ({siteOptions, iconColor, iconBgColor, iconHvColor, headingColor, containerClasses, headingClasses, listClasses}) => {

    return (

        <React.Fragment>

            <section className="section-footer w-full bg-darkblue text-white py-16">

                <div className="container">

                    <Social
                        siteOptions={siteOptions}
                        headingColor={headingColor}
                        containerClasses={containerClasses}
                        headingClasses={headingClasses}
                        listClasses={listClasses}
                    />

                    <p className="font-roboto mx-auto block text-center mt-3">&copy; {new Date().getFullYear()} Work from Home University</p>
                </div>

            </section>

        </React.Fragment>
    );
}
