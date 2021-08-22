import { ReactNode } from 'react';
import styles from '../styles/components/Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    title: string;
    children?: ReactNode;
    onClose: (e) => void;
}

export function Modal(props: ModalProps){
    if (!props.isOpen) return null;
    return (
        <div className={styles.container} 
            onClick={ () => props.onClose(false) }>
            <div className={styles.body} onClick={ (e) => e.stopPropagation()}>
                <h1 className={styles.title}>{props.title}</h1>
                <hr className={styles.hr}/>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}