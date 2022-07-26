import styled from '@emotion/styled';
import Select from 'react-dropdown-select';

const StyledSelect = styled(Select)`
  ${'' /* background: #333; */}
  border: #333 !important;
  color: #fff;
  width: 200px;
  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    color: #fff;
  }
  .react-dropdown-select-option {
    border: 1px solid #fff;
  }
  .react-dropdown-select-item {
    color: #333;
  }
  .react-dropdown-select-input {
    color: #fff;
  }
  .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    max-height: 150px;
    overflow: auto;
    z-index: 9;
    background: #515858;
    box-shadow: none;
    color: #fff !important;
  }
  .react-dropdown-select-item {
    color: #f2f2f2;
    border-bottom: 1px solid #333;

    :hover {
      color: #ffffff80;
    }
  }
  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    //background: #111;
    border-bottom: 1px solid #333;
    color: #fff;
    font-weight: bold;
  }
  .react-dropdown-select-item.react-dropdown-select-item-disabled {
    background: #777;
    color: #ccc;
  }
`;

export default StyledSelect;
