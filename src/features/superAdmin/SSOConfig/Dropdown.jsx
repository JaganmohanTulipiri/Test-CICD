import React, { useState } from 'react';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
];

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredOptions.map((option) => (
          <li key={option.value} onClick={() => handleSelect(option)}>
            {option.label}
          </li>
        ))}
      </ul>
      {selectedOption && <div>Selected option: {selectedOption.label}</div>}
    </div>
  );
};

export default Dropdown;
