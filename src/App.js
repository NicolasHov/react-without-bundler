import React, { useState } from "react";
import Link from "./Link";

const App = () => {
    const [displayText1, setDisplayText1] = useState(false)
    const [displayText2, setDisplayText2] = useState(false)
    const [displayText3, setDisplayText3] = useState(false)

    return (
        <>
            <h1>
                Welcome to React App thats build using Webpack and Babel separately
            </h1>
            <button onClick={() => setDisplayText1(true)}>Webpack</button>
            <button onClick={() => setDisplayText2(true)}>Babel</button>
            <button onClick={() => setDisplayText3(true)}>Jest</button>
            {displayText1 ? (
                <p><Link page="https://webpack.js.org/">Webpack</Link> is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules. -Wikipedia</p>
            )
                :
                null
            }
            {displayText2 ? (
                <p><Link page="https://babeljs.io/">Babel</Link> is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. It allows web developers to take advantage of the newest features of the language. -Wikipedia</p>
            )
                :
                null
            }
            {displayText3 ? (
                <p><Link page="https://jestjs.io/docs/tutorial-react#setup-without-create-react-app">Jest</Link> · 🃏 Delightful JavaScript Testing
                    Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. Jest is well-documented, requires little configuration and can be extended to match your requirements. -Jest</p>
            )
                :
                null
            }
        </>
    )
}

export default App