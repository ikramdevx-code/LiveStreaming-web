// import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [input, setInput] = useState('')
    let navigate = useNavigate()
    const handleJoin = () => {
        if (input.trim() !== '') {
            navigate(`/room/${input}`)
        }
        else {
            alert('Room ID cannot be empty')
        }
    }
    return (
        <>
            <div className='home'>
                <input
                    type="text"
                    placeholder='Enter Room ID'
                    className='input'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleJoin}>Join Room</button>
            </div>

        </>

    )
}

export default Home
