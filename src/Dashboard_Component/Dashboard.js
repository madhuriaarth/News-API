import React from "react";
import Reports from "../Dashboard_Component/Reports";
import Blog from "../Dashboard_Component/Blog";
function Dashboard() {
  const [pathNavigation, setPathNavigation] = React.useState(null);

  return (
    <div>
      {/* <button onChange={() => handleChange(true)}>Reports</button>
      <button onChange={() => handleChange(true)}>Blog</button>
      {pathNavigation === true ? <Reports /> : <Blog />} */}

      <button onClick={() => setPathNavigation(!pathNavigation)}>
        DashboardPage
      </button>
      {pathNavigation ? <Blog /> : <Reports />}

      {/* <button onClick={() => setPathNavigation(!pathNavigation)}>
        Reports
      </button>
      {pathNavigation && <Reports />} */}
    </div>
  );
}

export default Dashboard;
