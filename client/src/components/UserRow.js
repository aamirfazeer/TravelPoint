import React from "react";
import { IoPersonSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

const UserRow = ({id, name, status}) => {

  const getStatusLabel = (status) => {
    switch(status) {
      case 1 :
        return "Accepted";
      case 0 :
        return "Request";
      case -1 :
        return "Rejected";  
    }
  };
  
  return (
    <div className="mt-2">
      <div className="" >
          <div className="d-flex align-items-center justify-content-between py-2 mb-2 bg-white"
            style={{ borderRadius: "10px" }}>
              <div style={{width:"25%"}}>
                <IoPersonSharp className="ms-2 me-2" />
                {name}
              </div>
              <div>
                   ID.No - {id}
              </div>
              <div className="me-2">
                <Link to="/request">
                  <button
                    className="btn "
                    style={{ backgroundColor: "#0069FF", color: "white", fontWeight:"bold", borderRadius:"20px" }}>
                    View Request
                    </button>
                </Link>
              </div>
            </div>                        
        </div>
    </div>
  );
}

export default UserRow;
