// Packages
import React, { Component } from 'react';
import Moment from 'react-moment';
import {Helmet} from "react-helmet";
// Assets
import plchld_review from '../../assets/images/placeholder_review_loop.jpg';
import plchld_post from '../../assets/images/placeholder_post_loop.jpg';
import plchld_post_single from '../../assets/images/placeholder_post_single.jpg';
import plchld_split_section from '../../assets/images/placeholder_split_section.jpg';

export const STFDate = ({_timestamp, _format}) => {
    return(
        <Moment format={_format}>{_timestamp}</Moment>
    )
}

export const STFStartEndDates = ({_start, _end, _timezone, _format}) => {
    let startEndDates = '';
    let startEndTimes = '';
    let startDateFormatted;
    let endDateFormatted;
    let startTimeFormatted;
    let endTimeFormatted;

    if( _start && _end ) {

        startDateFormatted = <Moment format="MMMM D, YYYY">{_start}</Moment>;
        endDateFormatted = <Moment format="MMMM D, YYYY">{_end}</Moment>;

        startTimeFormatted = <Moment format="h:mma">{_start}</Moment>;
        endTimeFormatted = <Moment format="h:mma">{_end}</Moment>;

        if( startDateFormatted === endDateFormatted ) {

            startEndDates = startDateFormatted;

        } else {

            startEndDates = <> {startDateFormatted} - {endDateFormatted} </>;
        }

        if( startTimeFormatted && endTimeFormatted ) {

            startEndTimes = <> {startTimeFormatted} - {endTimeFormatted} </>;

        } else {

            startEndTimes = "Not specified. Contact Organizer.";
        }
    }

    if( _format == "simple" ) {
        return <> {startDateFormatted} {startTimeFormatted} {_timezone}</>
    }

    return (
        <> {startEndDates} | {startEndTimes} {_timezone}</>
    );
}

export const STFUpcomingBadge = ({event_ended, _start}) => {
    const _now = new Date();
    const _nowIso = _now.toISOString();

    if( event_ended !== true && _start >= _nowIso ) {
        return (
            <span className="event-badge font-roboto bg-red text-base text-white font-medium py-1 px-2 rounded">UPCOMING</span>
        )
    }

    return null;
}

export const DocumentHead = ({title}) => {
    return (
        <Helmet>
            <title>{title} | Work From Home University</title>
        </Helmet>
    );

};

export const TrimText = ({text, limit}) => {

    let trimmed = '';

    if(text.length > limit) {

        trimmed = text.substring(0,limit) + '...';

    } else if(text.length <= limit) {

        trimmed = text;

    }

    return trimmed;
}

export const SmartImage = ({object, content_type, image_size}) => {
    let _imageUrl;

    switch(content_type) {

        case "review":

            if( object.image !== null {

                if( object.image.ext == ".gif") {

                    _imageUrl = object.image.url;

                } else if( object.image.formats !== null && object.image.formats.review_loop !== undefined ) {

                    _imageUrl = object.image.formats.review_loop.url;

                } else {

                    _imageUrl = plchld_review;
                }

            } else {

                _imageUrl = plchld_review;
                console.log("Missing (correctly-sized) image for one or more reviews. Placeholder used");
            }

            break;

        case "post":

            if( object.image !== null {

                if( object.image.ext == ".gif") {

                    _imageUrl = object.image.url;

                } else if( object.image.formats !== null && object.image.formats.post_loop !== undefined ) {

                    _imageUrl = object.image.formats.post_loop.url;

                } else {

                    _imageUrl = plchld_post;
                }

            } else {

                _imageUrl = plchld_post;
                console.log("Missing (correctly-sized) image for one or more posts. Placeholder used");
            }

            break;

        case "post_single":

            if( object.image !== null {

                if( object.image.ext == ".gif") {

                    _imageUrl = object.image.url;

                } else if( object.image.formats !== null && object.image.formats.post_single !== undefined ) {

                    _imageUrl = object.image.formats.post_single.url;

                } else {

                    _imageUrl = plchld_post_single;
                }

            } else {

                _imageUrl = plchld_post_single;
                console.log("Missing (correctly-sized) image for this post. Placeholder used");
            }

            break;


        case "split_section":

            if( object.intro_image !== null {

                if( object.intro_image.ext == ".gif") {

                    _imageUrl = object.intro_image.url;

                } else if( object.intro_image.formats !== null && object.intro_image.formats.split_section !== undefined ) {

                    _imageUrl = object.intro_image.formats.split_section.url;

                } else {

                    _imageUrl = plchld_split_section;
                }

            } else {

                _imageUrl = plchld_split_section;
                console.log("Missing (correctly-sized) image for split_section. Placeholder used");
            }

            break;

        case "single_image":

            if( object.profile_pic !== null {

                if( object.profile_pic.ext == ".gif") {

                    _imageUrl = object.profile_pic.url;

                } else if( object.profile_pic.formats !== null && object.profile_pic.formats.split_section !== undefined ) {

                    _imageUrl = object.profile_pic.formats.split_section.url;

                } else {

                    _imageUrl = plchld_split_section;
                }

            } else {

                _imageUrl = plchld_split_section;
                console.log("Missing (correctly-sized) image for single image. Placeholder used");
            }

            break;

        case "gif":

            if( object.url !== null && object.url !== undefined ) {
                _imageUrl = object.url

            } else {

                _imageUrl = plchld_post;
                console.log("Missing (correctly-sized) image for one or more gifs. Placeholder used");
            }

            break;

        case "event":

            if( object.image !== null {

                if( object.image.ext == ".gif") {

                    _imageUrl = object.image.url;

                } else if( object.image.formats !== null && object.image.formats.post_loop !== undefined ) {

                    _imageUrl = object.image.formats.post_loop.url;

                } else {

                    _imageUrl = plchld_post;
                }

            } else {

                _imageUrl = plchld_post;
                console.log("Missing (correctly-sized) image for one or more events. Placeholder used");
            }

            break;

        case "event_single":

            if( object.image !== null {

                if( object.image.ext == ".gif") {

                    _imageUrl = object.image.url;

                } else if( object.image.formats !== null && object.image.formats.post_single !== undefined ) {

                    _imageUrl = object.image.formats.post_single.url;

                } else {

                    _imageUrl = plchld_post_single;
                }

            } else {

                _imageUrl = plchld_post_single;
                console.log("Missing (correctly-sized) image for one or more events. Placeholder used");
            }

            break;

        default:

            console.log("No image found for one or more of `content_type`s. Placeholder used");
    }

    return _imageUrl;
}
