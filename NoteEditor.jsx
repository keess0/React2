import { useState, useEffect, useRef } from "react";

function NoteEditor({onSave}){
    
    const [leoTitulo, setTitulo] = useState('');
    const [leoContenido, setContenido] = useState('');
    const inputRef = useRef(null);

    useEffect( ()=>{
        inputRef.current.focus(); //El focus es para que se entre en el imput que quiero vigilar
    })

    const GuardaNota = () =>{ //Cada vez que creo guardo una nota y viceversa
        if (leoTitulo.trim() !== '' && leoContenido.trim() !== '') {
            onSave(leoTitulo, leoContenido);
            setTitulo('');
            setContenido('');
            
            inputRef.current.focus();
          }
    }

    const TituloCambia = (event) =>{
        setTitulo(event.target.value);
    }
    
    const ContenidoCambia = (event) =>{
        setContenido(event.target.value);
    }
    
    //Esto que aprece arriba de la web es el editor
    //onchange vigila si cambia el título
    return(
        <div className="card">
            <div className="card-body">
               
                <h2 className="card-title">Nueva Nota:</h2>

                <div className="container mb-4">
                    <input type="text" className="form-control" placeholder="Titulo..." value={leoTitulo} onChange={TituloCambia} ref={inputRef}   
                    />

                </div>

                <div className="container mb-2">
                    <textarea className="form-control" placeholder="Escribe tu Contenido..." value={leoContenido} onChange={ContenidoCambia} ref={inputRef}   
                    />
                </div>

                <button className="btn btn-primary" onClick={GuardaNota}> Guardar </button>

            </div>
            
         </div>

        
        
    );
}

export default NoteEditor;