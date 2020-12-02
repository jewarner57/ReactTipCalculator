import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput'
import React, { useState } from 'react'

function App() {
    const [total, setTotal] = useState(0);
    const [percent, setPercent] = useState(0);
    const [split, setSplit] = useState(1);

    return (
        <div className="App">
            <h1>Tip Calculator</h1>
            <TextInput name="Bill Total" onChange={(value) => setTotal(value)} />
            <TextInput name="Tip Percent" onChange={(value) => setPercent(value)} />
            <TextInput name="How many was to split?" onChange={(value) => setSplit(value)} />
            <h1>Per Person Amount: ${(100 * total * (percent * 0.01) / 100 + parseInt(total) / split)}</h1>
            <h1>Check Total: ${Math.round(100 * total * (percent * 0.01)) / 100 + parseInt(total)}</h1>

        </div>
    );
}

export default App;
