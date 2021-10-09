import { Button } from './Button';
import { Input } from './Input';
import { VscRepo } from 'react-icons/vsc';
import { RiUserLine } from 'react-icons/ri'
import { useState } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import axios from 'axios';
import styles from '../styles/components/CadastroRepositorio.module.css';
import api from '../helpers/api';

interface CadastroRepositorioProps{
  onSuccess: (e) => void;
}

export function CadastroRepositorio(props: CadastroRepositorioProps) {
  const [validationMessage, setValidationMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [showValidationMessageNome, setShowValidationMessageNome] = useState(false);
  const [showValidationMessageRepo, setShowValidationMessageRepo] = useState(false);

  const cadastrarRepositorio = () => {
    let user = (document.getElementById('iNomeUsuario') as HTMLInputElement).value;
    let repo = (document.getElementById('iNomeRepositorio') as HTMLInputElement).value;
    if (user.length == 0 || repo.length == 0){
      setShowValidationMessageNome(user.length == 0);
      setShowValidationMessageRepo(repo.length == 0);
      return;
    }
    setValidationMessage('');
    setLoading(true);
    api.post('/repos', {user: user, repo: repo}).then(res => {
      console.log(res);
      props.onSuccess(true);
      
    }, (err) => {
      let respostaErro = !!err.response.data
                          ? err.response.data
                          : 'Ocorreu um erro ao buscar o repositório';

      setValidationMessage(respostaErro);
      setLoading(false);
    })
  }

  return (
      <>
        <Input type='text' 
          labelText='Nome do usuário'
          id='iNomeUsuario'
          isRequired={true}
          icon={ RiUserLine }
          onKeyPress={ (e) => {
            if (e.key === 'Enter'){
              cadastrarRepositorio()
            } else {
              setShowValidationMessageNome(false);
            }
          }}
          showValidationMessage={showValidationMessageNome}
          disabled={isLoading}
          />
        <Input type='text' 
          labelText='Nome do repositório'
          id='iNomeRepositorio'
          isRequired={true}
          icon={ VscRepo }
          onKeyPress={ (e) => {
            if (e.key === 'Enter'){
              cadastrarRepositorio()
            } else {
              setShowValidationMessageRepo(false);
            }
          }}
          showValidationMessage={showValidationMessageRepo}
          disabled={isLoading}/>
          <a onClick={ () => cadastrarRepositorio() }>
            <Button disabled={isLoading}>
              {
                isLoading 
                  ? <SyncLoader size={8} color={'#ffffffb9'}/>
                  : 'Cadastrar'
              }
            </Button>
          </a>
          <label className={ validationMessage.length == 0 ? styles.displayNone : styles.validationMessage}>
            {validationMessage}
          </label>
      </>
  );
}