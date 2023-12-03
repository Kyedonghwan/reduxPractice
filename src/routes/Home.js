import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreateToDo } from '../actions';
import ToDo from '../components/ToDo';

function Home({ toDos, createToDo}) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText("");
    createToDo(text);
  }

  return (
    <>
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>{toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}</ul>
    </>
  )
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return { createToDo: (text) => dispatch(actionCreateToDo(text))};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);