import styles from "@/app/card.module.scss";

const card = ({ points }) => {
	return (
		<div className={styles.card}>
			<p>{points}</p>
		</div>
	);
};

export default card;
