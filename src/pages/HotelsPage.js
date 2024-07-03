import React from "react";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";

function HotelsPage() {
  const travelers = [
    { name: "Ms. Tharindu", id: "1254852" },
    { name: "Ms. Senanayake", id: "1254852" },
    { name: "Ms. David", id: "1254852" },
    { name: "Ms. Mushahid", id: "1254852" },
    { name: "Ms. Aamir", id: "1254852" },
  ];
  return (
    <div className="row g-0 mt-5 ms-5" style={{ marginRight: "15%" }}>
      <div className="container">
        <div className="card">
          <div className="card-body p-4" style={{ backgroundColor: "#EFF2FB" }}>
            <div className="mb-3">
              <h5
                className="card-title fs-4 mb-3"
                style={{ fontWeight: "bold" }}
              >
                Search hotel
              </h5>
              <div className="d-flex mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name/ID here"
                />
                <button
                  className="btn btn-primary btn-sm ms-3"
                  style={{ width: "200px", height: "45px" }}
                >
                  Search
                </button>
              </div>
            </div>
            <hr />
            <div className="mt-4">
              <h6 className="mb-4">All hotels (12)</h6>
              <table className="table">
                <tbody>
                  {travelers.map((traveler, index) => (
                    <tr key={index} style={{ borderRadius: "5%" }}>
                      <td>
                        <IoPersonSharp className="me-2" />
                        {traveler.name}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        Servise Provider ID #{traveler.id}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <Link to="/personal-info">
                          <button className="btn btn-primary btn-sm">
                            View Profile
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelsPage;
