// Packages
import React from 'react';
// Containers
import Testimonials from '../Testimonials';
import { DocumentHead } from '../../utils/helpers';
//Components
import { Paragraphs } from "../../components/Elements/Paragraphs";
import { SingleImage } from "../../components/Elements/SingleImage";
// Queries
import Query from "../../components/Query";
import PAGE_QUERY from "../../queries/page/page";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const Bio = () => {

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

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                    {pageBag.description &&

                                        <Paragraphs text={pageBag.description} classes="mx-auto lg:mr-5" />
                                    }

                                    {pageBag.profile_pic &&
                                        <SingleImage image={pageBag.profile_pic} classes="mx-auto md:mx-0 float-right" />
                                    }

                                </div>

                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-testimonials">

                                <h2 className="section-heading font-bellota text-4xl text-red text-left mb-8">Testimonials</h2>

                                <Testimonials limit={4} />

                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
