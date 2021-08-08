import { ReactNode } from 'react';
import styles from '../styles/components/Button.module.css'

interface ButtonProps {
    children?: ReactNode;
    type?: any;
    action?: string;
    method?: string;
    secondary?: boolean;
}

export function Button(props: ButtonProps) {
    return (
        <button type={props.type} 
            className={props.secondary ? styles.secondaryButton : styles.button} 
            formAction={props.action} 
            formMethod={props.method}
        >
            {props.children}
        </button>
    );
}