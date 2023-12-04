import React from "react";
import { connect } from "react-redux";
import { actionDeleteToDo } from "../actions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ToDo({text, onClickBtn, id}) {
  return <li>
    <Link to={`${id}`}>
      {text} <button onClick={onClickBtn}>DELETE</button>
    </Link>
  </li>
}

function mapDispatchToProps (dispatch, ownProps) {
  return { onClickBtn : () => dispatch(actionDeleteToDo(ownProps.id)) }
}

ToDo.propTypes = {
  text: PropTypes.string,
  onClickBtn: PropTypes.func,
  id: PropTypes.number
}

export default connect(null, mapDispatchToProps)(ToDo);