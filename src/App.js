import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput'
import React, { useState } from 'react'

function App() {
    const [total, setTotal] = useState(0);
    const [percent, setPercent] = useState(0);

    return (
        <div className="App">
            <h1>Tip Calculator</h1>
            <TextInput name="Total" onChange={(value) => setTotal(value)} />
            <TextInput name="Percent" onChange={(value) => setPercent(value)} />
            <h1>{total} * {percent * 0.01}</h1>
            <h1>Tip Total: ${Math.round(100 * total * (percent * 0.01)) / 100}</h1>
        </div>
    );
}

export default App;
