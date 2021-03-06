// Packages
import React from "react";
import { Link } from "react-router-dom";
// Helpers
import { TrimText, SmartImage } from '../../utils/helpers';

export const Card = props => {

  // const imageUrl =
  //   process.env.NODE_ENV !== "development"
  //     ? testimonial.image.url
  //     : process.env.REACT_APP_BACKEND_URL + testimonial.image.url;
    // const imageUrl = testimonial.image.formats.testimonial_loop.url;

    const object = props.testimonial;
    const content_type = "testimonial";
    const image_size = "testimonial_loop";

    const imageUrl = SmartImage({object, content_type, image_size});

    return (
        <React.Fragment>

        <div className="mx-auto md:mt-0 mt-1 md:first:mt-0">

            { props.testimonial.description &&

                <p className="card-testimonial-description text-base font-roboto font-medium mt-3 mb-3">
                    <i aria-hidden="true" className="fa fa-quote-left inline mr-2"></i>
                    {props.testimonial.description}
                    <i aria-hidden="true" className="fa fa-quote-right text-xs inline ml-2"></i>
                </p>
            }

            { props.testimonial.name &&
                <p className="card-testimonial-name text-base font-roboto italic">
                    - {props.testimonial.name}
                </p>
            }

        </div>

        </React.Fragment>
    );
};
