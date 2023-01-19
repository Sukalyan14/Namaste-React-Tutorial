// HMR - Hot Module Reload
//File Watcher Algorithm

import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement(
    'h1', {
        id: 'title',
        className: 'text',
        // style:'color:palegreen'
    },
    'Hello World'
);

const heading2 = React.createElement(
    'h2', {
        id: 'sub-title',
        className: 'text',
        // style:'color:palegreen'
    },
    'Hello There'
);

const container = React.createElement(
    'div', {
        id: 'container'
    },
    [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(container)