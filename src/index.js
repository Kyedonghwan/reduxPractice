import { createStore } from 'redux';

const input = document.getElementById("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const CREATE_TODO = 'create_todo';
const DELETE_TODO = 'delete_todo';

const reducer = (state=[], action) => {
  switch(action.type) {
    case CREATE_TODO:
      return [{text: action.payload, id:Date.now()} ,...state]
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.payload)
    default:
      return state;
  }
}

const createAction = (toDo) => {
  return {
    type: CREATE_TODO,
    payload: toDo
  }
}

const deleteAction = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

//Action

const dispatchCreateToDo = (toDo) => {
  store.dispatch(createAction(toDo));
}

const dispatchDeleteToDo = (id) => {
  store.dispatch(deleteAction(id));
}

//Action Creator;

const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.map((toDo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    li.innerHTML = toDo.text;
    li.id = toDo.id;
    button.innerHTML = "DELETE";
    button.addEventListener("click", (e)=> {
      dispatchDeleteToDo(parseInt(e.target.parentNode.id));
    })
    ul.appendChild(li);
    li.appendChild(button);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchCreateToDo(toDo);
})

const store = createStore(reducer);

store.subscribe(paintToDo);
//store 저장될때마다 실행 됨

