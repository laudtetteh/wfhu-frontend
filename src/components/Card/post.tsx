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

            <div className="">
                <Link to={`/post/${post.id}`}>
                    <img src={imageUrl} alt={imageUrl} height="100" className="w-full"/>
                </Link>
            </div>

            <div className="">
                <Link to={`/post/${post.id}`}>
                    <p id="name" className="">
                        Title: {post.name}
                    </p>
                </Link>
            </div>

            <Link to={`/category/${post.category.id}`}>
                <p id="" className="">
                    Category: {post.category.name}
                </p>
            </Link>

            <p id="" className="">
                <STFDate _timestamp={post.published_at} _format="MMMM D, YYYY" />
            </p>

        </React.Fragment>
    );
};

export default Card;
