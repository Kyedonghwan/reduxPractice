import React from "react";
import { connect } from "react-redux";
import { actionDeleteToDo } from "../actions";

function ToDo({text, onClickBtn}) {
  return <li>
    {text} <button onClick={onClickBtn}>DELETE</button>
  </li>
}

function mapDispatchToProps (dispatch, ownProps) {
  return { onClickBtn : dispatch(actionDeleteToDo(ownProps.id)) }
}

export default connect(mapDispatchToProps)(ToDo);