import { Button } from './Button';
import { Input } from './Input';
import { VscRepo } from 'react-icons/vsc';
import { RiUserLine } from 'react-icons/ri'
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/components/CadastroRepositorio.module.css';
import PuffLoader from "react-spinners/PuffLoader";

export function CadastroRepositorio() {
  const [validationMessage, setValidationMessage] = useState('');
  const [isLoading, setLoading] = useState(true);

  const cadastrarRepositorio = () => {
    let user = (document.getElementById('iNomeUsuario') as HTMLInputElement).value;
    let repo = (document.getElementById('iNomeRepositorio') as HTMLInputElement).value;
    if (user.length == 0 || repo.length == 0) return;
    setLoading(true);
    // axios.get('https://api.github.com/repos/WordPress/WordPress/contributors?per_page=100&page=1')
    //   .then(res => {
    //     console.log(res);
    //   });
    axios({
      method: 'POST',
      headers: {"Access-Control-Allow-Origin": "*"},
      url: 'https://ces-ic-2021.herokuapp.com/repos',
      data: {
        user: user,
        repo: repo
      }
    }).then(res => {
      console.log(res);
    }, (err) => {
      setValidationMessage('Ocorreu um erro ao buscar o repositório');
      setLoading(false);
    })
  }

  return (
      <>
        <div className={styles.loading}>
          <div className={styles.loadingBackground}></div>
          <PuffLoader color={'#00b7ff'} loading={isLoading} size={400} />
        </div>

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
          <a onClick={ () => cadastrarRepositorio() }>
            <Button>
              Cadastrar
            </Button>
          </a>
          <label className={ validationMessage.length == 0 ? styles.displayNone : styles.validationMessage}>
            {validationMessage}
          </label>
      </>
  );
}