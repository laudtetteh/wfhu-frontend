import React from "react";
import { Link } from "react-router-dom";
import { STFDate, STFStartEndDates, SmartImage, TrimText } from '../../utils/helpers';

export const Card = ({ event }) => {
    // const imageUrl =
    //     process.env.NODE_ENV !== "development"
    //     ? event.image.url
    //     : process.env.REACT_APP_BACKEND_URL + event.image.url;

    const object = event;
    const content_type = "event";
    const image_size = "post_loop";

    const imageUrl = SmartImage({object, content_type, image_size});

    return (

        <React.Fragment>

            <div className={`md:mt-0 mt-5 first:mt-0 event-${event.id}`}>

                <div className="card-event--image">
                    <Link to={`/event/${event.slug}`} className="card-event--image">
                        <img src={imageUrl} alt={imageUrl} height="100" className="w-full"/>
                    </Link>
                </div>


                <div className="card-event--details mt-3">
                    <Link to={`/event/${event.slug}`} className="card-event--title font-roboto no-underline">
                        <p id="name" className="font-roboto text-base text-yellow">
                            {event.name}
                        </p>
                    </Link>


                    <p id="" className="card-event--date font-roboto text-xs text-darkblue italic">
                        <STFStartEndDates
                            _start={event.event_start}
                            _end={event.event_end}
                         />
                    </p>
                </div>

            </div>

        </React.Fragment>
    );
};
