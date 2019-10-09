import { data, INote } from './data';
//import { WorkPanel} from '../WorkPanel';

class Service {
    private notes:INote[]

    constructor(notes:INote[]){
        this.notes = [...notes]
    }

    getNotes(){
        return [...this.notes] 
    }

    addNote(note: INote): INote[]{
        this.notes.push(note)
        return [...this.notes]
    }

    removeNote(id:number): INote[]{
        this.notes.splice(id,1)
        return [...this.notes]
    }

    changeNote(note:INote, id:number): INote[]{
        this.notes[id]=note
        //alert(id)
        return [...this.notes]
    }
}

export default new Service(data);
