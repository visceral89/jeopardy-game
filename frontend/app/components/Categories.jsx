import Card from "./Card";

const Categories = ({ categoryId, title, allCards }) => {
	// Code to handle getting the cards corresponding to this categorys ID!
	console.log("All cards:", JSON.stringify(allCards, null, 2));
	console.log("Current categoryId:", categoryId);
	const cards = allCards.filter((card) => card.id === categoryId);

	return (
		<div>
			<h1>{title}</h1>
			<div>{cards && cards.map((card) => <Card key={card.id} />)}</div>
		</div>
	);
};

export default Categories;
