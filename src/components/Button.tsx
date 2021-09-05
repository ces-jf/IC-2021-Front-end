import { ReactNode } from 'react';
import styles from '../styles/components/Button.module.css'

interface ButtonProps {
    children?: ReactNode;
    type?: any;
    action?: string;
    method?: string;
    secondary?: boolean;
    disabled?: boolean;
    onClick?: (e) => void;
}

export function Button(props: ButtonProps) {
    return (
        <button type={props.type} 
            className={`${props.secondary ? styles.secondaryButton : styles.button} ${props.disabled ? styles.disabled : null}` } 
            formAction={props.action} 
            formMethod={props.method}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}