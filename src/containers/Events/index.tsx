// Packages
import React from 'react';
// Containers
import { GetEvents } from '../GetEvents';
import { DocumentHead } from '../../utils/helpers';
// Queries
import Query from "../../components/Query";
import PAGE_QUERY from "../../queries/page/page";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const Events = () => {

    return (

        <Query query={PAGE_QUERY} slug="events">

            {({ data: { pages } }) => {

                const pageBag = getPageData(pages[0]);

                return (

                    <React.Fragment>

                        <DocumentHead title="Events"/>

                        <section className="w-full bg-none section-page-content">

                            <div className="container mx-auto py-12 section-testimonials">

                                <h1 className="section-heading font-bellota text-5xl text-red text-left mb-8">Events</h1>

                                <div className="description description font-roboto">

                                     <div className="description description font-roboto">
                                        {pageBag.description}
                                    </div>

                                </div>
                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-testimonials">

                                <GetEvents
                                    limit={10}
                                    event_ended={false}
                                    event_start_gt="2021-02-04T10:00:00.000Z"
                                    event_start_lt="2021-03-16T10:00:00.000Z"
                                    heading="Upcoming Presentations"
                                    heading_classes="text-red text-left"
                                    more_link={false}
                                />

                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-testimonials">

                                <GetEvents
                                    limit={10}
                                    event_ended={true}
                                    event_start_lt="2021-03-04T10:00:00.000Z"
                                    heading="Most Recent Presentations"
                                    heading_classes="text-red text-left"
                                    more_link={false}
                                />

                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
