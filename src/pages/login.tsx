import axios from 'axios';
import React, { useState } from 'react';
import { BsEnvelope, BsLock } from 'react-icons/bs';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { LogoUniAc } from '../components/LogoUniAc';
import { useRouter } from 'next/router';
import styles from '../styles/pages/login.module.css';
import { SyncLoader } from 'react-spinners';

export default function Login() {
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        let email = (document.getElementById('iEmail') as HTMLInputElement).value;
        let senha = (document.getElementById('iSenha') as HTMLInputElement).value;
        setLoading(true);
        axios({
            method: 'POST',
            headers: {'Access-Control-Allow-Origin': '*'},
            url: 'https://ces-ic-2021.herokuapp.com/security/login',
            data: {
                "email": email,
                "password": senha
            }
        }).then(res => {
            localStorage.setItem('token', res.data.data.token);
            router.push('/');
        }).catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    return (
        <>
        <div className={styles.marreta}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230" className={styles.wave}>
            <path fill="#fff" fillOpacity="1" d="M0,64L40,74.7C80,85,160,107,240,106.7C320,107,400,85,480,96C560,107,640,149,720,160C800,171,880,149,960,138.7C1040,128,1120,128,1200,112C1280,96,1360,64,1400,48L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
        <div className={styles.container}>
            <div className={styles.logo}>
                <LogoUniAc/>
            </div>
            <div className={styles.box}>
                <form onSubmit={ (e) => handleLogin(e) }>
                    <Input type='email' id='iEmail' icon={BsEnvelope} labelText='Endereço de Email' isRequired/>
                    <Input type='password' id='iSenha' icon={BsLock} labelText='Senha' isRequired/>
                    <div className={styles.buttonArea}>
                        <Button disabled={isLoading}>
                        {
                            isLoading 
                            ? <SyncLoader size={8} color={'#ffffffb9'}/>
                            : 'Login'
                        }
                        </Button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

