import React from "react";
import { Link } from "react-router-dom";
import { STFDate } from '../../utils/helpers';

const Card = ({ post }) => {

    // const imageUrl =
    //     process.env.NODE_ENV !== "development"
    //     ? post.image.url
    //     : process.env.REACT_APP_BACKEND_URL + post.image.url;

    const imageUrl = post.image.formats.post_loop.url;

    return (
        <React.Fragment>

            <Link to={`/post/${post.id}`} className="card-post--image">
                <img src={imageUrl} alt={imageUrl} height="100" className="w-full"/>
            </Link>


            <Link to={`/post/${post.id}`} className="card-post--title font-roboto no-underline">
                <p id="name" className="font-roboto text-base text-yellow">
                    {post.name}
                </p>
            </Link>


            <p id="" className="card-post--date font-roboto text-xs text-blue-100 italic">
                <STFDate _timestamp={post.published_at} _format="MMMM D, YYYY" />
            </p>

        </React.Fragment>
    );
};

export default Card;
