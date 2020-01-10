import React, { useState } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function NewNote(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote, //spread operator
        [name]: value //turns name key from String name to a value of name constant
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note); //pass the note to App.js addNote and trigger it
    //Clear the input fields after adding
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* Render title input only if textarea is expanded */}
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Add a title..."
            autocomplete="off"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Write your note..."
          rows={isExpanded ? 3: 1}
        />
        {/* Button zooms on expansion */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddRoundedIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default NewNote;
