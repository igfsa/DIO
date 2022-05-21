import React from "react"

function Botao(props) {

    const {name, onClick} = props
    // equivalente a: const name = props.name/const onClick = names.onClick

    return(
        <div>
            <button onClick={onClick}>
                {name}
            </button>
        </div>
    )
}

export default Botao