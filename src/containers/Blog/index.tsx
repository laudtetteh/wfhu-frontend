// Packages
import React from 'react';
// Components
import { BlogNav } from "../../components/Nav/blog";
// Containers
import Posts from "../Posts";
import Testimonials from '../Testimonials';
import { DocumentHead } from '../../utils/helpers';
import { Footer } from '../../components/Footer';

export const Blog = ({pageBag, siteOptions}) => {

    return (

        <React.Fragment>

            <DocumentHead title="About"/>

            <section className="w-full bg-none section-page-content">

                <div className="container mx-auto py-12">

                    <BlogNav />

                    <h1 className="section-heading font-bellota text-5xl text-red text-left mb-8">Blog</h1>

                    <div className="description description font-roboto">
                        {pageBag.description}
                    </div>
                </div>

            </section>

            <section className="w-full bg-none">

                <div className="container mx-auto py-12 section-posts">


                    <Posts limit={12}/>

                </div>

            </section>


            <Footer
                siteOptions={siteOptions}
                iconColor="gray-600"
                iconBgColor="white"
                iconHvColor="red"
                headingColor="white"
                containerClass="mx-auto"
                headingClass="text-center font-bold"
            />

        </React.Fragment>
    )
}

