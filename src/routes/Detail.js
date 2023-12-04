import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { actionDeleteToDo } from '../actions';


function Detail({ toDos, dispatch }) {
  const id =parseInt(useParams().id);
  const navigate = useNavigate();

  function onClick() {
    dispatch(actionDeleteToDo(id));
    navigate("/");
  }

  return (<div>
    {toDos.find(toDo => toDo.id === id)?.text}
    <button onClick = {onClick}>DELETE</button>
  </div>);
}

function mapStateToProps (state) {
  return { toDos: state };
}

function mapDispatchToProps (dispatch) {
  return { dispatch };
}

Detail.propTypes = {
  toDos : PropTypes.array,
  dispatch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);