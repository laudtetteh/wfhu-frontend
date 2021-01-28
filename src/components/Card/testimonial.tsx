import React from "react";
import { Link } from "react-router-dom";

const Card = ({ testimonial }) => {

  // const imageUrl =
  //   process.env.NODE_ENV !== "development"
  //     ? testimonial.image.url
  //     : process.env.REACT_APP_BACKEND_URL + testimonial.image.url;

    const imageUrl = testimonial.image.formats.testimonial_loop.url;

    return (
        <React.Fragment>

            <div className="">
                <Link to={`/testimonial/${testimonial.id}`} className="">
                    <img src={imageUrl} alt={imageUrl} height="100" />
                </Link>
            </div>

            <div className="">

                <p id="" className="">
                    Content: {testimonial.description}
                </p>

                <p id="name" className="">
                    - {testimonial.name}
                </p>

            </div>

        </React.Fragment>
    );
};

export default Card;
