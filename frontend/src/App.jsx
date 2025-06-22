import { useEffect, useState } from "react";
import axios from "axios";
import PieChart from "./components/PieChart.jsx";
import "./App.css";
import ProductBarChart from "./components/ProductBarChart.jsx";

function App() {
  const [revenueData, setRevenueData] = useState([]);
  const [month, setMonth] = useState("06");
  const [year, setYear] = useState("2025");

  useEffect(() => {
    axios
      .get(`/api/revenue?month=${month}&year=${year}`)
      .then((res) => setRevenueData(res.data));
  }, [month, year]);

  return (
    <div className="dashboard d-flex">
      {/* Sidebar */}
      <aside className="sidebar p-3 bg-light">
        <h4 className="mb-4">Revenue Dashboard</h4>
        <nav className="nav flex-column">
          <a className="nav-link active" href="#">
            Analytics
          </a>
          <a className="nav-link" href="#">
            Reports
          </a>
          <a className="nav-link" href="#">
            Settings
          </a>
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="productDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            <ul className="dropdown-menu w-100" aria-labelledby="productDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  All Products
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Phones
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Laptops
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Accessories
                </a>
              </li>
            </ul>
               </a>
          </div>
        </nav>
      </aside>

      {/* Main Area */}
      <main className="main-content flex-grow-1 p-4">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h2>Welcome back, TransErgLLP 👋</h2>
          <input
            type="month"
            className="form-control w-auto"
            value={`${year}-${month}`}
            onChange={(e) => {
              const [y, m] = e.target.value.split("-");
              setMonth(m);
              setYear(y);
            }}
          />
        </header>

        {/* Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-3">
            <div className="stat-card shadow-sm p-3 rounded bg-white text-center">
              <p className="text-muted mb-1">Monthly Sales</p>
              <h4>₹7,102</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card shadow-sm p-3 rounded bg-white text-center">
              <p className="text-muted mb-1">New Users</p>
              <h4>1,024</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card shadow-sm p-3 rounded bg-white text-center">
              <p className="text-muted mb-1">Item Orders</p>
              <h4>1,017</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card shadow-sm p-3 rounded bg-white text-center">
              <p className="text-muted mb-1">Bug Reports</p>
              <h4>1,000</h4>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="row g-4">
          {/* Revenue Breakdown - Pie Chart */}
          <div className="col-md-6">
            <div className="card shadow-sm rounded h-100">
              <h5 className="mb-3 text-center">Revenue Breakdown</h5>
              <PieChart data={revenueData} />
            </div>
          </div>

          {/* Product Overview - Bar Chart */}
          <div className="col-md-6">
            <div className="card shadow-sm rounded h-100">
              <h5 className="mb-3 text-center">Product Overview</h5>
              <ProductBarChart data={revenueData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
