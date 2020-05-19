import React from "react";

const WelcomeWrapper = ({head,body,children}) => {
  return (
      <div className="mx-auto main-wrapper text-primary">
        <h1>{head}</h1>
        <p>{body}</p>
        {children}
      </div>
  );
};

export default WelcomeWrapper;
