import React from "react";
import Reports from "../Dashboard_Component/Reports";
import Blog from "../Dashboard_Component/Blog";
function Dashboard() {
  const [pathNavigation, setPathNavigation] = React.useState(false);
  const handleChange = () => {
    setPathNavigation("reports");
  };
  return (
    <div>
      {/* <button onChange={() => handleChange(true)}>Reports</button>
      <button onChange={() => handleChange(true)}>Blog</button>
      {pathNavigation === true ? <Reports /> : <Blog />} */}
      {pathNavigation ? <Reports /> : <Blog />}
      <button onClick={() => setPathNavigation(!pathNavigation)}></button>
    </div>
  );
}

export default Dashboard;
