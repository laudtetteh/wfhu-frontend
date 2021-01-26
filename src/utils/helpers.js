import React from 'react';
import Moment from 'react-moment';

export const STFDate = ({_timestamp, _format}) => {
    return(
        <Moment format={_format}>{_timestamp}</Moment>
    )
}
