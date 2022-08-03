import { useState } from "react";
import styled from "styled-components";

interface Props {
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
}

const Textarea = ({ onChange, placeholder, value: propValue }: Props) => {
  const [value, setValue] = useState(propValue);
  const handleChange = (e: any) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <Wrapper
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    ></Wrapper>
  );
};

const Wrapper = styled.textarea`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  min-height: 70px;
  resize: vertical;
`;

export default Textarea;
