import React from 'react';
import { STFDate, SmartImage } from '../../utils/helpers';
import ReactMarkdown from "react-markdown";
import { STFStartEndDates } from '../../utils/helpers';

export const EventComponent = ({event}) => {

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

            <div className={`col-span-5 event-${event.id}`}>

                <a href="/events">
                    <h4 className="section-heading font-bellota text-3xl text-red text-left mb-5">&lt;All Events</h4>
                </a>

                <div className="w-full">
                    <img src={imageUrl} alt={imageUrl} className="w-full"/>
                </div>

                <div className="byline">

                    <h3 className="card-event-name font-roboto text-2xl text-black my-3">

                        {event.name}

                    </h3>

                    <p className="card-event-name font-roboto text-base text-darkblue mb-3">
                        <STFStartEndDates
                            _start={event.event_start}
                            _end={event.event_end}
                         />
                    </p>

                </div>

                <p className="card-event-description text-base font-roboto font-normal mt-3 mb-3">
                    <ReactMarkdown source={event.description} />
                </p>

                <p className="card-event-description text-base font-roboto font-normal mt-3 mb-3">
                    <ReactMarkdown source={event.event_details} />
                </p>

            </div>
        </React.Fragment>
    )
}
