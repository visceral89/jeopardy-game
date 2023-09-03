"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import Categories from "./components/Categories";

// Edit this out later

export default function Home() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			const data = await fetch(`http://localhost:1337/api/categories`);
			const categories = await data.json();
			setCategories(categories.data);
		};

		getCategories();
	}, []);

	return (
		<main className={styles.main}>
			{categories.map((category) => (
				<Categories
					key={category.id}
					id={category.id}
					title={category.attributes.title}
				/>
			))}
		</main>
	);
}
