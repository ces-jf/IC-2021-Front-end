import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LogoUniAc } from '../components/LogoUniAc';
import { RepoCard } from '../components/RepoCard';
import styles from '../styles/pages/repositorios.module.css';
import api from '../helpers/api';
import doAuth from '../helpers/authHelper';

export default function Repositorios() {
    let authenticated = doAuth();
    
    if (authenticated) {
        let repositorios = [];
        let cardsObj = [];
        const [cards, setCards] = useState(null);
        const router = useRouter();   
        useEffect(() => {
            api.get('/repos').then(res => {
                repositorios = res.data;
                repositorios.forEach((repo) => {
                    cardsObj.push(
                        <RepoCard
                        key={repo.id}
                        avatarUrl={repo.owner.avatar_url}
                        name={repo.name}
                        owner={repo.owner.login}
                        stars={repo.stargazers_count}
                        forks={repo.forks_count}
                        issues={repo.open_issues_count}
                        language={repo.language}
                        description={repo.description}
                        />
                        );
                    });
                    setCards(cardsObj);
                }).catch(err => {
                    router.push('/login');
                });
            }, 
        []);

        return (
            <div className={styles.container}>
                <div className={styles.logo}>
                    <LogoUniAc/>
                </div>
                <div className={styles.content}>
                    {cards}
                </div>
            </div>
        );
    } else {
        return (null);
    }
}