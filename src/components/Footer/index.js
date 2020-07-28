import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura. Valeu Pessoal !!
        </a>
      </p>
      <p>Produzido por 
        {' '}
        <a href="https://https://buenoinformatica.000webhostapp.com/?fbclid=IwAR0cEEXc3pMsE_7xJEtghQ172ha-oCSineS5P3hEy5TcHStwCkvbldPPgA0 ">
        Felipe Bueno 
        </a>
      
      </p>
    </FooterBase>
  );
}

export default Footer;
