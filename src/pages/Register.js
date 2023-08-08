import { useState } from "react";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function Reg(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.status === 200) {
            alert('Registered successfully!');
        } else {
            alert('Registration failed');
        }
    }

    return (
        <form className="register" onSubmit={Reg}>
            <h1>Register</h1>
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button>Register</button>
        </form>
    )
}

export default Register;