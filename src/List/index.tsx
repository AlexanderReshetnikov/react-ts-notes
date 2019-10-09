import React, { ChangeEvent } from 'react';
import ReactDOM, { render } from 'react-dom'; //?
//import { INote } from '../service/data.ts'
import service from '../service';
import { INote } from '../service/data';
import { checkPropTypes } from 'prop-types';
import WorkPanel from '../WorkPanel';
import { listenerCount } from 'cluster';


//import './App.css';


function List(props: {selected_id_note?:number, filtredNotes?:INote[]}) {
  const notes_data = props.filtredNotes==null ? service.getNotes() : props.filtredNotes
  
  //const currentNote = notes_data[props.selected_id_note]
  //const selected_id_note = notes_data.length > 0 && props.selected_id_note > 0 ? props.selected_id_note
  //if(notes_data.length>0 && props.currentId_note !=null && props.currentId_note <= notes_data.length)
  
    ReactDOM.render(<WorkPanel isReadOnly={true} id_note={0} incomingNote={notes_data[0]}/>, document.getElementById('noteWorkPanel')); // TODO допилить

  function openNoteByWorkPanel(note:INote):void{
    
    ReactDOM.render(<WorkPanel incomingNote={note} id_note={notes_data.indexOf(note)} isReadOnly={true}/>, document.getElementById('noteWorkPanel'));
  }

  function filterNotesinList(e:React.ChangeEvent<HTMLInputElement>):void{
        
    const search_str = (e.target as HTMLInputElement).value.toLowerCase()
    
    var filtredNotes = service.getNotes().filter(d=>d.name.toLocaleLowerCase().includes(search_str) || 
        d.description.toLocaleLowerCase().includes(search_str) ||
        d.content.toLocaleLowerCase().includes(search_str));
        
    //List(filtredNotes ={filtredNotes})
    //TODO: сделать отрисовку через изменение props
    ReactDOM.render(<List filtredNotes={filtredNotes}/>, document.getElementById('listNotes'));
  }

  function sortNotesinList(e:React.ChangeEvent<HTMLSelectElement>):void{        
    const sort_val = (e.target as HTMLSelectElement).value
    //console.log(sort_val)
    const notesToSort = props.filtredNotes == null ? service.getNotes() : props.filtredNotes
    
    const sortedNotes = sort_val=="date_asc" ? 
      notesToSort.sort((a, b) =>  a.changed.getTime() - b.changed.getTime())
          : notesToSort.sort((a, b) =>  b.changed.getTime() - a.changed.getTime())
        
    ReactDOM.render(<List filtredNotes={sortedNotes}/>, document.getElementById('listNotes'));
  }

  
    return (
      <div>
        <input type="text" className="listNotes__searchInput" placeholder="Что искать?" onChange={
            (event: React.ChangeEvent<HTMLInputElement>) => {filterNotesinList(event)}
        }>
        </input>

        <div>
          <label>Сортировать по: </label>
          <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {sortNotesinList(event)}}>
            <option value="date_desc">убыванию даты</option>
            <option value="date_asc">возрастанию даты</option>
          </select>
        </div>

        <ul className="listNotes">
          {notes_data.map(note => 
            <li className="listItem" key={note.name} onClick={(event: React.MouseEvent<HTMLLIElement>) => {openNoteByWorkPanel(note)}}>
              <div className="listItem__name">{note.name.length > 0 ? note.name : "<Без имени>"}</div>
              
              <div className="listItem__description">
                {note.description.length < 30 ? note.description : note.description.substring(0, 30)+" ..." //обрезаем длинный текст до разумных размеров чтобы не ломался интерфейс         
                }            
              </div> 
            </li>)}
        </ul>
    </div>
  );
}


/*type listProps = {
  selectedNote:INote
  notes_data:INote[]
}

export default class List extends React.Component {
  constructor(props:listProps){
    super(props);    
    const notes_data = service.getNotes();
    //this.renderNotes(notes_data);
  }

  handleClick(e:Event){
    alert(e.target)
  }
  render() {
    return (
      
      <ol>
      {this.props.notes_data.map(note => 
        <li className="listItem" key={note.name}>
          <div className="listItem__name">{note.name}</div>
          
          <div className="listItem__description">
            {note.description = note.description.length < 30 ? note.description : note.description.substring(0, 30)+" ..." //обрезаем длинный текст до разумных размеров чтобы не ломался интерфейс
            }
          </div> 
        </li>)}
    </ol>
    )
  }


}
*/

export default List;