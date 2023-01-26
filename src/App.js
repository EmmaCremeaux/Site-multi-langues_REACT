import './App.css';
import contenu from './components/dataBase';
import { changeLanguage, useState } from 'react';


function App() {

  const [languageDefault, setLanguageDefault] = useState("en-EN")

  const changeLanguage = (event) => {
    setLanguageDefault(event.target.alt)
    console.log(languageDefault)
  }

  return (
<div className = "contain">
  <nav> 
    <ul>
      {contenu.map((unContenu, i) => (
      <li className="imagePays"><img onClick={changeLanguage} src={`assets/${unContenu.languages}.svg`} alt={unContenu.languages} /></li>
      ))}
    </ul>
  </nav>
 <div className="form">
  <h1 className="titleForm">
      {contenu[0].title}
  </h1>

    <h2 className="subtitleForm">
      {contenu[0].subtitle}
    </h2>
    </div>
</div>
 )
}




// OK 1- Se créer notre fichier de données. 
// 2- Se créer un composant contenu pour tester l'affichage de notre jeu de données.
// 3- Se créer un contexte en fonction de la langue.
// 4- Se créer un composant avec nos icônes pour changer la langue en fonction du contexte.
// 5- Récupérer la langue du navigateur et log le résultat.
// 6- Faire appel à la langue récupérée si elle existe sinon utiliser une langue par défaut (Anglais).


export default App;
