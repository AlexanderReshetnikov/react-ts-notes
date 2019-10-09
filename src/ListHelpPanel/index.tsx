import React from 'react';
import ReactDOM, { render } from 'react-dom'; //?
//import { INote } from '../service/data.ts'
import service from '../service';
import { INote } from '../service/data';
import { checkPropTypes } from 'prop-types';
import WorkPanel from '../WorkPanel';



function newNoteByWorkPanel():void{
    
    ReactDOM.render(<WorkPanel id_note={-1} isReadOnly={false}/>, document.getElementById('noteWorkPanel')); //id=-1 = isNew
}



function ListHelpPanel() {
    return (
        <div>
            <button className="listHelpPanel__btn"  id="btn-edit" onClick={
                (event: React.MouseEvent<HTMLButtonElement>) => {newNoteByWorkPanel()}
            } >+ Заметка</button>

            

        </div>
    )
}


export default ListHelpPanel;
