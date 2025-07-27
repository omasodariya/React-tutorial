import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//     return (<h1>this is myApp function</h1>)
// }

// const ReactElement ={
//     type: 'a',
//     props: {
//       href: 'https://google.com',
//       target: '_blank',
//     },
//     children: 'Click me to visit Google'
// }

// const anotherReactElement = (
//     <a href="https://google.com" target="_blank">
//         Click me to visit Google
//     </a>
// )

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank',
    },
    'Click me to visit Google'
)

createRoot(document.getElementById('root')).render(
    <App />
    // App()
    // <MyApp/>
    // MyApp()
    // ReactElement //this is not a valid react element

    // anotherReactElement

    // reactElement
)
