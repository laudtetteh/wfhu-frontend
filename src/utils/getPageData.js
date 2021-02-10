export const getPageData = props => {

    let pageData = {};

    if( props.description !== undefined ) {
        pageData["description"] = props.description;
    }

    if( props.dynamic_fields !== undefined
        && props.dynamic_fields[0] !== undefined ) {

        pageData["noOfPosts"] = props.dynamic_fields[0].no_of_posts;
    }

    return pageData;
}
