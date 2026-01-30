import React, { useState } from "react";
import "./style.css";
import fundo from './assets/image/imagemBody.jpg'

const App = () => {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("")

  const trocaNome = (e) => {
    setNome(e.target.value)
  }

  const trocarEmail = (e) => {
    setEmail(e.target.value)
  }

  const trocarSenha = (e) => {
    setSenha(e.target.value)
  }



  const submit = (e) => {

    e.preventDefault()

    if (nome !== "" && email !== "" && senha != "") {
      setMensagem("Cadastro realizado com sucesso!")
      setNome("")
      setEmail("")
      setSenha("")
    } else {
      setMensagem("Por favor, preencha todos os campos obrigatórios.")
    }
  }



  return (
    <div className="container">

      <img src={fundo} />

      <form onSubmit={submit}>


        <label htmlFor="nome">Nome: </label>
        <input type="text" name="nome" value={nome} onChange={trocaNome} placeholder="Digite Seu nome completo"></input>

        <label htmlFor="email">Email: </label>
        <input type="email" name="email" value={email} onChange={trocarEmail} placeholder="Digite  seu email" />


        <label htmlFor="idade">Senha: </label>
        <input type="password" name="senha" value={senha} onChange={trocarSenha} placeholder="Digite sua senha" />


        <button type="submit">
          Enviar
        </button>

      </form>


      <h3 className="mensagem">{mensagem}</h3>

    </div>
  )
}


export default App;
