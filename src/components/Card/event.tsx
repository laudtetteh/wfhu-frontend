import React from "react";
import { Link } from "react-router-dom";
import { STFDate, SmartImage, TrimText } from '../../utils/helpers';

export const Card = ({ event, orientation }) => {

    // const imageUrl =
    //     process.env.NODE_ENV !== "development"
    //     ? event.image.url
    //     : process.env.REACT_APP_BACKEND_URL + event.image.url;

    const object = event;
    const content_type = "event";
    const image_size = "event_loop";

    const imageUrl = SmartImage({object, content_type, image_size});

    if( orientation == 'vertical' ) {

        return (

            <React.Fragment>

                <div className={`md:grid md:grid-cols-1 md:grid-cols-3 md:grid-flow-col md:gap-4 w-full md:w-auto event-${event.id}`}>

                    <div className="card-event--image col-span-1">

                        <Link to={`/event/${event.slug}`} className="card-event--image">
                            <img src={imageUrl} alt={imageUrl} height="100" className="w-full"/>
                        </Link>

                    </div>

                    <div className="card-event--details col-span-2 mt-3 md:mt-0">

                        <Link to={`/event/${event.slug}`} className="card-event--title font-roboto no-underline">
                            <p id="name" className="font-roboto text-base text-black font-medium">
                                {event.name}
                            </p>
                        </Link>

                        <p id="" className="card-event--date font-roboto text-xs text-black font-thin italic">
                            <STFDate _timestamp={event.published_at} _format="MMMM D, YYYY" />
                        </p>

                        <p id="name" className="font-roboto text-base text-black font-normal mt-5">
                            <TrimText text={event.description} limit={200}/>
                        </p>

                    </div>

                </div>

            </React.Fragment>
        );
    }

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
                        <STFDate _timestamp={event.published_at} _format="MMMM D, YYYY" />
                    </p>
                </div>

            </div>

        </React.Fragment>
    );
};
