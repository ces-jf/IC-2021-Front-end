import styles from '../styles/components/MenuCard.module.css';
import { IconType } from 'react-icons/lib';
import { ReactNode } from 'react';

interface MenuCardProps {
    icon: IconType;
    children?: ReactNode;
}

export function MenuCard(props: MenuCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <div className={styles.marreta}></div>
                <props.icon/>
            </div>
            <div className={styles.text}>
                {props.children}
            </div>
        </div>
    );
}