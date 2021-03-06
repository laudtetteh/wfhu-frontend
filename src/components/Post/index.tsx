import React from 'react';
import { STFDate, SmartImage } from '../../utils/helpers';
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { STFDate } from '../../utils/helpers';

export const PostComponent = ({post}) => {

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

            <div className="col-span-5">

                <a href="/blog">
                    <h4 className="section-heading font-bellota text-3xl text-red text-left mb-5">&lt;All Posts</h4>
                </a>

                <div className="w-full">
                    <img src={imageUrl} alt={imageUrl} className="w-full"/>
                </div>

                <div className="byline">

                    <h3 className="card-post-name font-roboto text-2xl text-black my-3">

                        {post.name}

                    </h3>

                    <p className="card-post-name font-roboto text-base text-darkblue mb-3">
                        <STFDate _timestamp={post.published_at} _format="MMMM D, YYYY" />

                        <span className="font-thin"> | </span>

                        <Link to={`/category/${post.category.slug}`}>
                            <span className="card-post-category text-base text-darkblue font-roboto font-normal mt-3 mb-3">
                                <i className="fa fa-tags bg-none text-darkblue text-sm mr-1"></i>
                                {post.category.name}
                            </span>
                        </Link>
                    </p>

                </div>

                <p className="card-post-description text-base font-roboto font-normal mt-3 mb-3">
                    <ReactMarkdown source={post.description} />
                </p>

            </div>
        </React.Fragment>
    )
}
