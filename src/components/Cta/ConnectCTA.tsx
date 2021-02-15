import React from 'react';

export const ConnectCTA = ({pageBag, siteOptions}) => {

    return (

        <React.Fragment>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 posts-loop">

                <div className="mx-auto">
                    <h3 className="section-heading font-bellota text-2xl text-white mb-3 stf-text-shadow-gray-bottom-right">{pageBag.connect_cta.heading}</h3>

                    <p className="section-heading font-roboto text-base text-white mb-3">
                        {pageBag.connect_cta.paragraph}
                    </p>

                    <a href="{pageBag.connect_cta.button_link}" className="bg-yellow hover:bg-gray hover:text-white text-gray font-roboto font-semibold py-2 px-4 border border-white rounded shadow float-right no-underline">
                        {pageBag.connect_cta.button_text}
                    </a>
                </div>

                <div className="float-right">

                    <h3 className="section-heading font-bellota text-2xl text-gray mb-3 float-right stf-text-shadow-white-top-left">Connect with me!</h3>

                    <ul className="block float-right clear-both">
                        <li className="rounded-full h-8 w-8 flex items-center float-left justify-center bg-gray hover:bg-red inline-block ml-3 first:ml-0">
                            <a href={siteOptions.social.youtube}>
                                <i className="fab fa-youtube bg-none text-blue-100 text-lg"></i>
                            </a>
                        </li>
                        <li className="rounded-full h-8 w-8 flex items-center float-left justify-center bg-gray hover:bg-red inline-block ml-3">
                            <a href={siteOptions.social.instagram}>
                                <i className="fab fa-instagram bg-none text-blue-100 text-lg"></i>
                            </a>
                        </li>
                        <li className="rounded-full h-8 w-8 flex items-center float-left justify-center bg-gray hover:bg-red inline-block ml-3">
                            <a href={siteOptions.social.facebook}>
                                <i className="fab fa-facebook-f bg-none text-blue-100 text-lg"></i>
                            </a>
                        </li>
                        <li className="rounded-full h-8 w-8 flex items-center float-left justify-center bg-gray hover:bg-red inline-block ml-3">
                            <a href={siteOptions.social.linkedin}>
                                <i className="fab fa-linkedin bg-none text-blue-100 text-lg"></i>
                            </a>
                        </li>
                        <li className="rounded-full h-8 w-8 flex items-center float-left justify-center bg-gray hover:bg-red inline-block ml-3">
                            <a href={siteOptions.social.twitter}>
                                <i className="fab fa-twitter bg-none text-blue-100 text-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </React.Fragment>
    )
}
