// Packages
import React from 'react';
// Containers
import { GetReviews } from '../GetReviews';
import { GetEvents } from '../GetEvents';
import { GetPosts } from '../GetPosts';
// Components
import { ConnectCTA } from '../../components/Cta/ConnectCTA';
import { IntroCTA } from '../../components/Cta/IntroCTA';
import { RowOfGifs } from '../../components/Elements/RowOfGifs';
// Queries
import { Query } from "../../components/Query";
import { PAGE_QUERY } from "../../queries";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const PageHome = props => {

    const _now = new Date();
    const _nowIso = _now.toISOString();

    return (

        <Query query={PAGE_QUERY} slug="home">

            {({ data: { pages } }) => {

                const pageBag = getPageData(pages[0]);
// console.log(pageBag.row_of_posts)
                return (

                    <React.Fragment>

                        <DocumentHead title="Home" />

                        <section className="w-full bg-darkblue section-connect-cta">

                            <div className="container">

                                <IntroCTA pageBag={pageBag} />

                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12">

                                <RowOfGifs pageBag={pageBag} limit={3} />

                            </div>

                        </section>

                        <section className="w-full stf-bg-2">

                            <div className="container mx-auto py-12 section-reviews">

                                <h2 className="section-heading font-bellota text-4xl text-red text-center mb-8">Reviews</h2>

                                <GetReviews limit={4} />

                            </div>

                        </section>

                        <section className="w-full bg-none section-connect-cta">

                            <div className="container mx-auto py-12">

                                <GetEvents
                                    limit={5}
                                    sort="event_start:ASC"
                                    heading="Presentations"
                                    heading_classes="text-4xl text-red mb-3"
                                    more_link={true}
                                    keep_on_homepage={true}
                                />

                            </div>

                        </section>

                        <section className="w-full stf-bg-3 section-posts--loop">

                            <div className="container mx-auto py-12">

                                <h2 className="section-heading font-bellota text-4xl text-white mb-3">
                                    Blog Posts
                                    <a href="/blog" className="link-all font-roboto text-base text-yellow underline pl-3">All Posts</a>
                                </h2>

                                <GetPosts
                                    posts={pageBag.row_of_posts}
                                    limit={3}
                                    orientation="horizontal"
                                    nameClasses="text-base text-yellow"
                                    dateClasses="text-xs text-blue-100 italic"
                                />

                            </div>

                        </section>

                        <section className="w-full stf-bg-2 section-connect-cta">

                            <div className="container mx-auto py-12">

                                <ConnectCTA
                                    pageBag={pageBag}
                                    siteOptions={props.siteOptions}
                                    containerClasses="float-none md:float-right mx-auto"
                                    headingColor="darkblue"
                                    headingClasses="stf-text-shadow-white-top-left text-center md:text-right"
                                    listClasses="flex justify-center"
                                />

                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
