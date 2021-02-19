import React from 'react';

import { Social } from '../Elements/Social';

export const ConnectCTA = ({pageBag, siteOptions, iconColor, iconBgColor, iconHvColor, headingColor, containerClass, headingClass}) => {

    return (

        <React.Fragment>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 posts-loop">

                <div className="mx-auto">
                    <h3 className="section-heading font-bellota text-2xl text-white mb-3 stf-text-shadow-darkblue-bottom-right">{pageBag.connect_cta.heading}</h3>

                    <p className="section-heading font-roboto text-base text-white mb-3">
                        {pageBag.connect_cta.paragraph}
                    </p>

                    <a href={pageBag.connect_cta.button_link} className="bg-yellow hover:bg-darkblue hover:text-white text-darkblue text-center block font-roboto font-semibold py-2 px-4 mt-10 md:mt-0 border border-white rounded shadow md:float-right float-none md:mx-0 mx-auto no-underline">
                        {pageBag.connect_cta.button_text}
                    </a>
                </div>

                <div className="float-right mx-auto md:mx-0">

                    <Social
                        siteOptions={siteOptions}
                        iconColor={iconColor}
                        iconBgColor={iconBgColor}
                        iconHvColor={iconHvColor}
                        headingColor={headingColor}
                        containerClass={containerClass}
                        headingClass={headingClass}
                    />

                </div>

            </div>

        </React.Fragment>
    )
}
