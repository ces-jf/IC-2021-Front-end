import { ReactNode } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import styles from '../styles/components/Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    title: string;
    onClose: (e) => void;
    children?: ReactNode;
    isSuccess?: boolean;
}

export function Modal(props: ModalProps){
    if (!props.isOpen) return null;
    return (
        <div className={styles.container} 
            onClick={ () => props.onClose(false) }>
            <div className={styles.body} onClick={ (e) => e.stopPropagation()}>
                {
                    props.isSuccess
                        ? <BsCheckCircle/>
                        : null
                }
                <h1 className={styles.title}>{props.title}</h1>
                <hr className={styles.hr}/>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}