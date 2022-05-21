import React from "react"

function ComponentePai(props) {

    return(
        <div>
            <h1>Componente pai</h1>
            <div>{props.children}</div>
        </div>
    )
}

export default ComponentePai