// Packages
import React from 'react';
// Containers
import Testimonials from '../Testimonials';
import Posts from '../Posts';
import { DocumentHead } from '../../utils/helpers';

export const Home = ({pageBag}) => {

    return (
        <React.Fragment>

            <DocumentHead title="Home"/>

            <Testimonials />

            <Posts limit={pageBag.noOfPosts ? pageBag.noOfPosts : 0}/>

        </React.Fragment>
    )
}
