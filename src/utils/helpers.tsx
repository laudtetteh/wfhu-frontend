// Packages
import React from 'react';
import Moment from 'react-moment';
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

export {STFDate, FooterScripts};
