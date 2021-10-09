import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { LogoUniAc } from '../../components/LogoUniAc';
import { RepoCard } from '../../components/RepoCard';
import styles from '../../styles/pages/repositorios.module.css';
import api from '../../helpers/api';
import doAuth from '../../helpers/authHelper';
import { BsArrowReturnLeft } from 'react-icons/bs';
import Link from 'next/link';

export default function Home() {
    const authenticated = doAuth(); 
    
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
                <Link href='/'>
                    <div className={styles.voltar}>
                        <BsArrowReturnLeft/>
                    </div>
                </Link>
                <div className={styles.content}>
                    <div className={styles.titulo}>
                        <h1>Repositórios cadastrados</h1>
                    </div>
                    {cards}
                </div>
            </div>
        );
    } else {
        return (null);
    }
}