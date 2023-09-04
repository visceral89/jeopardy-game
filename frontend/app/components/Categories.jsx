const Categories = ({ id, title, allCards }) => {
	// Code to handle getting the cards corresponding to this categorys ID!
	const catId = id;
	const cards = allCards.filter((card) => card.id === catId);
	console.log("All cards: " + allCards);
	console.log("Filtered cards: " + cards);

	return (
		<div>
			<h1>{title}</h1>
			<div>{cards && cards.map((card) => <Card key={card.id} />)}</div>
		</div>
	);
};

export default Categories;
