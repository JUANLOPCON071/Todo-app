import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function EditTodoPage() {
    return (
        <TodoForm
            label='Edita tu tareas'
            submitText='Editar'
            submitEvent={() => console.log('Llamar a editTodo')}
        />
    )
}

export { EditTodoPage };