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
import { HOMEPAGE_QUERY } from "../../queries";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const PageHome = props => {

    const _now = new Date();
    const _nowIso = _now.toISOString();

    return (

        <Query query={HOMEPAGE_QUERY}>

            {({ data: { homepage } }) => {

                const pageBag = getPageData(homepage);

                return (

                    <React.Fragment>

                        <DocumentHead title="Home" />

                        <section className="w-full stf-bg-3 section-connect-cta">

                            <div className="container">

                                <IntroCTA pageBag={pageBag} />

                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-reviews">

                                <h2 className="section-heading font-bellota text-4xl text-red text-left mb-8">Reviews</h2>

                                <GetReviews
                                    reviews={pageBag.row_of_reviews}
                                    limit={4} />

                            </div>

                        </section>


                    </React.Fragment>
                )
            }}
        </Query>
    )
}
