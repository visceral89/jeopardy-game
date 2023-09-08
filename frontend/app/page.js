"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useState, useEffect, useContext } from "react";
import { CardContext } from "./context/CardContext";
import Categories from "./components/Categories";

// Edit this out later

export default function Home() {
	const { categories } = useContext(CardContext);

	return (
		<main className={styles.main}>
			{categories &&
				categories.map((category) => (
					<Categories key={category.id} category={category} /> // Note that I'm passing the category object as a prop here
				))}
		</main>
	);
}
