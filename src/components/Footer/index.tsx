// Packages
import React from 'react'
import { Social } from '../Elements/Social';

export const Footer = ({siteOptions, iconColor, iconBgColor, iconHvColor, headingColor, containerClass, headingClass}) => {

    return (

        <React.Fragment>

            <section className="section-footer w-full bg-gray text-white py-16">

                <div className="container">

                    <Social
                        siteOptions={siteOptions}
                        iconColor={iconColor}
                        iconBgColor={iconBgColor}
                        iconHvColor={iconHvColor}
                        headingColor={headingColor}
                        containerClass={containerClass}
                        headingClass={headingClass}
                    />

                    <p className="font-roboto mx-auto block text-center mt-3">&copy; {new Date().getFullYear()} Work from Home University</p>
                </div>

            </section>

        </React.Fragment>
    );
}
