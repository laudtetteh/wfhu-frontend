// Packages
import React from 'react';
import ReactMarkdown from "react-markdown";
// Utilities
import { STFDate, SmartImage } from '../../utils/helpers';
import { STFStartEndDates } from '../../utils/helpers';

export const EventComponent = props => {

    // const imageUrl =
    //   process.env.NODE_ENV !== "development"
    //     ? event.image.url
    //     : process.env.REACT_APP_BACKEND_URL + event.image.url;

    // const imageUrl = event.image.url;

    const object = props.event;
    const content_type = "event_single";
    const image_size = "event_single";

    const imageUrl = SmartImage({object, content_type, image_size});

    return (

        <React.Fragment>

            <div className={`col-span-5 event-${props.event.id}`}>

                <a href="/events">
                    <h4 className="section-heading font-bellota text-3xl text-red text-left mb-5">&lt;All Events</h4>
                </a>

                <div className="w-full">
                    <img src={imageUrl} alt={imageUrl} className="w-full"/>
                </div>

                <div className="byline">

                    {props.event.name &&
                        <h3 className="card-event-name font-roboto text-2xl text-black my-3">
                            {props.event.name}
                        </h3>
                    }

                    <p className="card-event-name font-roboto text-base text-darkblue mb-3">
                        <STFStartEndDates
                            _start={props.event.event_start}
                            _end={props.event.event_end}
                            _timezone={props.event.event_timezone}
                            _format="full"
                         />
                    </p>

                </div>

                {props.event.description &&
                    <p className="card-event-description text-base font-roboto font-normal mt-3 mb-3">
                        <ReactMarkdown source={props.event.description} />
                    </p>
                }

                {props.event.event_details &&
                    <p className="card-event-description text-base font-roboto font-normal mt-3 mb-3">
                        <ReactMarkdown source={props.event.event_details} />
                    </p>
                }

            </div>
        </React.Fragment>
    )
}
