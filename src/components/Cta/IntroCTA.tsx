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
                    <h3 className="section-heading font-bellota text-2xl text-white opacity-90 mb-3">{props.pageBag.intro_cta.intro_heading}</h3>

                    <div className="section-paragraph page-content font-roboto text-base text-white opacity-90 mb-3 font-light">
                        {props.pageBag.intro_cta.intro_paragraph}
                    </div>

                    <p className="section-paragraph font-roboto text-base text-white opacity-90 mb-2 mt-10 font-medium">
                        {props.pageBag.intro_cta.intro_form_blurb}
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
