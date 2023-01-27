import langues from './dataBase'
import { useContext } from 'react';
import { monContext } from '../context/ContextLanguage';

export default function Contenu() {

const {languageDefault, changeLanguage} = useContext(monContext);

return (
    <div className = "contain">
      <nav> 
        <ul>
          <li className="imagePays"><img onClick={changeLanguage} src={`assets/FR.svg`} alt="FR" /></li>
          <li className="imagePays"><img onClick={changeLanguage} src={`assets/EN.svg`} alt="EN" /></li>
          <li className="imagePays"><img onClick={changeLanguage} src={`assets/ES.svg`} alt="ES" /></li>
        </ul>
      </nav>
     <div className="form">
      <h1 className="titleForm">
          {langues[languageDefault].title}
      </h1>
    
        <h2 className="subtitleForm">
          {langues[languageDefault].subtitle}
        </h2>
        </div>
    </div>
     );
    };