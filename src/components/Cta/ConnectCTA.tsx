import React from 'react';

export const ConnectCTA = () => {


    return (
        <React.Fragment>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 posts-loop">

                <div className="mx-auto">
                    <h3 className="section-heading font-bellota text-2xl text-white mb-3">Content Heading</h3>

                    <p className="section-heading font-roboto text-base text-white mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>

                    <a href="#" className="bg-yellow hover:bg-gray hover:text-white text-gray font-roboto font-semibold py-2 px-4 border border-white rounded shadow float-right no-underline">
                        BIG FAT BUTTON!
                    </a>
                </div>

                <div className="float-right">

                    <h3 className="section-heading font-bellota text-2xl text-gray mb-3 float-right">Connect with me!</h3>

                    <ul className="block float-right clear-both">
                        <li className="rounded-full h-8 w-8 flex items-center float-left justify-center bg-gray hover:bg-red inline-block ml-3 first:ml-0">
                            <a href="https://www.youtube.com">
                                <i className="fab fa-youtube bg-none text-blue-light text-lg"></i>
                            </a>
                        </li>
                        <li className="rounded-full h-8 w-8 flex items-center float-left justify-center bg-gray hover:bg-red inline-block ml-3">
                            <a href="https://www.instagram.com">
                                <i className="fab fa-instagram bg-none text-blue-light text-lg"></i>
                            </a>
                        </li>
                        <li className="rounded-full h-8 w-8 flex items-center float-left justify-center bg-gray hover:bg-red inline-block ml-3">
                            <a href="https://www.facebook.com">
                                <i className="fab fa-facebook-f bg-none text-blue-light text-lg"></i>
                            </a>
                        </li>
                        <li className="rounded-full h-8 w-8 flex items-center float-left justify-center bg-gray hover:bg-red inline-block ml-3">
                            <a href="https://www.linkedin.com">
                                <i className="fab fa-linkedin bg-none text-blue-light text-lg"></i>
                            </a>
                        </li>
                        <li className="rounded-full h-8 w-8 flex items-center float-left justify-center bg-gray hover:bg-red inline-block ml-3">
                            <a href="https://www.twitter.com">
                                <i className="fab fa-twitter bg-none text-blue-light text-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </React.Fragment>
    )
}
