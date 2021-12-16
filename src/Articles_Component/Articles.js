import React, { useEffect } from "react";

function Articles() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getData();

    async function getData() {
      try {
        const response = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles`
        );
        const result = await response.json();
        setData(result);
        console.log(data);
      } catch (error) {}
    }
  });
  return (
    <div>
      {data.map((news) => (
        <div key={news.id}>
          <h5>id : {news.id}</h5>
          <h5>title : {news.title}</h5>
          <img alt={"image"} width={200} src={news.imageUrl} />
          <h5>url : {news.url}</h5>
          <h5>newsSite : {news.newsSite}</h5>
          <h5>summary : {news.summary}</h5>
          <h5>publishedAt : {news.publishedAt}</h5>
          <h5>updatedAt : {news.updatedAt}</h5>
          <h5>featured : {news.featured}</h5>
        </div>
      ))}
    </div>
  );
}

export default Articles;
