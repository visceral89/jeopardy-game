import Image from "next/image";
import styles from "./page.module.scss";

// Edit this out later

const getCategories = async () => {
	const data = await fetch(`http://localhost:1337/api/categories`);
	const categories = await data.json();
	console.log(categories);
};

getCategories();

export default function Home() {
	return <main className={styles.main}></main>;
}
