import { useEffect, useState } from "react";
import { db } from "../../backend/firebase";
import { TableContainer, Th, Tr } from "./style";

const Table = () => {
    const [players, setPlayers] = useState([]);

    const getPlayers = async () => {
        db.collection('players').onSnapshot((querySnapshots) => {
            const auxPlayers = []
            querySnapshots.forEach(player => {
                auxPlayers.push({...player.data()})
            })
            setPlayers(auxPlayers) 
        });
  
    }

    useEffect(() => {
        getPlayers()
    }, [])

    const AuxTr = ({player, score}) => {
        return (
            <Tr>
                <td>{player}</td>
                <td>{score}</td>
            </Tr>
        )
    }

    return (
        <TableContainer>
            <thead>
                <tr>
                    <Th>Jugador</Th>
                    <Th>Puntuación</Th>
                </tr>
            </thead>
            <tbody>
                {players.map(({player, score}, key) => 
                    <AuxTr 
                        player={player} 
                        score={score} 
                        key={key}
                    />
                )}
            </tbody>
        </TableContainer>
    )
}

export default Table;