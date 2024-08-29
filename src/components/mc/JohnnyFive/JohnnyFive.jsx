import { useEffect } from "react";
import { useState } from "react";
import socket from "../../../services/socket";
const JohnnyFive = () => {

    
    const [isConnected, setIsConnected] = useState(false);
    // Vi benytter en useEffect til at tilgå vores socket i forhold til on/off connection
    useEffect( () => {
        
        const onConnect = () => {
            setIsConnected(true);
        }

        const onDisconnect = () => {
            setIsConnected(false);
        }    
        
        // Her opretter vi vores "listeners".
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        return () => {

          // Her sørger vi for at afslutte vores "listeners" når komponentet ikke benyttes.  
          socket.off('connect', onConnect);
          socket.off('disconnect', onDisconnect);
        };
        
    }, [])  

    const blinkJohnny = () => {

        socket.emit('blink', {delay : 200});

    }

    const turnOn = () => {

        socket.emit('turnOn');

    }

    const tirnOff = () => {

        socket.emit('turnOff');

    }

    return (
        <div className={"center-page"}>
            <h1>Johnny is {isConnected ? 'connected' : 'disconnected'}</h1>

            <button onClick={blinkJohnny}>Blink Johnny</button>
            <button onClick={turnOn}>ON</button>
            <button onClick={tirnOff}>OFF</button>
        </div>
    );
};

export default JohnnyFive;