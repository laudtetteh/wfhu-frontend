import React from 'react';
import { STFDate, SmartImage } from '../../utils/helpers';
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { STFDate } from '../../utils/helpers';

export const Post = ({post}) => {

    // const imageUrl =
    //   process.env.NODE_ENV !== "development"
    //     ? post.image.url
    //     : process.env.REACT_APP_BACKEND_URL + post.image.url;

    // const imageUrl = post.image.url;

    const object = post;
    const content_type = "post_single";
    const image_size = "post_single";

    const imageUrl = SmartImage({object, content_type, image_size});


    return (

        <React.Fragment>

            <div className="col-span-5 space-y-6">
                <div className="w-full">
                    <img src={imageUrl} alt={imageUrl} className="w-full"/>
                </div>

                <div className="byline">

                    <h3 className="card-post-name font-bellota text-2xl text-gray mb-3">
                        {post.name}
                    </h3>

                    <h4 className="card-post-name font-bellota text-2xl text-gray mb-3">
                        <STFDate _timestamp={post.published_at} _format="MMMM D, YYYY" />
                    </h4>

                    <Link to={`/category/${post.category.slug}`}>
                        <p className="card-post-category text-base text-yellow font-roboto font-normal mt-3 mb-3">
                            {post.category.name}
                        </p>
                    </Link>

                </div>

                <p className="card-post-description text-base font-roboto font-normal mt-3 mb-3">
                    <ReactMarkdown source={post.description} />
                </p>

            </div>
        </React.Fragment>
    )
}
