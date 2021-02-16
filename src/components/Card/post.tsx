import React from "react";
import { Link } from "react-router-dom";
import { STFDate, SmartImage } from '../../utils/helpers';

const Card = ({ post, orientation }) => {

    // const imageUrl =
    //     process.env.NODE_ENV !== "development"
    //     ? post.image.url
    //     : process.env.REACT_APP_BACKEND_URL + post.image.url;

    const object = post;
    const content_type = "post";
    const image_size = "post_loop";

    const imageUrl = SmartImage({object, content_type, image_size});

    if( orientation == 'vertical' ) {

        return (

            <React.Fragment>

                <div className={`grid grid-cols-1 md:grid-cols-3 grid-flow-col gap-4 post-${post.id}`}>

                    <div className="card-post--image col-span-1">
                        <Link to={`/post/${post.slug}`} className="card-post--image">
                            <img src={imageUrl} alt={imageUrl} height="100" className="w-full"/>
                        </Link>
                    </div>


                    <div className="card-post--details col-span-2">
                        <Link to={`/post/${post.slug}`} className="card-post--title font-roboto no-underline">
                            <p id="name" className="font-roboto text-base text-black font-medium">
                                {post.name}
                            </p>
                        </Link>


                        <p id="" className="card-post--date font-roboto text-xs text-black font-thin italic">
                            <STFDate _timestamp={post.published_at} _format="MMMM D, YYYY" />
                        </p>
                    </div>

                </div>

            </React.Fragment>
        );
    }

    return (

        <React.Fragment>

            <div className={`post-${post.id}`}>

                <div className="card-post--image">
                    <Link to={`/post/${post.slug}`} className="card-post--image">
                        <img src={imageUrl} alt={imageUrl} height="100" className="w-full"/>
                    </Link>
                </div>


                <div className="card-post--details">
                    <Link to={`/post/${post.slug}`} className="card-post--title font-roboto no-underline">
                        <p id="name" className="font-roboto text-base text-yellow">
                            {post.name}
                        </p>
                    </Link>


                    <p id="" className="card-post--date font-roboto text-xs text-blue-100 italic">
                        <STFDate _timestamp={post.published_at} _format="MMMM D, YYYY" />
                    </p>
                </div>

            </div>

        </React.Fragment>
    );
};

export default Card;
