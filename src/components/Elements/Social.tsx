import React from 'react';

export const Social = (props) => {

    const socialLinks = props.siteOptions.social;

    const _linkLookup = {
        linkedin: "linkedin",
        facebook: "facebook-f",
        instagram: "instagram",
        twitter: "twitter",
    }

    return (

        <React.Fragment>

            <div className={`social-buttons ${props.containerClasses}`}>

                <h3 className={`section-heading font-bellota text-2xl text-${props.headingColor} mb-3 ${props.headingClasses}`}>Connect with me!</h3>

                <ul className={`block clear-both overflow-hidden ${props.listClasses}`}>

                {Object.keys(socialLinks).map((link) => {

                    {if(link in _linkLookup) {

                        return (

                            <li key={link} className={`rounded-full h-8 w-8 flex items-center float-left justify-center inline-block ml-3 first:ml-0`}>
                                <a href={socialLinks[link]}>
                                    <i className={`fab fa-${_linkLookup[link]} bg-none text-lg`}></i>
                                </a>
                            </li>
                        )
                    }}
                )}

                </ul>
            </div>
        </React.Fragment>
    )
}
