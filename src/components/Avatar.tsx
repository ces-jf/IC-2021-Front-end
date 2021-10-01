import styles from '../styles/components/Avatar.module.css';

interface AvatarProps {
    src: string;
}

export function Avatar(props: AvatarProps) {
    return (
        <div className={styles.container}>
            <img src={props.src}/>
        </div>
    );
}