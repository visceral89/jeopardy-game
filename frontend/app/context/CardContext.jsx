import React, { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://localhost:1337/api/cards?populate=*"
				);
			} catch (error) {
				console.error("failed to fetch Data", error);
			}
		};
	});

	return (
		<CardContext.Provider value={{ data, setData }}>
			{children}
		</CardContext.Provider>
	);
};
