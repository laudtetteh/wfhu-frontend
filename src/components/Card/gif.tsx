// Packages
import React from "react";
// Helpers
import { SmartImage } from '../../utils/helpers';

export const Card = ({ gif }) => {
  // const imageUrl =
  //   process.env.NODE_ENV !== "development"
  //     ? gif.image.url
  //     : process.env.REACT_APP_BACKEND_URL + gif.image.url;
    // const imageUrl = gif.image.formats.gif_loop.url;

    const object = gif;
    const content_type = "gif";
    const image_size = "gif_loop";

    const imageUrl = SmartImage({object, content_type, image_size});

    return (
        <React.Fragment>

        <div className="md:mt-0 my-5 md:first:mt-0">
            <div className="card-post--image col-span-1">
                <img src={imageUrl} alt={imageUrl} height="100" className="rounded-xl w-full"/>
            </div>
        </div>

        </React.Fragment>
    );
};
