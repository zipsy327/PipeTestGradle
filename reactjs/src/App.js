import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import img1 from './1.jpg';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState([]);
    const [data,setData]=useState([]);
    useEffect(() => {
        fetch("/hello")
            .then((response) => {
                return response.json();
            })
            .then(function (data) {
                setMessage(data);
            });

        axios.get("/list")
        .then(res=>{
            setData(res.data);
            console.log(res.data.length);
        })
    }, []);

    return (
        <div className="App">
            <header className="App-header">  
                <img src={img1} style={{width:'200px'}}/>             
                <ul>
                    {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)}
                </ul>
            </header>
            <hr/>
            <section>
                <h2>SpringBoot /list 로부터 받은 데이타 출력</h2>
                {data.map((obj, index) => <li key={`${index}`}>{obj.name}:{obj.addr} 거주({obj.age}세)</li>)}
            </section>
        </div>
    );
}

export default App;
