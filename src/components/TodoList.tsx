import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import useStore from "../store";

function TodoListItems() {
  const { todos, toggleTodo, updateTodo, removeTodo } = useStore();

  return (
    <>
      {todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox type="checkbox" checked={todo.done} onClick={() => toggleTodo(todo.id)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => updateTodo(todo.id, evt.target.value)}
          />
          <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
