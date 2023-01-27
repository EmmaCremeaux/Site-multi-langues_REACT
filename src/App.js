import './App.css';
import ContextLanguage from './context/ContextLanguage';
import Contenu from './components/Contenu';

function App() {

  return (
  <ContextLanguage>
    <Contenu />
  </ContextLanguage>
  )

  
}




// OK 1- Se créer notre fichier de données. 
// 2- Se créer un composant contenu pour tester l'affichage de notre jeu de données.
// 3- Se créer un contexte en fonction de la langue.
// 4- Se créer un composant avec nos icônes pour changer la langue en fonction du contexte.
// 5- Récupérer la langue du navigateur et log le résultat.
// 6- Faire appel à la langue récupérée si elle existe sinon utiliser une langue par défaut (Anglais).


export default App;
