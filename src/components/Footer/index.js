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
          Imersão React da Alura. 
        </a>
        <p>  Valeu Pessoal !!</p>
      </p>
      <p>Produzido por 
        {' '}
        <a href="https://www.facebook.com/Bueno-Inform%C3%A1tica-110271383958003/?ref=aymt_homepage_panel&eid=ARCIe9r1tbIqCsmVeOGOAFaHTF8OTcV7Po91hd-MxKYoTl-6t9O8i6Kn4vega_dpMRdNpoazLNtDFGy4">
        Felipe Bueno 
        </a>
      
      </p>
    </FooterBase>
  );
}

export default Footer;
