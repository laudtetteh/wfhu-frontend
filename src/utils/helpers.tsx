// Packages
import React from 'react';
import Moment from 'react-moment';
import {Helmet} from "react-helmet";
// import {usePath} from 'hookrouter';

const STFDate = ({_timestamp, _format}) => {
    return(
        <Moment format={_format}>{_timestamp}</Moment>
    )
}

const FooterScripts = () => {
    import('/assets/js/footer-scripts.js');
    return true;
}

const DocumentHead = ({title}) => {
    return (
        <Helmet>
            <title>{title} | Work From Home University</title>
        </Helmet>
    );

};

const TrimText = ({text, limit}) => {
    let trimmed = '';

    if(text.length > limit) {

        trimmed = text.substring(0,limit) + '...';

    } else if(text.length == limit) {

        trimmed = text.substring(0,limit);

    }

    return trimmed;
}

export {STFDate, FooterScripts, DocumentHead, TrimText};


