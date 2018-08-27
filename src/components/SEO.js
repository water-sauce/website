import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const SEO = ({
    schema,
    title,
    description,
    path,
    contentType,
    published,
    updated,
    category,
    tags,
    twitter
}) => (
    <Helmet
        htmlAttributes={{
            lang: "en",
            itemscope: undefined,
            itemtype: `http://schema.org/${schema}`
        }}
        title={title}
        link={[{ rel: "canonical", href: seoURL(path) }]}
        meta={getMetaTags({
            title,
            description,
            contentType,
            url: seoURL(path),
            published,
            updated,
            category,
            tags,
            twitter
        })}
    />
);

SEO.propTypes = {
    schema: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    path: PropTypes.string,
    contentType: PropTypes.string,
    published: PropTypes.string,
    updated: PropTypes.string,
    category: PropTypes.string,
    tags: PropTypes.array,
    twitter: PropTypes.string
};

export default SEO;
