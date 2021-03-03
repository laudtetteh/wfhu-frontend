// Packages
import React, { Component } from 'react';
import Moment from 'react-moment';
import {Helmet} from "react-helmet";
// Assets
import plchld_testimonial from '../../assets/images/placeholder_testimonial_loop.jpg';
import plchld_post from '../../assets/images/placeholder_post_loop.jpg';
import plchld_post_single from '../../assets/images/placeholder_post_single.jpg';
import plchld_split_section from '../../assets/images/placeholder_split_section.jpg';

export const STFDate = ({_timestamp, _format}) => {
    return(
        <Moment format={_format}>{_timestamp}</Moment>
    )
}

export const STFStartEndDates = ({_start_date, _start_time, _end_date, _end_time}) => {
    let startEndDates = '';
    let startEndTimes = '';

    if( _start_date && _end_date ) {
        const startDateFormatted = <Moment format="MMMM D, YYYY">{_start_date}</Moment>;
        const endDateFormatted = <Moment format="MMMM D, YYYY">{_end_date}</Moment>;

        if( _start_date == _end_date ) {

            startEndDates = startDateFormatted;

        } else {

            startEndDates = <> {startDateFormatted} - {endDateFormatted} </>;
        }
    }

    if( _start_time && _end_time ) {
        const startTimeFormatted = <Moment format="hh:mm">{_start_time}</Moment>;
        const endTimeFormatted = <Moment format="hh:mm">{_end_time}</Moment>;


        if( _start_time && _end_time ) {

            startEndTimes = <> {startTimeFormatted} - {endTimeFormatted} </>;

        } else {

            startEndTimes = "Not specified. Contact Organizer.";
        }

    }

    return <> {startEndDates} | {startEndTimes} </>;

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

    } else if(text.length == limit) {

        trimmed = text.substring(0,limit);

    }

    return trimmed;
}

export const SmartImage = ({object, content_type, image_size}) => {
    let _imageUrl;

    switch(content_type) {

        case "testimonial":

            if( object.image !== null && object.image.formats.testimonial_loop !== undefined ) {
                _imageUrl = object.image.formats.testimonial_loop.url;

            } else {

                _imageUrl = plchld_testimonial;
                console.log("Missing (correctly-sized) image for one or more testimonials. Placeholder used");
            }

            break;

        case "post":

            if( object.image !== null && object.image.formats.post_loop !== undefined ) {
                _imageUrl = object.image.formats.post_loop.url;

            } else {

                _imageUrl = plchld_post;
                console.log("Missing (correctly-sized) image for one or more posts. Placeholder used");
            }

            break;

        case "post_single":

            if( object.image !== null && object.image.formats.post_single !== undefined ) {
                _imageUrl = object.image.formats.post_single.url;

            } else {

                _imageUrl = plchld_post_single;
                console.log("Missing (correctly-sized) image for this post. Placeholder used");
            }

            break;


        case "split_section":

            if( object.intro_image !== null && object.intro_image.formats.split_section !== undefined ) {
                _imageUrl = object.intro_image.formats.split_section.url;

            } else {
                _imageUrl = plchld_split_section;
                console.log("Missing (correctly-sized) image for split_section. Placeholder used");
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

            if( object.image !== null && object.image.formats.post_loop !== undefined ) {
                _imageUrl = object.image.formats.post_loop.url;

            } else {

                _imageUrl = plchld_post;
                console.log("Missing (correctly-sized) image for one or more events. Placeholder used");
            }

            break;

        default:

            console.log("No image found for one or more of `content_type`s. Placeholder used");
    }

    return _imageUrl;
}
