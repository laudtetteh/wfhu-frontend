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

                    <button class="bg-yellow hover:bg-gray hover:text-white text-gray font-roboto font-semibold py-2 px-4 border border-white rounded shadow float-right  ">
                        Big Fat Button!
                    </button>
                </div>

                <div className="mx-auto">
                    <h3 className="section-heading font-bellota text-2xl text-gray mb-3">Connect with me!</h3>
                    <ul>
                        <li><i className="fa fa-facebook"></i></li>
                    </ul>
                </div>

            </div>

        </React.Fragment>
    )
}
