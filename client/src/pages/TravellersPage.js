import UserRow from "../components/UserRow";

const TravellersPage = () => {

  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <div className="d-flex mb-4">
          <button
            className={`btn me-2`}>
            Accepted
          </button>
          <button
            className={`btn me-2`}>
            Rejected
          </button>
          <button
            className={`btn`}>
            Requested
          </button>
        </div>
        <UserRow/>
      </div>
    </div>
  );
}

export default TravellersPage;

