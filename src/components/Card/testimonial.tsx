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
            <Link to={`/testimonial/${testimonial.id}`} className="uk-link-reset">
                <div className="uk-card uk-card-muted">


                    <div className="uk-card-media-top">
                        <img src={imageUrl} alt={imageUrl} height="100" />
                    </div>


                    <div className="uk-card-body">

                        <p id="description" className="uk-text-large">
                            Content: {testimonial.description}
                        </p>

                        <p id="name" className="uk-text-large">
                            - {testimonial.name}
                        </p>

                    </div>
                </div>
            </Link>
        </React.Fragment>
  );
};

export default Card;
