import React from "react";
import { Link } from "react-router-dom";
import { STFDate, STFStartEndDates, SmartImage, TrimText } from '../../utils/helpers';

export const Card = ({ event, orientation }) => {
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

            <div className={`md:mt-0 mt-5 md:first:mt-0 event-${event.id}`}>

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


                    <p id="" className="card-event--date font-roboto text-xs text-blue-100 italic">
                        <STFStartEndDates
                            _start_date={event.event_start_date}
                            _start_time={event.event_start_time}
                            _end_date={event.event_end_date}
                            _end_time={event.event_end_time}
                         />
                    </p>
                </div>

            </div>

        </React.Fragment>
    );
};
