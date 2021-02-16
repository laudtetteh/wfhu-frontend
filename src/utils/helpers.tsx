// Packages
import React from 'react';
import Moment from 'react-moment';
import {Helmet} from "react-helmet";
// Assets
import plchld_testimonial from '../../assets/images/placeholder_testimonial_loop.jpg';
import plchld_post from '../../assets/images/placeholder_post_loop.jpg';
import plchld_split_section from '../../assets/images/placeholder_split_section.jpg';

export const STFDate = ({_timestamp, _format}) => {
    return(
        <Moment format={_format}>{_timestamp}</Moment>
    )
}

export const FooterScripts = () => {
    import('/assets/js/footer-scripts.js');
    return true;
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
                console.log("Missing (correctly-sized) for one or more testimonials. Placeholder used");
            }

            break;

        case "post":

            if( object.image !== null && object.image.formats.post_loop !== undefined ) {
                _imageUrl = object.image.formats.post_loop.url;

            } else {

                _imageUrl = plchld_post;
                console.log("Missing (correctly-sized) for one or more posts. Placeholder used");
            }

            break;

        case "post_single":

            if( object.image !== null && object.image.formats.post_single !== undefined ) {
                _imageUrl = object.image.formats.post_single.url;

            } else {

                _imageUrl = plchld_post_single;
                console.log("Missing (correctly-sized) for this post. Placeholder used");
            }

            break;


        case "split_section":

            if( object.intro_image !== null && object.intro_image.formats.split_section !== undefined ) {
                _imageUrl = object.intro_image.formats.split_section.url;

            } else {
                _imageUrl = plchld_split_section;
                console.log("Missing (correctly-sized) for split_section. Placeholder used");
            }

            break;

        default:

            console.log("No image found for one or more of `content_type`s. Placeholder used");
    }

    return _imageUrl;
}
