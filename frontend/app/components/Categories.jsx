const getCategories = async () => {
	const data = await fetch(`http://localhost:1337/categories`);
	const categories = await data.json();
	console.log(categories);
};

getCategories();

const Categories = () => {
	return <div>Categories</div>;
};

export default Categories;
