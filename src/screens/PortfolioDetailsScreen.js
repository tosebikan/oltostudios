import React from "react";

function PortfolioDetailsScreen(props) {
  const id = props.match.params.id;
  console.log(id);
  return <div>Portfolio Details</div>;
}

export default PortfolioDetailsScreen;
