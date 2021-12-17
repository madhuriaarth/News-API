// Add the possibility to view the reports and blogs into the dashboard.
import React, { useEffect } from "react";

function Reports() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getData();

    async function getData() {
      try {
        const response = await fetch(
          `https://api.spaceflightnewsapi.net/v3/reports`
        );
        const result = await response.json();
        setData(result);
        console.log(data);
      } catch (error) {}
    }
  }, []);
  return (
    <div>
      {data.map((reports) => (
        <div key={reports.id}>
          <h4>id : {reports.id}</h4>
          <h4>title : {reports.title}</h4>
          <h4>url : {reports.url}</h4>
          <h4>newsSite : {reports.newsSite}</h4>
          <h4>summary : {reports.summary}</h4>
          <h4>publishedAt : {reports.publishedAt}</h4>
          <h4>updatedAt : {reports.updatedAt}</h4>
          <img alt={"image"} width={200} src={reports.imageUrl} />
        </div>
      ))}
    </div>
  );
}

export default Reports;
