import React from "react";
import Card from "./Card.jsx";
import vendors from "./vendors.js";
/*
// skeleton fetch to backend >> how do we need to receive this from back end?
// array of objects is how currently set up
const vendorFetch = () => {
	const vendorInfo = [];
	fetch('/api/vendor', { method: 'GET' })
		.then((response) => response.json())
		.then((vendors) => {
			vendorInfo.push(vendors);
		});
};
*/

const CardsDisplay = ({ user }) => {
  const cards = vendors.map((vendor, i) => {
    console.log(<Card vendorInfo={vendor} user={user} key={i} />);
    return <Card vendorInfo={vendor} user={user} key={i} />;
  });
  // do logic to map details as props to cards
  // console.log(cards);
  return <div className="card-display">{cards}</div>;
};

export default CardsDisplay;