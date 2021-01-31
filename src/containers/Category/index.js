// Packages
import React from "react";
import { useParams } from "react-router";
// Components
import Posts from "../../components/Posts";
import Query from "../../components/Query";
// Queries
import CATEGORY_POSTS_QUERY from "../../queries/category/posts";
// Utilities
import { DocumentHead } from '../../utils/helpers';

const Category = () => {

    let { id } = useParams();

    return (

        <Query query={CATEGORY_POSTS_QUERY} id={id}>

            {({ data: { category } }) => {

                return (

                    <React.Fragment>

                        <DocumentHead title={category.name} />

                        <div className="">
                            <h1>{category.name}</h1>
                            <Posts posts={category.posts} />
                        </div>

                    </React.Fragment>

                );
            }}
        </Query>
    );
};

export default Category;
