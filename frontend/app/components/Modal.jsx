import styles from "@/app/card.module.scss";
import Image from "next/image";

// onClick={toggleModal}

const Modal = ({ id, toggleModal }) => {
	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	const IconClose = () => {
		return (
			<svg
				className={styles.iconClose}
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				viewBox="0 -960 960 960"
				width="24"
			>
				<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
			</svg>
		);
	};

	const IconRight = () => {
		return (
			<svg
				className={styles.iconRight}
				xmlns="http://www.w3.org/2000/svg"
				height="64"
				viewBox="0 -960 960 960"
				width="64"
			>
				<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
			</svg>
		);
	};

	const IconFalse = () => {
		return (
			<svg
				className={styles.iconFalse}
				xmlns="http://www.w3.org/2000/svg"
				height="64"
				viewBox="0 -960 960 960"
				width="64"
			>
				<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
			</svg>
		);
	};

	return (
		<div className={styles.background} onClick={stopPropagation}>
			<div className={styles.modal}>
				<div className={styles.close}>
					<div onClick={toggleModal}>
						<IconClose />
					</div>
				</div>
				<div className={styles.content}>IMAGE</div>
				<div className={styles.answers}>
					<div className={styles.wrong}>
						<IconFalse />
					</div>
					<div className={styles.right}>
						<IconRight />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
