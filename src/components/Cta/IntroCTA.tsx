import React from 'react';
import { SignupForm } from '../Forms/MailChimp';

export const IntroCTA = () => {


    return (
        <React.Fragment>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div className="mx-auto  mx-auto py-12 lg:mr-5">
                    <h3 className="section-heading font-bellota text-2xl text-gray mb-3 stf-text-shadow-white-top-left">Zoom like a pro!</h3>

                    <p className="section-paragraph font-roboto text-base text-gray mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>

                    <p className="section-paragraph font-roboto text-base text-gray mb-2 font-medium">
                        Get notified when I publish something new
                    </p>

                   <div className="signup-form-container">
                        <SignupForm />
                   </div>

                </div>

                <div className="section-image intro-section-image float-right bg-auto bg-no-repeat"></div>

            </div>

        </React.Fragment>
    )
}
