import React from 'react';

export const IntroCTA = () => {


    return (
        <React.Fragment>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div className="mx-auto  mx-auto py-12">
                    <h3 className="section-heading font-bellota text-2xl text-gray mb-3">Zoom like a pro!</h3>

                    <p className="section-heading font-roboto text-base text-gray mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>

                   <p>Get notified when I publish something new</p>

                </div>

                <div className="float-right intro-section-image bg-cover bg-no-repeat"></div>

            </div>

        </React.Fragment>
    )
}
