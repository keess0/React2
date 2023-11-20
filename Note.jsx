//import Editor from './NoteEditor.jsx';
import {useState, useRef, useEffect} from 'react'
//Linter se configura es una extesión

function Note({id, titulo, contenido, onDelete}){ // L anota es un objeto con id, Titulo y contenido

    const Manejoborrado = () => {
        onDelete(id);
    };

    //useEstate titulo y nota
    return(
        <div className="card mb-3">
            <div className="card-body">
                <h3 className="card-title">{titulo}</h3>
                <p className="card-text">{contenido}</p>
                <button className="btn btn-danger" onClick={Manejoborrado}> Eliminar </button>

            </div>
        </div>
    );
}

export default Note;

// no puedo poner onDelete() porque no hace 
//en el return he creado una tarjeta de bottstrap