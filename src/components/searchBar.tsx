import { useNavigate } from "react-router-dom";

export const SearchBar = ({ value }: { value: number }) => {
  const navigate = useNavigate();

  return (
    <>
      <form action="" className="search_form">
        <div className="control_group">
          <input
            className="icon_search"
            type="text"
            placeholder="Therapies, Conditions, Practitioners..."
          />
        </div>
        <hr />
        <div className="control_group">
          <input className="icon_location" type="text" placeholder="Location" />
        </div>
        <button
          onClick={() => {
            if (value !== 2) {
              navigate("/docterlisting");
            } else {
              navigate("/store-listing");
            }
          }}
          className="btnn btn_primary"
        >
          <img src="static/images/search_icon.svg" alt="Icon" />
          {/* /static/images/instagram_icon.svg */}
        </button>
      </form>
    </>
  );
};
