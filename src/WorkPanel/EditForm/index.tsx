import React, { Component, FormEvent } from 'react';
import { INote } from '../../service/data';
import service from '../../service';
//import { INote } from '../service/data.ts'
//import service from '.../service';
//import { INote } from '.../service/data';
import ReactDOM, { render } from 'react-dom';
import List from '../../List';
import { thisExpression } from '@babel/types';
import WorkPanel from '..';

type editFormProps = {
    editingNote:INote,
    id_note: number,
    isNew:boolean
    //name: string
}

class EditForm extends Component<editFormProps> {
    //inputName: string;
    //inputDescription: string;
    //inputContent: string;    

    constructor(props: editFormProps){
        super(props) 
       // this.inputName = this.props.editingNote.name;
        //this.inputDescription = this.props.editingNote.description;
        //this.inputContent = this.props.editingNote.content;        
    /*this.state = {
        editingNote: editingNote   
    }*/
    /*this.state = {
        name: "4"
    }*/
    //this.name = props.editingNote.name
    
    //this.handleInputName = this.handleInputName.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
    }

/*handleChange(event:InputEvent):void{
    const {name, value} = event.target
    this.setState({
        [name]: value
    })

}*/


handleSubmit(event:FormEvent):void {
    event.preventDefault()

    const edNote:INote ={
        name : (event.target as HTMLFormElement).editForm__name.value,
        description : (event.target as HTMLFormElement).editForm__description.value,
        content : (event.target as HTMLFormElement).editForm__content.value,
        changed : new Date()
    }
    const note_id = (event.target as HTMLFormElement).editForm__noteId.value
    
    //id=-1 = Note isNew
    const notes_data = note_id==-1 ? service.addNote(edNote) : service.changeNote(edNote, note_id);
    
    //перерисовываем компоненты
    //(<List />).props.notes_data = notes_data //TODO обновлять list через props
    ReactDOM.render(<List />, document.getElementById('listNotes'));
    //ReactDOM.render(<WorkPanel incomingNote={notes_data[note_id]} id_note={note_id} isReadOnly={true}/>, document.getElementById('noteWorkPanel'));
}

render(){
    return (
        <div>
            <form onSubmit={this.handleSubmit} className="editForm">
                <input type="hidden" name="editForm__noteId" value={this.props.isNew ? "-1" : this.props.id_note}></input>
                <table>
                  <tbody>
                    <tr>
                        <td>
                            <label>Имя:</label>
                        </td>
                        <td>
                            <input className="editForm__input" type="text" name="editForm__name" defaultValue={
                                this.props.isNew ? "" : this.props.editingNote.name
                            } placeholder="Название"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Описание:</label>
                        </td>
                        <td>
                            <input className="editForm__input" type="text" name="editForm__description" defaultValue={
                                this.props.isNew ? "" : this.props.editingNote.description
                            } placeholder="Описание"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Содержание:</label>
                        </td>
                        <td>
                            <textarea className="editForm__input" name="editForm__content" cols={45} rows={8} defaultValue={
                                this.props.isNew ? "" : this.props.editingNote.content
                            } placeholder="Содержание"></textarea>
                        </td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="workPanel__changed">
                    Дата изменения: {this.props.isNew ? "нет" : this.props.editingNote.changed.toLocaleDateString()}
                </div> 

                <input type="submit" value="Сохранить" className="editForm__btn" />    
                         
            </form>            
        </div>        
    )
}

}

export default EditForm