import React from "react";

function BlogContent(props) {
  if (!props.isPublished) {
    // hide unpublished content
    // return null means "don't display any DOM elements here"
    return null;
  } else {
    // show published content
  return (
    <div id="blog-content">{props.articleText}</div>);
}

}
export default BlogContent;
