import React from "react";
import './ChangeAlert.css'
import { useStorageListener } from "./useStorageListener";
function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize)
    if (show) {
        return (
            <div className='ChangeAlert'>
                <p>
                    Parece que hubo algun cambio en algun ToDo en una 
                    ventana alterna
                </p>
                <button
                  onClick={() => toggleShow(false)}
                  >
                    Recargar pagina
                </button>
            </div>
        )
    } else {
        return null;
    }
}

export { ChangeAlert };