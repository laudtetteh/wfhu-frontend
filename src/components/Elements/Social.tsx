import React from 'react';

export const Social = ({siteOptions, headingColor, containerClasses, headingClasses, listClasses}) => {

    return (

        <React.Fragment>
            <div className={`social-buttons ${containerClasses}`}>
                <h3 className={`section-heading font-bellota text-2xl text-${headingColor} mb-3 ${headingClasses}`}>Connect with me!</h3>

                <ul className={`block clear-both overflow-hidden ${listClasses}`}>
                    <li className={`rounded-full h-8 w-8 flex items-center float-left justify-center inline-block ml-3 first:ml-0`}>
                        <a href={siteOptions.social.youtube}>
                            <i className={`fab fa-youtube bg-none text-lg`}></i>
                        </a>
                    </li>

                    <li className={`rounded-full h-8 w-8 flex items-center float-left justify-center inline-block ml-3 first:ml-0`}>
                        <a href={siteOptions.social.instagram}>
                            <i className={`fab fa-instagram bg-none text-lg`}></i>
                        </a>
                    </li>

                    <li className={`rounded-full h-8 w-8 flex items-center float-left justify-center inline-block ml-3 first:ml-0`}>
                        <a href={siteOptions.social.facebook}>
                            <i className={`fab fa-facebook-f bg-none text-lg`}></i>
                        </a>
                    </li>

                    <li className={`rounded-full h-8 w-8 flex items-center float-left justify-center inline-block ml-3 first:ml-0`}>
                        <a href={siteOptions.social.linkedin}>
                            <i className={`fab fa-linkedin bg-none text-lg`}></i>
                        </a>
                    </li>

                    <li className={`rounded-full h-8 w-8 flex items-center float-left justify-center inline-block ml-3 first:ml-0`}>
                        <a href={siteOptions.social.twitter}>
                            <i className={`fab fa-twitter bg-none text-lg`}></i>
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
