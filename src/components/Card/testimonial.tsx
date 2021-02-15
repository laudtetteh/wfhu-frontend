// Packages
import React from "react";
import { Link } from "react-router-dom";
// Helpers
import { TrimText, SmartImage } from '../../utils/helpers';

const Card = ({ testimonial }) => {

  // const imageUrl =
  //   process.env.NODE_ENV !== "development"
  //     ? testimonial.image.url
  //     : process.env.REACT_APP_BACKEND_URL + testimonial.image.url;
    // const imageUrl = testimonial.image.formats.testimonial_loop.url;


    const object = testimonial;
    const content_type = "testimonial";
    const image_size = "testimonial_loop";

    const imageUrl = SmartImage({object, content_type, image_size});

    return (
        <React.Fragment>

        <div className="mx-auto">
            <div className="">
                <img src={imageUrl} alt={imageUrl} height="100" className="rounded-xl w-full"/>
            </div>

            <div className="">

                <p className="card-testimonial-description text-base font-roboto font-medium mt-3 mb-3">
                    <TrimText text={testimonial.description} limit="40" />
                </p>

                <p className="card-testimonial-name text-base font-roboto italic">
                    - {testimonial.name}
                </p>

            </div>

        </div>

        </React.Fragment>
    );
};

export default Card;
