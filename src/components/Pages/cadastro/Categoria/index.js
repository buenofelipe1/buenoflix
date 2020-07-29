import React from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria (){ 
    return (
        <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


        
      <form>

            <label>
                Descrição:
            <input
                type="text"
            />
            </label>

            <button>
                Cadastrar
            </button>
        </form>

        <form>

            <label>
                Cor:
            <input
                type="text"
            />
            </label>

            <button>
                Cadastrar
            </button>
        </form>


        <Link to="/">
           HOME
        
        </Link>
        </PageDefault>
    )   
   }
   export default CadastroCategoria;