import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  color: black;
  border: 2px solid black;
  font-weight: bold;
`;

interface SelectInputProps {
  options: string[];
  placeholder: string;
  value: string;
  name?: string;
  id?: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({
  name,
  placeholder,
  id,
  value,
  handleChange,
  options,
}: SelectInputProps) => (
  <form>
    <StyledSelect
      name={name}
      id={id}
      value={value}
      onChange={handleChange}
      data-testid='select'
    >
      <option disabled hidden value='' data-testid='select-option'>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option} data-testid='select-option'>
          {option}
        </option>
      ))}
    </StyledSelect>
  </form>
);

export default SelectInput;
