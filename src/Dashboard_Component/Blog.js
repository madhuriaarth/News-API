// Add the possibility to view the reports and blogs into the dashboard.
import React, { useEffect } from "react";

function Blog() {
  const [blog, setBlog] = React.useState([]);

  useEffect(() => {
    getData();

    async function getData() {
      try {
        const response = await fetch(
          `https://api.spaceflightnewsapi.net/v3/blogs`
        );
        const result = await response.json();
        setBlog(result);
        console.log(blog);
      } catch (error) {}
    }
  });
  return (
    <div>
      {blog.map((blog) => (
        <div key={blog.id}>
          <h4>id : {blog.id}</h4>
          <h4>title : {blog.title}</h4>
          <h4>url : {blog.url}</h4>
          <h4>newsSite : {blog.newsSite}</h4>
          <h4>summary : {blog.summary}</h4>
          <h4>publishedAt : {blog.publishedAt}</h4>
          <h4>updatedAt : {blog.updatedAt}</h4>
          <img alt={"image"} width={200} src={blog.imageUrl} />
        </div>
      ))}
    </div>
  );
}

export default Blog;
