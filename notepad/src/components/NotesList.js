import Note from './Note';
import Add from './Add';

const notesList= ({ notes, handleAdd , handleDelete}) => {
    return(
        <div className="notesList">
        {notes.map((note)=> (
            <Note
             title={note.title}
             color={note.color}
             id={note.id} 
             text={note.text} 
             date={note.date}
             handleDelete={handleDelete}
             />
        ))}
        <Add handleAdd={handleAdd}/>    
        </div>
    )

};

export default notesList;