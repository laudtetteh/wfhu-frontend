import React from 'react';
import * as CSS from 'csstype';
import { SignupForm } from '../Forms/MailChimp';
import { SmartImage } from '../../utils/helpers';

export const IntroCTA = (props) => {

    const object = props.pageBag.intro_cta;
    const content_type = "split_section";
    const image_size = "split_section";

    const imageUrl = SmartImage({object, content_type, image_size});

    // CSS for hidden fields
    const introImage: CSS.Properties = {
        "backgroundImage": `url(${imageUrl})`,
    };

    return (

        <React.Fragment>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div className="mx-auto py-12 lg:mr-5">
                    <h3 className="section-heading font-bellota text-2xl text-white mb-3">{props.pageBag.intro_cta.intro_heading}</h3>

                    <p className="section-paragraph font-roboto text-base text-white mb-3">
                        {props.pageBag.intro_cta.intro_paragraph}
                    </p>

                    <p className="section-paragraph font-roboto text-base text-white mb-2 mt-10 font-medium">
                        Get notified when I publish something new
                    </p>

                   <div className="signup-form-container">
                        <SignupForm />
                   </div>

                </div>

                <div className="intro-section-image float-right bg-cover bg-no-repeat" style={introImage}></div>

            </div>

        </React.Fragment>
    )
}
