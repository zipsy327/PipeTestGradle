import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import img1 from './1.jpg';

function App() {
  const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch("/hello")
            .then((response) => {
                return response.json();
            })
            .then(function (data) {
                setMessage(data);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">  
                <img src={img1} style={{width:'200px'}}/>             
                <ul>
                    {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)}
                </ul>
            </header>
        </div>
    );
}

export default App;
