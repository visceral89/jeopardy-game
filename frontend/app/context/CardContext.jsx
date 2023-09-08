import React, { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [cardsResponse, categoriesResponse] = await Promise.all([
					fetch("http://localhost:1337/api/cards?populate=*"),
					fetch("http://localhost:1337/api/categories/"),
				]);

				const [categoriesData, cardsData] = await Promise.all([
					categoriesResponse.json(),
					cardsResponse.json(),
				]);

				setData({ categories: categoriesData, cards: cardsData });
			} catch (error) {
				console.error("failed to fetch Data", error);
			}
		};

		fetchData();
	}, []);

	return (
		<CardContext.Provider value={{ data }}>{children}</CardContext.Provider>
	);
};
