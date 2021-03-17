import React from 'react';
import * as CSS from 'csstype';
import { SignupForm } from '../Forms/MailChimp';
import { SmartImage } from '../../utils/helpers';

export const IntroCTA = (props) => {

    const object = props.intro_cta;
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
                    <h3 className="section-heading font-bellota text-2xl text-white opacity-90 mb-3">{props.intro_cta.intro_heading}</h3>

                    <div className="section-paragraph page-content font-roboto text-base text-white opacity-90 mb-3">
                        <span className="intro_paragraph font-roboto" dangerouslySetInnerHTML={{__html: props.intro_cta.intro_paragraph}} />
                    </div>

                    <p className="section-paragraph font-roboto text-base text-white opacity-90 mb-2 mt-10 font-medium">
                        Subscribe to her mailing list and enter a monthly drawing for a free 20-minute 1:1 Zoom diagnostic session with Elisabeth.
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
