import { useEffect, useState } from 'react';
import { nanoid} from 'nanoid';
import NotesList from './components/NotesList';


const App = () => {
  const[notes, setNotes] = useState([]);
  const[fisrtRender, setfisrtRender] = useState(true);



useEffect(() => {
  if(fisrtRender){
    setNotes(JSON.parse(localStorage.getItem('notes')));
    setfisrtRender(false);
  }else{
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  
}, [notes]);

const add=(text, title, color) =>{
    const date= new Date();
    const newNote={
      id:nanoid(),
      text: text,
      title: title,
      color: color,
      date:date.toLocaleDateString()
    }
    const newNotes=[...notes, newNote]  
    setNotes(newNotes);
}

const deleteNote=(id)=>{
    const newNotes=notes.filter((note)=> note.id !== id); //filter returns an array
    setNotes(newNotes);
}
  return (
    <div className="container">
        <NotesList notes={notes} handleAdd={add}
          handleDelete={deleteNote}
        />

    </div>
)};

export default App;