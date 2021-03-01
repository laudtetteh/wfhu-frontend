import React from 'react';
import { STFDate, SmartImage } from '../../utils/helpers';
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { STFDate } from '../../utils/helpers';

export const Event = ({event}) => {

    // const imageUrl =
    //   process.env.NODE_ENV !== "development"
    //     ? event.image.url
    //     : process.env.REACT_APP_BACKEND_URL + event.image.url;

    // const imageUrl = event.image.url;

    const object = event;
    const content_type = "event_single";
    const image_size = "event_single";

    const imageUrl = SmartImage({object, content_type, image_size});

    return (

        <React.Fragment>

            <div className="col-span-5 space-y-6">
                <div className="w-full">
                    <img src={imageUrl} alt={imageUrl} className="w-full"/>
                </div>

                <div className="byline">

                    <h3 className="card-event-name font-roboto text-2xl text-black mb-3">

                        {event.name}

                    </h3>

                    <p className="card-event-name font-roboto text-base text-darkblue mb-3">
                        <STFDate _timestamp={event.published_at} _format="MMMM D, YYYY" />

                        <span className="font-thin"> | </span>

                        <Link to={`/category/${event.category.slug}`}>
                            <span className="card-event-category text-base text-darkblue font-roboto font-normal mt-3 mb-3">
                                <i className="fa fa-tags bg-none text-darkblue text-sm mr-1"></i>
                                {event.category.name}
                            </span>
                        </Link>
                    </p>

                </div>

                <p className="card-event-description text-base font-roboto font-normal mt-3 mb-3">
                    <ReactMarkdown source={event.description} />
                </p>

            </div>
        </React.Fragment>
    )
}
