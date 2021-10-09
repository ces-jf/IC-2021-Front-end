import { Avatar } from '../components/Avatar';
import { BsStarFill } from 'react-icons/bs';
import { VscRepoForked } from 'react-icons/vsc';
import { FaRegDotCircle } from 'react-icons/fa';
import emojiName from 'emoji-name-map'
import styles from '../styles/components/RepoCard.module.css';
import { useRouter } from 'next/router';

interface RepoCardProps {
    avatarUrl: string;
    name: string;
    owner: string;
    stars: number;
    forks: number;
    issues: number;
    language: string;
    description: string;
}

export function RepoCard(props: RepoCardProps) {
    const emojiIt = (text) => {
        if (text == null) return;
        
        text = text.replaceAll('::', ': :');
        let tokens = text.split(' ');
        if (tokens == null) return text;

        let arrNewText = [];
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
            if (token.startsWith(':') && token.endsWith(':')) {
                token = emojiName.get(token);
            }
            arrNewText.push(token);
        }

        text = arrNewText.join(' ');
        return text;
    }

	const router = useRouter();   
    const handleClick = (id: string) => router.push(`/repositorios/${id}`)

    return (
        <div className={styles.container} onClick={() => handleClick(props.name)}>
            <div className={styles.avatar}>
                <Avatar src={props.avatarUrl}/>
            </div>

            <div className={styles.innerContainer}>
                <div className={styles.row}>
                    <div className={styles.content}>
                        <h2>{props.name}</h2>
                        <h3>{props.owner} · {props.language}</h3>
                    </div>
                    <div className={styles.extras}>
                        <div className={styles.issues}>
                            <FaRegDotCircle/>
                            <span>{props.issues}</span>
                        </div>
                        <div className={styles.stars}>
                            <BsStarFill/> 
                            <span>{props.stars}</span>
                        </div>
                        <div className={styles.forks}>
                            <VscRepoForked/>
                            <span>{props.forks}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <p>{emojiIt(props.description)}</p>
                </div>
            </div>
        </div>
    );
}
