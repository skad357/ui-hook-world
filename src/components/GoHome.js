import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const FixedButton = styled.button`
  cursor: pointer;
  background: green;
  position: fixed;
  top: 2rem;
  right: 2rem;
  border-radius: 90%;
  padding: 0.5rem;
  color: white;
  font-weight: bolder;
  border:none;
`;
const GoHome = () => {
  return (
    <Link to="/">
      <FixedButton>Back</FixedButton>
    </Link>
  );
};

export default GoHome;
