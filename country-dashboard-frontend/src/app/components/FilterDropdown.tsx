import React from 'react';

interface FilterDropdownProps {
  options: string[];
  onSelect: (value: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ options, onSelect }) => {
  return (
    <select
      className="p-2 border rounded"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">All Regions</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;