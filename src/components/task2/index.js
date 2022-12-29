import { useState } from "react";
import styled from "styled-components";
import Lost from "./lost";
import Simon from "./simon";
import Table from "./table";

const Task2Simon = () => {
    const [showLost, setShowLost] = useState(false);
    const [player, setPlayer] = useState('');
    const [score, setScore] = useState(0);

    return (
        <Task2Container>
            <Instructions>
                ** Cuando la luz este en verde puedes iniciar a marcar tus respuestas!
            </Instructions>
            <Simon
                showLost={showLost}
                setShowLost={setShowLost}
                setScore={setScore}
            />

            {showLost &&
                <Lost
                    score={score}
                    player={player}
                    setPlayer={setPlayer}
                    hideLost={() => setShowLost(false)}
                />
            }

            <Table />

            <h1>
                <Link href="https://sublimexf.netlify.app/" target="_blank">
                    Visita mi portafolio :))
                </Link>
            </h1>
        </Task2Container>
    )
}

const Task2Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 50px;   
`
const Instructions = styled.p`
    color: green;
    font-size: 30px;
`

const Link = styled.a`
    text-decoration: none;
`


export default Task2Simon;