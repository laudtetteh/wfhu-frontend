import React from 'react';
import { PostSection } from '../components/elements/PostSection';

export const Home = () => {

    return (

        <React.Fragment>
            <div>
                <h1 className="font-sans text-red text-4xl text-center pt-12">This is the Home page. Styled with Tailwind</h1>
            </div>

            <PostSection />

        </React.Fragment>
    )
}
