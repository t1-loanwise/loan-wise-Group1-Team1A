import React, {useState} from "react";
import "../styles/SearchComponent.css"

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setButtonClicked(false);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    setButtonClicked(true);
  }

  setTimeout(() => {
    setButtonClicked(false);
  }, 1000);


  return (
    <div className="searchArea">
        <input className="searchInput" 
        type="text" 
        value={searchTerm} 
        onChange={handleInputChange}
        placeholder="Search For Loans" />

        <button 
        onClick={handleSearch}
        className={`searchButtton ${isButtonClicked ? "clicked" : ""}`}>
          Search
        </button>
    </div>
  );
};

export default SearchComponent;