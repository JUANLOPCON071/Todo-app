import React from "react";
import { useNavigate } from "react-router-dom";
import './TodoForm.css';

function TodoForm(props) {
    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue);
        navigate('/');
    }

    const onCancel = () => {
        navigate('/')
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea
              placeholder="Nuevo TODO"
              value={newTodoValue}
              onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button
                    TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button
                    TodoForm-button--add"
                >
                    {props.submitText}
                </button>
            </div>
        </form>
    )
}

export { TodoForm };