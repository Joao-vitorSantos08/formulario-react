import React, { useState } from "react";
import "./style.css";

const App = () => {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

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
      alert("Formúlario enviado com Sucesso!")
      setNome("")
      setEmail("")
      setSenha("")
    } else {
      alert("Preencha o formulário completo antes de enviar")
    }
  }



  return (
    <div>
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

    </div>
  )
}


export default App;
