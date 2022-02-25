import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

declare global {
    interface Array<T> {
        at(index: number): T | undefined
    }
}

// extending array because my typescript is fucking broken and it's 2am
// I don't even fucking use it
Array.prototype.at = function (index: number) {
    return this[index >= 0 ? index : this.length - 1];
}

ReactDOM.hydrate(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
