import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./pagination.css";

const Pagination = ({ page, setPage, personnages }) => {
  return (
    <div className="pagination">
      {page >= 2 && (
        <button
          className="buttonPage"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-circle-left"
            className="iconPage"
          />
        </button>
      )}
      {page >= 2 && (
        <button
          className="buttonPage"
          onClick={() => {
            setPage(1);
          }}
        >
          <span>Go to</span> <></>
          <FontAwesomeIcon
            icon="fa-solid fa-house"
            className="buttonPage"
          />{" "}
          <br />
          <span>Page</span> {page}
        </button>
      )}
      {page === Math.ceil(personnages.count / 100) ? (
        <></>
      ) : (
        <button
          className="buttonPage"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-circle-right"
            className="iconPage"
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;
