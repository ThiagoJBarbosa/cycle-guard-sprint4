"use client";
import Link from 'next/link';
import React, { useState } from 'react';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    cpf: '',
    idade: '',
    cep: '',
    endereco: '',
    estado: '',
    complemento: '',
    numero: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const apiResponse = await fetch('http://localhost:8080/ProjetoCycleGuard/rest/Cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          senha: formData.senha,
          telefone: formData.telefone,
          cpf: parseInt(formData.cpf, 10),
          idade: formData.idade,
          cep: formData.cep,
          endereco: formData.endereco,
          estado: formData.estado,
          complemento: formData.complemento,
          numero: formData.numero,
        }),
      });

      if (apiResponse.ok) {
        console.log('Requisição enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java:', apiResponse.statusText);
        
        try {
          const errorDetails = await apiResponse.json();
          console.error('Detalhes do erro:', errorDetails);
        } catch (jsonError) {
          const errorText = await apiResponse.text();
          console.error('Detalhes do erro:', errorText);
        }
      }
    } catch (error) {
      console.error('Erro ao conectar com a API Java:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === 'cpf' ? parseInt(value, 10) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };

  return (
    <div className="cliente-data-form">
    <div className="cliente-data-header"> 
    <Link href='/homeDois'>
        <button className="cliente-back-button">&#8592; Voltar</button>
        </Link>
    </div>

    <div className="cliente-form-container">
      <form onSubmit={handleSubmit} className="forms" action="">
      <div className="cliente-title">
                <h2>PARA CONTINUAR PRECISAMOS CONFIRMAR ALGUNS DADOS, OK?</h2>
            </div>
        <div className="cliente-form-group">
        <label htmlFor="nome">
          NOME
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            required
            value={formData.nome}
            onChange={handleChange}
          />
        </label></div>
        <div className="cliente-form-group">
        <label htmlFor="email">
          EMAIL
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label></div>
        <div className="cliente-form-group">
        <label htmlFor="senha">
          SENHA
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            required
            value={formData.senha}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="cliente-form-group">
        <label htmlFor="telefone">
          TELEFONE
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="Telefone"
            required
            value={formData.telefone}
            onChange={handleChange}
          />
        </label></div>
        <div className="cliente-form-group">
        <label htmlFor="cpf">
          CPF
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="CPF"
            required
            value={formData.cpf}
            onChange={handleChange}
          />
        </label></div>
        <div className="cliente-form-group">
        <label htmlFor="idade">
          IDADE
          <input
            type="text"
            id="idade"
            name="idade"
            placeholder="Idade"
            required
            value={formData.idade}
            onChange={handleChange}
          />
        </label></div>
        <div className="cliente-form-group">
        <label htmlFor="cep">
          CEP
          <input
            type="text"
            id="cep"
            name="cep"
            placeholder="CEP"
            required
            value={formData.cep}
            onChange={handleChange}
          />
        </label></div>
        <div className="cliente-form-group">
        <label htmlFor="endereco">
          ENDEREÇO
          <input
            type="text"
            id="endereco"
            name="endereco"
            placeholder="Endereço"
            required
            value={formData.endereco}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="cliente-form-group">
        <label htmlFor="estado">
          ESTADO
          <input
            type="text"
            id="estado"
            name="estado"
            placeholder="Estado"
            required
            value={formData.estado}
            onChange={handleChange}
          />
        </label></div>
        <div className="cliente-form-group">
        <label htmlFor="complemento">
          COMPLEMENTO
          <input
            type="text"
            id="complemento"
            name="complemento"
            placeholder="Complemento"
            required
            value={formData.complemento}
            onChange={handleChange}
          />
        </label></div>
        <div className="cliente-form-group">
        <label htmlFor="numero">
          NÚMERO
          <input
            type="text"
            id="numero"
            name="numero"
            placeholder="Número"
            required
            value={formData.numero}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='div-botao-cadastro'>
        <button type="submit" disabled={loading} className='cliente-cadastro'>
          {loading ? 'Aguarde...' : 'CADASTRAR'}
        </button></div>
      </form>
      </div>
    </div>
  );
}