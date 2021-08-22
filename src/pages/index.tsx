// import axios from "axios";
// import { useEffect, useState } from "react";
import { Button } from '../components/Button';
import { MenuCard } from '../components/MenuCard';
import { Modal } from '../components/Modal';
import { BsFolderSymlink, BsFolderPlus } from 'react-icons/bs';
import { VscRepo } from 'react-icons/vsc';
import { RiUserLine } from 'react-icons/ri'
import { LogoUniAc } from '../components/LogoUniAc';
import { Input } from '../components/Input';
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import styles from '../styles/pages/index.module.css';

export default function Home() {
  // useEffect(() => {
  //   axios.get('https://api.github.com/repos/WordPress/WordPress/contributors?per_page=100&page=1')
  //       .then(res => {
  //         console.log(res);
  //       });
  // }, []);

  const [isModalOpen, setModalOpen] = useState(true); 

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
          <Link href='/'>
            <a>
              <Button secondary>
                  <MenuCard icon={BsFolderSymlink}> 
                    Repositórios cadastrados
                  </MenuCard>
              </Button>
            </a>
          </Link>

          <Modal isOpen={isModalOpen} onClose={ (e) => setModalOpen(e)}
            title='Cadastro de repositório'>
              <Input type='text' 
                        labelText='Nome do usuário'
                        id='iNomeUsuario'
                        isRequired={true}
                        icon={ RiUserLine }/>
              <Input type='text' 
                        labelText='Nome do repositório'
                        id='iNomeRepositorio'
                        isRequired={true}
                        icon={ VscRepo }/>
          </Modal>

            <a onClick={ () => setModalOpen(true)}>
              <Button secondary>
                  <MenuCard icon={BsFolderPlus}> 
                    Cadastrar repositório
                  </MenuCard>
              </Button>
            </a>
        </div>
    </div>
    </>
  );
}

/*
1a tela:
	lista dos repositorios cadastrados
	opcao de cadastrar um repositorio novo
	se clicar em cima de um repositorio, traz a tela com informacoes do repositorio (link repo)
	

tela repo:
	2 opçoes (tags e usuarios)
	se clicar em tags:
		abre link tags
	se clicar em usuarios:
		abre tela de usuarios, se clicar em um usuario especifico abre a tela de informacoes do usuario

tela user:
	se clicar no nome do usuario, traz informacoes do usuario especifico (api github)

login
repositorio
usuarios
tags
informacoes do usuario
*/