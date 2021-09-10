import React, { useState } from 'react'

function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailSignUpHandler = () => {
        
    }

    return (
        <div className="signup">
            <img src="https://icons-for-free.com/iconfiles/png/512/play+icon-1320167992475058341.png" alt="logo" />
            <form>
                <p>User Name</p>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="email" placeholder="Enter email" />
                <p>Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                <p>Password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" />
                <small>By signing-in you agree to refrain from defamatory, indecent, offensive, profane, discriminatory, misleading, unlawful or threatening comments.</small>
                <button onClick={emailSignUpHandler} type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Signup
