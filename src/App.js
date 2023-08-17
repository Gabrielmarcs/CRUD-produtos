import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import {useEffect, useState} from 'react';
function App() {
  //Objeto produto
  const produto = {
    codigo: 0,
    nome: '',
    marca: ''
  }

  //useState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  //useEffect
  useEffect(() => {
    fetch('http://localhost:8080/listar')
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido));
  },[]);

  //Obter dados do formulário
  const aoDigitar = (evento) => {
    setObjProduto({
      ...objProduto,[evento.target.name]: evento.target.value
    });
  }

  //Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar',{
      method: 'POST',
      body: JSON.stringify(objProduto),
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setProdutos([...produtos,retorno_convertido]);
        alert('Produto cadastrado com sucesso!');
        limpar();
      }
    })
  }

  //Limpar formulário
  const limpar = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  //Selecionar produto
  const selecionar = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
  }

  //Remover produto
  const remover = () => {
    fetch('http://localhost:8080/remover/' + objProduto.codigo, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem);
        //cópia do vetor de produtos
        let copia = [...produtos];
        let indice = copia.findIndex((p) => {
          return p.codigo === objProduto.codigo;
        });
  
        //remover o produto do vetor cópia
        copia.splice(indice, 1);
  
        //atualizar o vetor de produtos
        setProdutos(copia);
  
        //limpar o formulário
        limpar();
      })
      .catch(error => {
        console.error('Erro ao remover produto:', error);
      });
  };

  //Alterar produto
  const alterar = () => {
    fetch('http://localhost:8080/alterar',{
      method: 'PUT',
      body: JSON.stringify(objProduto),
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        alert('Produto alterado com sucesso!');
        //cópia do vetor de produtos
        let copia = [...produtos];
        let indice = copia.findIndex((p) => {
          return p.codigo === objProduto.codigo;
        });
  
        //alterar o produto do vetor cópia
        copia[indice] = objProduto;
  
        //atualizar o vetor de produtos
        setProdutos(copia);
        limpar();
      }
    })
  }

  //retorno
  return (
    <div>
      <Formulario botao = {btnCadastrar} eventoTeclado = {aoDigitar} cadastrar = {cadastrar} obj={objProduto} cancelar={limpar} remover={remover} alterar={alterar}/>
      <Tabela vetor = {produtos} selecionar={selecionar}/>

    </div>
  );
}

export default App;