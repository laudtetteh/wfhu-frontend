// Packages
import React from "react";
import { Link } from "react-router-dom";
// Helpers
import { TrimText, SmartImage } from '../../utils/helpers';

export const Card = props => {

  // const imageUrl =
  //   process.env.NODE_ENV !== "development"
  //     ? review.image.url
  //     : process.env.REACT_APP_BACKEND_URL + review.image.url;
    // const imageUrl = review.image.formats.review_loop.url;

    const object = props.review;
    const content_type = "review";
    const image_size = "review_loop";

    const imageUrl = SmartImage({object, content_type, image_size});

    return (
        <React.Fragment>

        <div className="mx-auto md:mt-0 mt-1 md:first:mt-0">

            { props.review.description &&

                <p className="card-review-description text-base font-roboto font-medium mt-3 mb-3">
                    <i aria-hidden="true" className="fa fa-quote-left inline mr-2"></i>
                    {props.review.description}
                    <i aria-hidden="true" className="fa fa-quote-right text-xs inline ml-2"></i>
                </p>
            }

            { props.review.name &&
                <p className="card-review-name text-base font-roboto italic">
                    - {props.review.name}
                </p>
            }

        </div>

        </React.Fragment>
    );
};
