// Packages
import React from 'react';
// Containers
import Testimonials from '../Testimonials';
import Posts from '../Posts';
import { DocumentHead } from '../../utils/helpers';

export const Home = ({pageLoad}) => {

    const _no_of_posts = pageLoad.dynamic_fields[0].no_of_posts;

    return (

        <DocumentHead title="Home"/>

        <React.Fragment>

            <Testimonials />

            <Posts limit={_no_of_posts}/>

        </React.Fragment>
    )
}
