import Card from "./Card";
import styles from "@/app/categories.module.scss";

const Categories = ({ categoryId, title, allCards }) => {
	// Code to handle getting the cards corresponding to this categorys ID!
	//console.log("All cards:", JSON.stringify(allCards, null, 2));
	//console.log("Current categoryId:", categoryId);
	const filteredCards = allCards.filter(
		(card) => card.attributes.category.data.id === categoryId
	);

	return (
		<div className={styles.category}>
			<h1>{title}</h1>

			{filteredCards.map((card) => (
				<Card key={card.id} points={card.attributes.points} />
			))}
		</div>
	);
};

export default Categories;
