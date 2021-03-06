// Packages
import React from 'react';
// Utilities
import { SmartImage } from '../../utils/helpers';

export const SingleImage = props => {

    const object = props.image;
    const content_type = "single_image";
    const image_size = "testimonial_loop";

    const imageUrl = SmartImage({object, content_type, image_size});

    // CSS for hidden fields
    const image: CSS.Properties = {
        "backgroundImage": `url(${imageUrl})`,
    };

    return (
        <div className={`bg-cover bg-no-repeat ${props.classes}`} style={image}></div>

    )
}
