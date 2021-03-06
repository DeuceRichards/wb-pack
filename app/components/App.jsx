import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
		  notes: [
  			{
          id: uuid.v4(),
          task: 'Git gud'
        },
        {
          id: uuid.v4(),
          task: 'Taco Bell'
        },
        {
          id: uuid.v4(),
          task: 'Profit'
        }
      ]
    };
  }
  render(){
    const notes = this.state.notes;

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    );
	}
  deleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };
  // experimental feature = property initializer
  // It allows teh bind method 'this' to point
  // at our *App* instance
  // Could bind at constructor using a ling such as
  // this.addNote = this.addNote.bind(this);
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  };
  editNote = (id, task) => {
    // Don't modify if trying set an empty value
    if(!task.trim()){
      return;
    }

    const notes = this.state.notes.map(note => {
      if(note.id === id && task){
        note.task = task;
      }

      return note;
    });

    this.setState({notes});
  };
}
