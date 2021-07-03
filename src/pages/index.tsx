import { Input } from '../components/Input';
import { BsEnvelope, BsLock } from 'react-icons/bs';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <form>
        <Input type="email" id='iEmail' icon={BsEnvelope} labelText='Endereço de Email' isRequired/>
        <Input type="password" id='iSenha' icon={BsLock} labelText='Senha'/>
        <button type="submit">teste</button>
        <Link href='/user/natan-fernandes'>
          TESTE 
        </Link>
      </form>
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