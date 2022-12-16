import React from "react";

import "../../scss/components/card.scss";

interface tex {
  title: string;
}

const Subtitle = ({ title }: tex) => {
  return (
    <div className="subtitle__conted">
      <h2>{title} </h2>
    </div>
  );
};

export default Subtitle;
