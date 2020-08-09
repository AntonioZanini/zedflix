import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

export interface ICategoria {
  nomeCategoria: string;
  descricaoCategoria: string;
  corCategoria: string;
}

const initialValues: ICategoria = {
  nomeCategoria: "",
  descricaoCategoria: "",
  corCategoria: "#FFFFFF"
}

function CadastroCategoria() {
    const [categorias, setCategoria] = useState<Array<ICategoria>>([]);
    const [currentValue, setCurrentValue] = useState<ICategoria>(initialValues);
    
    
    function handleFieldChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) {
      const { name, value } = event.target;
      setCurrentValue({
        ...currentValue,
        [name]: value
      });
    }
    
    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {currentValue.nomeCategoria}</h1>

        <form onSubmit={(event) => { 
            event.preventDefault(); 
            setCategoria([
              ...categorias as Array<ICategoria>,
              currentValue
            ]);
            setCurrentValue(initialValues);
          }}>
          
          <FormField 
            label="Nome da Categoria"
            type="text" 
            value={currentValue.nomeCategoria}
            name="nomeCategoria"
            onChange={ handleFieldChange }
          />

          <div>
            <label>
              Descrição
              <textarea
              value={currentValue.descricaoCategoria}
              name="descricaoCategoria"
              onChange={ handleFieldChange }/>
            </label>
          </div>

          <FormField 
            label="Cor"
            type="color"  
            value={currentValue.corCategoria}
            name="corCategoria"
            onChange={ handleFieldChange }
          />
        </form>

        <ul>
          {
            categorias.map((categoria,index) => {
              return <li key={`${categoria.nomeCategoria}${index}`}>{categoria.nomeCategoria}</li>
            })}
        </ul>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    );
}

export default CadastroCategoria;