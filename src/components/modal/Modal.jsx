import React, {useEffect} from 'react';
import {BackDrop, ModalContent} from "./Modal.styled";
import {createPortal} from "react-dom";
import IconButton from "../iconButton";
import {ReactComponent as GoBack} from "../../images/modal/cross-arrow.svg";


const modalRoot = document.querySelector('#modal-root');

const Modal = ({toggleModal, children}) => {
	
	useEffect(() => {
		window.addEventListener("keydown", onCLoseModal);
		const body = document.querySelector("body");
		body.style.overflow = "hidden";
		
		return () => {
			window.removeEventListener("keydown", onCLoseModal);
			const body = document.querySelector("body");
			body.style.overflow = "auto";
		};
	});
	
	const onCLoseModal = (e) => {
		if (e.code === 'Escape') {
			toggleModal();
		}
	}
	
	const onOverlayClose = (e) => {
		if (e.currentTarget === e.target) {
			toggleModal();
		}
	}
	
	return createPortal(
		<BackDrop onClick={onOverlayClose}>
			<ModalContent className="modal">
				<div className="modal-header">
					<IconButton toggleModal={toggleModal} aria-label="Go Back">
						<GoBack width={17} height={10}/>
					</IconButton>
				</div>
				{children}
			</ModalContent>
		</BackDrop>,
		modalRoot
	)
}

export default Modal;