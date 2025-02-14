import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage() {
    return (
        <TodoForm
            label='Escribe tu nuevo todo'
            submitText='Añadir'
            submitEvent={() => console.log('Llamar a addTodo')}
        />
    )
}

export { NewTodoPage };