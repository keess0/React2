import Note from './Note.jsx'
import Editor from './NoteEditor.jsx'

//import Button from './Button.jsx'
import { useState, useEffect } from 'react';

function NoteList(){
    
      //son getter y setter
      const [leonotas, notasGuardadas] = useState([]);
      const [buscarNot, setbuscarNotas] = useState('');
      const [Resultados, setresultados] = useState([]);
    
    useEffect(() => {
        const auxsavelocal = JSON.parse(localStorage.getItem('leonotas')) || [];
        notasGuardadas(auxsavelocal);
      }
    , []);
    


    //Hago guardado local.
    const GuardadoLocal = (actualizaNotas) => {
        localStorage.setItem('leonotas', JSON.stringify(actualizaNotas));
    };
    //Los "...notas", cge desde el pos[0] hasta pos[n], con n al infinito del array de notas, recordamos qeu Notas es un array
    //Para guardar en local
    const anadeNota = (nuevoTitulo, nuevoContenido) => {
        const nuevaNota = { id: leonotas.length + 1, title: nuevoTitulo, content: nuevoContenido };
        const actualizaNotas = [...leonotas, nuevaNota];
        notasGuardadas(actualizaNotas);
        GuardadoLocal(actualizaNotas);
        setbuscarNotas([]);
    };

    const Borrarnota = (IdNota) => {
        const actualizaNotas = leonotas.filter((notafil) => notafil.id !== IdNota);
        notasGuardadas(actualizaNotas);
        GuardadoLocal(actualizaNotas);
        setbuscarNotas([]);
    };

    const Buscador = () => {
        const flitradoNotas = leonotas.filter(
          (notafil) =>
          notafil.titulo.toLowerCase().includes(buscarNot.toLowerCase()) || notafil.contenido.toLowerCase().includes(buscarNot.toLowerCase())
        );
        setresultados(flitradoNotas);
      };

    return(
       <div className='div_App'>
            <h1>Lista</h1>

   
      <div className="search-bar mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Introduce el título o contenido..."
          value={buscarNot}
          onChange={(e) => setbuscarNotas(e.target.value)}
        />
        <button className="btn btn-primary ml-2" onClick={Buscador}>Buscar</button>
      </div>
      <h2>Nueva nota</h2>
      <Editor onSave={anadeNota} />
      <div className="note-list d-flex flex-wrap">
        {Resultados.length > 0 ? (
          // Mostrar resultados
          Resultados.map((notafil) => (
            <Note
              key={notafil.id}
              id={notafil.id}
              title={notafil.titulo}
              content={notafil.contenido}
              onDelete={Borrarnota}
            />
          ))
        ) : (
          // Mostrar todas las notas si no hay resultados de búsqueda
          leonotas.map((notafil) => (
            <Note
              key={notafil.id}
              id={notafil.id}
              title={notafil.titulo}
              content={notafil.contenido}
              onDelete={Borrarnota}
            />
          ))
        )}
      </div>
      </div>
    );
}

export default NoteList;