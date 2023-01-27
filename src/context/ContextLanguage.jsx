
import React, { createContext, useState} from 'react';
import langues from '../components/dataBase';
export const monContext = createContext();


let languageNav = navigator.language.substring(3, 5);



console.log(languageNav)


const supportedLanguages = ["EN", "FR", "ES"];
//supportedLanguages.indexOf = -1 ? languageDefault = "EN" : languageDefault = languageNav
console.log(supportedLanguages.indexOf)

if ( !supportedLanguages.includes(languageNav)) {
    languageNav = "EN"
}


export default function ContextLanguage(props) {

    let [languageDefault, setLanguageDefault] = useState(languageNav)

  const changeLanguage = (event) => {
    setLanguageDefault(event.target.alt)
    console.log(event.target.alt)
  }

  return (
    <monContext.Provider value={{languageDefault, changeLanguage}}>
        {props.children}
    </monContext.Provider>
  )
};