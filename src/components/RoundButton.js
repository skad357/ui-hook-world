import React from "react";
import styled from "@emotion/styled";

const RoundButtonCls = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: #f1f1f1;
    color: black;
  }
`;

const RoundButton = ({ children }) => {
  return <RoundButtonCls>{children}</RoundButtonCls>;
};

export default RoundButton;
