import React, { useState } from 'react';

function Content() {   
    const [winnerName, setWinnerName] = useState('Player name');
    const handleNameChange = () => {        
        const names = ['Anurag', 'Dwaipayan', 'Mohar'];
        const int = Math.floor(Math.random() * 3);
        const newName = names[int];
        setWinnerName(newName);
    }



    return (
        <>
            <div>Winner = {winnerName}</div>
            <button onClick={handleNameChange}>Click It</button>
        </>
    )
}

export default Content