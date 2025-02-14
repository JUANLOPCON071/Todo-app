import React from 'react'
import './CongratulationsAlert.css'

function CongratulationsAlert({ resetTodos }) {
    return (
        <div className='CongratulationsAlert-overlay'>
            <div className='CongratulationsAlert-container'>
                <h2>🎉 ¡Felicidades! 🎉</h2>
                <p>Has completado todas las tareas, sigue así y 
                    mantén tu productividad al máximo. 🚀
                </p>
                <p>¿Quieres empezar una nueva lista o continuar 
                    con más tareas?
                </p>
                <button 
                className='CongratulationsAlert-button'
                onClick={() => resetTodos()}
                >
                    Empezar lista de tareas nueva
                </button>
            </div>
        </div>
    )
}

export { CongratulationsAlert };