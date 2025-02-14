import React from "react";
import './ChangeAlert.css'
import { useStorageListener } from "./useStorageListener";
function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize)
    if (show) {
        return (
            <div className='ChangeAlert-overlay'>
                <div className='ChangeAlert-container'>
                    <p>
                        Parece que hubo algun cambio en los ToDos desde una 
                        ventana alterna
                    </p>
                    <button
                    className='ChangeAlert-button'
                    onClick={() => toggleShow(false)}
                    >
                        Recargar pagina
                    </button>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export { ChangeAlert };