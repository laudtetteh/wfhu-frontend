// Packages
import React from 'react';
// Containers
import { GetReviews } from '../GetReviews';
import { DocumentHead } from '../../utils/helpers';
//Components
import { Paragraphs } from "../../components/Elements/Paragraphs";
import { SingleImage } from "../../components/Elements/SingleImage";
// Queries
import { Query } from "../../components/Query";
import { PAGE_QUERY } from "../../queries";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const PageBio = () => {

    return (

        <Query query={PAGE_QUERY} slug="bio">

            {({ data: { pages } }) => {

                const pageBag = getPageData(pages[0]);

                return (

                    <React.Fragment>


                        <DocumentHead title="Bio"/>


                        <section className="w-full bg-none section-page-content">

                            <div className="container mx-auto py-12 section-bio">

                                <h1 className="section-heading font-bellota text-5xl text-red text-left mb-8">Bio</h1>

                                <div className="md:grid md:grid-cols-7 md:grid-flow-col md:gap-8 w-full md:w-auto">

                                    {pageBag.description &&

                                        <Paragraphs text={pageBag.description} classes="col-span-4 mx-auto lg:mr-5 page-content" />
                                    }

                                    {pageBag.profile_pic &&
                                        <SingleImage image={pageBag.profile_pic} classes="col-span-3 mx-auto md:mx-0 float-right" />
                                    }

                                </div>

                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-reviews">

                                <h2 className="section-heading font-bellota text-4xl text-red text-left mb-8">Reviews</h2>

                                <GetReviews limit={4} />

                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
