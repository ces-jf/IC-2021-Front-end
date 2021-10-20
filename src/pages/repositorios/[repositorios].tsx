import { useRouter } from "next/router";
import { LogoUniAc } from "../../components/LogoUniAc";
import { BsArrowReturnLeft } from 'react-icons/bs';
import Link from 'next/link';
import styles from '../../styles/pages/repositorios.module.css';
import doAuth from '../../helpers/authHelper';
import { Avatar } from "../../components/Avatar";
import api from '../../helpers/api';
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { RingLoader } from 'react-spinners';

export default function Repositorios() {
    const obterData = (data) => {
        return data.split('T')[0].split('-').reverse().join('/');
    }

    const authenticated = doAuth();
    if (authenticated) {
        const [data, setData] = useState(null);
        const [readme, setReadme] = useState('');

        const router = useRouter();
        const nomeRepositorio = router.query.repositorios;
        useEffect(() => {
            api.get('/repos?repo=' + nomeRepositorio).then(res => {
                setData(res.data);
                axios.get(`https://raw.githubusercontent.com/${res.data.repo.owner.login}/${res.data.repo.name}/master/README.md`).then(res2 => {
                        setReadme(res2.data);
                }).catch(err => {
                    axios.get(`https://raw.githubusercontent.com/${res.data.repo.owner.login}/${res.data.repo.name}/master/readme.html`).then(res2 => {
                        setReadme(res2.data);
                    });
                })
            }).catch(err => {
                console.log(err);
                router.push('/login');
            });
            

            },
        []);
        if (data == null) {
            return (
                <div className={styles.loading}>
                    <RingLoader/>
                </div>
            )
        }

        return (
            <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <LogoUniAc/>
                </div>
                <Link href='/repositorios'>
                    <div className={styles.voltar}>
                        <BsArrowReturnLeft/>
                    </div>
                </Link>
                <div className={styles.content}>
                    <div className={styles.cabecalho}>
                        <div className={styles.avatar}>
                            <a href={`https://github.com/${data.repo.owner.login}/${data.repo.name}`} target="_blank" rel="noopener noreferrer">                      
                                <Avatar src={data.repo.owner.avatar_url}/>
                            </a>
                        </div>
                        <div className={styles.innerCabecalho}>     
                            <a href={`https://github.com/${data.repo.owner.login}/${data.repo.name}`} target="_blank" rel="noopener noreferrer">                      
                                <h1>{data.repo.name}</h1>
                                <h2>{data.repo.owner.login}</h2>
                                <h3>{data.repo.description}</h3>
                            </a>
                        </div>
                    </div>
                    <div className={styles.corpo}>
                        <p>
                            Criado em {obterData(data.created_at)}, este repositório possui 
                            <b> {data.forks} bifurcações</b> e <b>{data.watchers} observadores</b> e <b>{data.stargazers_count} favoritos</b>!
                        </p>
                        <p>
                            Sua principal linguagem de programação é <b>{data.repo.language}</b> e está sobre a licença "<b>{data.repo.license.name}</b>".
                        </p>
                        <div className={styles.readmeContainer}>
                            <h2>Sobre</h2>
                            <ReactMarkdown className={styles.readmeContent} disallowedElements={['code']}>
                                {(readme).replace(/<\/?[^>]+(>|$)/g, "")}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    } else {
        return (null);
    }
}