import './App.css';
import Contacts from './components/Contacts';
import {useState} from "react";

function App() {

  const [stateContacts, setStateContacts] = useState(true);

  const state=() => {
    console.log("Funcionando") //Prueba
    var col = document.getElementById("Color");
    setStateContacts(!stateContacts); //Niega el estado
    if (stateContacts == true){
      col.style.color= "red"
    }else{
      col.style.color= "green"
    }
  }

  return (
    <div className="App">
      <img src="https://i.pinimg.com/564x/6e/fd/cb/6efdcb357688eb417adc660408c9f5a2.jpg"></img>
{/*       <Contacts nombre="juan Jose" descripcion="hey i am using Whatsapp"/>
      <h2 id='Color'> Estado { stateContacts ? "En linea" : "Ocupado"}</h2>
      <button onClick={state}> Confirmar</button> */}
    </div>
  );
}
export default App;
