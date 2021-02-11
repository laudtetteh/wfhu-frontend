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

            <section className="w-full bg-none">
                <Testimonials />
            </section>

            <section className="w-full stf-bg-3">
                <Posts limit={pageBag.noOfPosts ? pageBag.noOfPosts : 0}/>
            </section>

        </React.Fragment>
    )
}
