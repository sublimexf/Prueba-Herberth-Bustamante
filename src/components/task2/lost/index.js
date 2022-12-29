import { LostBox, LostContainer, SaveButton, Score, TextBox, Title } from "./style"
import { db } from '../../backend/firebase'
import { GreenButton } from "../simon/style"


const Lost = ({player, setPlayer, score, hideLost}) => {

    const savePlayer = () => {
        const auxPlayer = player === '' ? "Player" : player

        const playerData = {
            player: auxPlayer,
            score: score
        }

        db.collection('players').doc().set(playerData)
        hideLost()
    }

    return (
        <LostContainer>
            <LostBox>
                <h1>Gracias por Jugar !!</h1>
                <h2>Ingresa tu nombre</h2>
                <h3> Puntuación: {score}</h3>
                <TextBox 
                    type="textbox"
                    placeholder="Player"
                    value={player}
                    onChange={(e) => setPlayer(e.target.value)}
                />
                <GreenButton onClick={savePlayer}>Guardar</GreenButton>
            </LostBox>
        </LostContainer>
    )
}

export default Lost;