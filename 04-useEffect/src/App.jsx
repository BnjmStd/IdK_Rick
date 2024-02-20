import { useEffect, useState } from 'react';

/* style */
import './App.css';

function App() {

    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({ x: 0, y:0 });

    useEffect(() => {

        const handleMove = (e) => {
            const { clientX, clientY } = e;
            setPosition({x:clientX, y:clientY});
        };

        if (enabled) {
            window.addEventListener('pointermove', handleMove);
        }

        return () => {
            window.removeEventListener('pointermove', handleMove);
        }
        
    }, [enabled])

    const changeEnabled = () => {
        setEnabled(!enabled);
    };

    return (
        <>
        <main>
            <div style={{
                position: 'absolute',
                backgroundColor: '#09f',
                borderRadius: '50%',
                opacity: '0.8',
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}>

            </div>
            
            <button onClick={changeEnabled}>{enabled ? 'Desactivar' : 'Activar'} puntero </button>
        </main>

        </>
    )
}

export default App
