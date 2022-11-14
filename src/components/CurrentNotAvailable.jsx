import React from "react";

const CurrentNotAvailable = ({ pageName = "This" }) => {
  return (
    <div className="default_page">
      <div className="default_page_content text_lightgray">
        {pageName} page is currently not available.
      </div>
    </div>
  );
};

export default CurrentNotAvailable;
