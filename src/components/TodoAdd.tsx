import { Button, Input, Grid } from "@chakra-ui/react";
import useStore from "../store";

function TodoAdd() {
  const { newTodo, addTodo, setNewTodo } = useStore();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={(evt) => setNewTodo(evt.target.value)}
      />
      <Button onClick={() => addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
