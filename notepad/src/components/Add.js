import{ useState} from 'react';

const Add = ({handleAdd}) =>{
    const[noteText, setNoteText]=useState('');
    const[noteTitle, setNoteTitle]=useState('');
    const[noteColor, setNoteColor]=useState('');

    const handleChange = (event, type)=>{
        if(type=="title")
            setNoteTitle(event.target.value)
        if(type=="txt")
            setNoteText(event.target.value)
        if(type=="color")
            setNoteColor(event.target.value)
    }

    const saveClick= ()=>{
        handleAdd(noteText, noteTitle, noteColor)
        setNoteText('')
        setNoteTitle('')
        setNoteColor('#000')
    }
    return(
    <div className="note new">
        <input type="color" value={noteColor} onChange={(e)=>{handleChange(e, 'color')}}/>
        <textarea rows="1" placeholder= "title..." value={noteTitle} onChange={(e)=>{handleChange(e, 'title')}}></textarea>
        <textarea rows="10" cols="10" placeholder= "Type your note here..." value={noteText} onChange={(e)=>{handleChange(e, 'txt')}}></textarea>
        <div className="noteFotter">
            <button className="savebtn" onClick={saveClick}> Save</button>
        </div>    
    </div>
    )
}
export default Add;