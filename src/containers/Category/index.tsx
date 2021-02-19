// Packages
import React from 'react';
import { useParams } from "react-router";
// Containers
import Posts from "../../components/Posts";
import { Sidebar } from '../Sidebar';
import { DocumentHead } from '../../utils/helpers';
import { Footer } from '../../components/Footer';
// Queries
import Query from "../../components/Query";
import CATEGORY_POSTS_QUERY from "../../queries/category/posts";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const Category = ({siteOptions}) => {

    let { slug } = useParams();

    return (

        <Query query={CATEGORY_POSTS_QUERY} slug={slug}>

            {({ data: { categories } }) => {


                return (

                    <React.Fragment>

                        <DocumentHead title={categories[0].name} />


                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-posts">

                                <div className="md:grid md:grid-cols-1 md:grid-cols-7 md:grid-flow-col md:gap-4 w-full md:w-auto">

                                    <Posts limit={12} posts={categories[0].posts} orientation="vertical" heading={categories[0].name} />

                                    <Sidebar />

                                </div>

                            </div>

                        </section>

                        <Footer
                            siteOptions={siteOptions}
                            headingColor="white"
                            containerClass="mx-auto"
                            headingClass="text-center font-bold"
                        />

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
