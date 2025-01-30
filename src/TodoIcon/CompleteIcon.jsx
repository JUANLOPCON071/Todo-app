import React from "react";
import { TodoIcon } from './'

function CompleteIcon({ completed, onComplete, unComplete }) {
    return (
        <TodoIcon
          type="check"
          color={completed ? 'green' : 'gray'}
          onClick={completed ? unComplete : onComplete}
        />
    )
}

export { CompleteIcon };