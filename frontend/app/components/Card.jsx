import styles from "@/app/card.module.scss";
import Modal from "./Modal";
import { useState } from "react";

const card = ({ id, points }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div className={styles.card} onClick={toggleModal}>
			{isModalOpen && <Modal id={id} />}
			<p>{points}</p>
		</div>
	);
};

export default card;
