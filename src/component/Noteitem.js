
import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote, showAlert } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <div className="d-flex align-items-center">
            <div className="card-text">{note.description}</div>
            <div className="ml-auto">
              <i
                className="far fa-trash-alt mx-2"
                onClick={() => {
                  deleteNote(note._id);
                  showAlert('Deleted Successfully', 'primary');
                }}
              ></i>
              <i className="far fa-edit mx-2" onClick={() => updateNote(note)}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
