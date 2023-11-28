import { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ( {title, options, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title || 'Select Criteria')

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setSelectedOption(option)
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__btn" onClick={toggleDropdown}>
       <span> {selectedOption}</span>
        <img
          src="../src/assets/search.png"
          height="15px"
          width="15px"
          alt="Icon of search"
        />
      </button>
      {isOpen && (
        <div className="dropdown__option">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired,
  };

export default Dropdown;
