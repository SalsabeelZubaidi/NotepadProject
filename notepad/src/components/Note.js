import { MdDeleteForever } from 'react-icons/md';


const Note = ({id, title, text, date, handleDelete, color }) => {
    return <div className="note" style= {{backgroundColor: `${color}`}}>
        <h1>{title}</h1>
        <span> {text}</span>
        <div className="noteFotter">
            <small>{date}</small>   
            <MdDeleteForever onClick= {()=> handleDelete(id)} className="deleteIcon" size="1.3em"/>
        </div>






    </div> //parent div
};

export default Note;