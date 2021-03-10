import React from 'react';

import { Social } from '../Elements/Social';

export const ConnectCTA = (props) => {

    return (

        <React.Fragment>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 posts-loop">

                <div className="section-connect--left">
                    <h3 className="section-heading font-bellota text-2xl text-white mb-3 stf-text-shadow-darkblue-bottom-right">{props.pageBag.connect_cta.heading}</h3>

                    <div className="section-heading font-roboto text-base text-white mb-3">
                        {props.pageBag.connect_cta_paragraph}
                    </div>

                    <a href={props.pageBag.connect_cta.button_link} className="bg-yellow hover:bg-darkblue hover:text-white text-darkblue text-center block font-roboto font-semibold py-2 px-4 mt-10 md:mt-0 border border-white rounded shadow md:float-right float-none md:mx-0 mx-auto no-underline">
                        {props.pageBag.connect_cta.button_text}
                    </a>
                </div>

                <div className="section-connect--right md:float-right float-none sm:mx-auto md:mx-0">
                    <Social
                        siteOptions={props.siteOptions}
                        iconColor={props.iconColor}
                        iconBgColor={props.iconBgColor}
                        iconHvColor={props.iconHvColor}
                        headingColor={props.headingColor}
                        containerClasses={props.containerClasses}
                        headingClasses={props.headingClasses}
                        listClasses={props.listClasses}
                    />
                </div>

            </div>

        </React.Fragment>
    )
}
