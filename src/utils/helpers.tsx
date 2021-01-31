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

export {STFDate, FooterScripts, DocumentHead};


