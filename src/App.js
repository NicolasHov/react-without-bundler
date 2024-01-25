import React, { useState } from "react";

const App = () => {
    const [displayText1, setDisplayText1] = useState(false)
    const [displayText2, setDisplayText2] = useState(false)

    return (
        <>
            <h1>
                Welcome to React App thats build using Webpack and Babel separately
            </h1>
            <button onClick={() => setDisplayText1(true)}>Webpack</button>
            <button onClick={() => setDisplayText2(true)}>Babel</button>
            {displayText1 ? (
                <p>Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules. Wikipedia</p>
            )
                :
                null
            }
            {displayText2 ? (
                <p>Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. It allows web developers to take advantage of the newest features of the language. Wikipedia</p>
            )
                :
                null
            }
        </>
    )
}

export default App