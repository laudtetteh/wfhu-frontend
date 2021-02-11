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

                <div className="container mx-auto py-10">

                    <h2 className="section-heading font-bellota text-4xl text-red text-center mb-8">Testimonials</h2>

                    <Testimonials />

                </div>

            </section>

            <section className="w-full stf-bg-3">

                <div className="container mx-auto py-10">

                    <h2 className="section-heading font-bellota text-4xl text-white mb-3">
                        Blog Posts
                        <a href="/blog" className="link-all font-roboto text-base text-yellow underline pl-3">All Posts</a>
                    </h2>

                    <Posts limit={pageBag.noOfPosts ? pageBag.noOfPosts : 0}/>
                </div>

            </section>

        </React.Fragment>
    )
}
