export const CREATE_TODO = "create_todo";
export const DELETE_TODO = "delete_todo";

export const actionCreateToDo = (toDo) => {
  return {
    type: CREATE_TODO,
    payload: toDo
  }
}

export const actionDeleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    payload: parseInt(id)
  }
}