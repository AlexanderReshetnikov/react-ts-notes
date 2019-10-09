import React from 'react';
//import { INote } from '../service/data.ts'
import service from '../service';
import { INote } from '../service/data';
import EditForm from './EditForm';
import List from '../List';
import ReactDOM, { render } from 'react-dom';
import { func } from 'prop-types';
import { listenerCount } from 'cluster';

//import './App.css';
//function loadData
//function WorkPanel() {

function WorkPanel(props: {incomingNote?:INote, id_note:number, isReadOnly:boolean}) {
  
    const note = props.incomingNote == null ? service.getNotes()[0] : props.incomingNote

    //панель с кнопками редактировать/удалить если есть какая-то заметка
    const btnPanel = props.incomingNote != null ? (
        <div className="workPanel__btnPanel">
            <button className="workPanel__btn" id="btn-edit" onClick={()=>{                    
                ReactDOM.render(
                    <WorkPanel incomingNote={note} id_note={props.id_note} isReadOnly={!props.isReadOnly} />, 
                    document.getElementById('noteWorkPanel')
                )
            }}>{props.isReadOnly ? "Редактировать": "Просмотр"}</button>
            
            <button className="workPanel__btn" id="btn-del" onClick={()=>{
                
                const note_data = service.removeNote(props.id_note) //удаляем заметку
                //(<List />).
                ReactDOM.render(<List />, document.getElementById('listNotes'));

                //ReactDOM.render(<WorkPanel isReadOnly={true} incomingNote={note_data[props.id_note - 1]} id_note={props.id_note - 1}/>, document.getElementById('noteWorkPanel'));                    
            }}>Удалить</button>
        </div>
    ) :
    (null)

    const noteChangedElement = props.incomingNote != null && props.isReadOnly ? (
        <div className="workPanel__changed">
            Дата изменения: {note.changed.toLocaleDateString() }
        </div>
    ) :
    (null)

    const noteAttributes = props.isReadOnly ? (
        <div>
            <div className="workPanel__name">{props.incomingNote != null ? note.name : ""}</div>          
            <div className="workPanel__description">
                {props.incomingNote != null ? note.description : ""}
            </div> 
            <div className="workPanel__content">
                {props.incomingNote != null ? note.content : ""}
            </div> 
        </div>
    ) : 
    (
        <EditForm editingNote={note} id_note={props.id_note} isNew={props.incomingNote == null ? true : false} />
    )

    return (
        <div className="workPanel">
            
            {btnPanel}
            {noteAttributes}
            {noteChangedElement}
                                    
        </div>    
    )
    
}




export default WorkPanel;