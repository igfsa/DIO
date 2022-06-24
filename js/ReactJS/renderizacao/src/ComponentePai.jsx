import React from "react"

function ComponentePai(props) {

    // A propriedade children indica que tudo que será passado dentro do componente, será utilizado como "filho"
    return(
        <div>
            <h1>Componente pai</h1>
            <div>{props.children}</div>

        </div>
    )
}

export default ComponentePai