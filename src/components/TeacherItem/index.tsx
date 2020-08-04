  
import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
        <img src="https://avatars1.githubusercontent.com/u/44805101?s=460&u=6fd8015a1cbe1f68d239fdff7ecac88ab15f0cea&v=4" alt="Eric Rocha"/>
        <div>
          <strong>Eric Rocha</strong>
          <span>Lorem</span>
      </div>
    </header>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ut nibh ac lacinia. 
      <br /><br />  
      Cras venenatis suscipit porttitor. Nulla et magna at neque rutrum elementum sit amet id ipsum. Fusce ullamcorper ipsum vitae mauris finibus rutrum. 
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;