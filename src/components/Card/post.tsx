// Packages
import React from "react";
import { Link } from "react-router-dom";
//Components
import { Paragraphs } from "../../components/Elements/Paragraphs";
// Utilities
import { STFDate, SmartImage, TrimText } from '../../utils/helpers';

export const Card = props => {

    // const imageUrl =
    //     process.env.NODE_ENV !== "development"
    //     ? post.image.url
    //     : process.env.REACT_APP_API_URL + post.image.url;

    const object = props.post;
    const content_type = "post";
    const image_size = "post_loop";

    const imageUrl = SmartImage({object, content_type, image_size});

    if( props.orientation == 'vertical' ) {

        return (

            <React.Fragment>

                <div className={`md:grid md:grid-cols-1 md:grid-cols-3 md:grid-flow-col md:gap-4 w-full md:w-auto post-${props.post.id}`}>

                    <div className="card-post--image col-span-1">

                        <Link to={`/post/${props.post.slug}`} className="card-post--image">
                            <img src={imageUrl} alt={imageUrl} height="100" className="w-full"/>
                        </Link>

                    </div>

                    <div className="card-post--details col-span-2 mt-3 md:mt-0">

                        <Link to={`/post/${props.post.slug}`} className="card-post--title font-roboto no-underline">
                            <p id="name" className="font-roboto text-base text-black font-medium">
                                {props.post.name}
                            </p>
                        </Link>

                        <p id="" className="card-post--date font-roboto text-xs text-black font-thin italic">
                            <STFDate _timestamp={props.post.published_at} _format="MMMM D, YYYY" />
                        </p>

                        {props.post.excerpt &&

                            <Paragraphs text={props.post.excerpt} classes="font-roboto text-base text-black font-normal mt-5" limit={200} />
                        }

                    </div>

                </div>

            </React.Fragment>
        );
    }

    return (

        <React.Fragment>

            <div className={`posts-loop posts-loop--vertical md:mt-0 mt-5 md:first:mt-0 post-${props.post.id}`}>

                <div className="card-post--image">
                    <Link to={`/post/${props.post.slug}`} className="card-post--image">
                        <img src={imageUrl} alt={imageUrl} height="100" className="w-full"/>
                    </Link>
                </div>

                <div className="card-post--details mt-3">
                    <Link to={`/post/${props.post.slug}`} className="card-post--title font-roboto font-medium no-underline">
                        <p id="name" className={`font-roboto ${props.nameClasses}`}>
                            {props.post.name}
                        </p>
                    </Link>

                    <p id="" className={`card-post--date font-roboto ${props.dateClasses}`}>
                        <STFDate _timestamp={props.post.published_at} _format="MMMM D, YYYY" />
                    </p>
                </div>

            </div>

        </React.Fragment>
    );
};
