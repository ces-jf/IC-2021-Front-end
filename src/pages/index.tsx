import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    axios.get('https://api.github.com/repos/WordPress/WordPress/contributors?per_page=100&page=1')
        .then(res => {
          console.log(res);
        });
  }, []);

  return (
    <>
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