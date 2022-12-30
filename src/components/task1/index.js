import { useEffect, useState } from "react";
import { AnswersContainer, Bold, Task1Container } from "./style";

const Task1 = () => {
    const [answer, setAnswer] = useState([0, 0, 0])

    // sabiendo que a + b + c = 1000
    // sabiendo que a^2 + b^2 = c^2
    // se puede determinar que c > a && c > b
    // por lo tanto partiendo de que los valores posibles para cumplir el primer caso sean ...
    // a = b = 250 ; c = 500
    // a(250) + b(250) + c(500) = 1000
    useEffect(() => {
        let a = 250
        let b = 250
        let c = 500
        equilibrar(a, b, c)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    // Se va equilibrando la ecuacion, buscando cumplir a^2 + b^2 = c^2
    // caso 1: a^2 + b^2 < c^2
        // aumentamos 1 en del lado izq y disminimos 1 en el lado derecho
    // caso 2: a^2 + b^2 > c^2 
        // disminuimos 1 en del lado izq y aumentamos 1 en el lado derecho

    // se aumenta y disminuye 1 de cada lado para seguir cumpliendo con a + b + c = 1000

    // si se necesita aumetar del lado izquierdo -> se le sumara 1 a "a"
    // si se necesita disminuir del lado izquierdo -> se le restara 1 a "b"
    // mientras que del lado derecho "c" siempre disminuira o incrementara segun se requiera
    const equilibrar = (a, b, c) => {
        const a2 = Math.pow(a, 2)
        const b2 = Math.pow(b, 2)
        const c2 = Math.pow(c, 2)

        if (a2 + b2 === c2) { // a^2 + b^2 = c^2
            // Encontrado
            setAnswer([a, b, c])
        } else if (a2 + b2 < c2) { // a^2 + b^2 < c^2
            // a++
            // c--
            equilibrar(a + 1, b, c - 1)
        } else if (a2 + b2 > c2) { // a^2 + b^2 > c^2 
            // b--
            // c++
            equilibrar(a, b - 1, c + 1)
        }
    }

    return (
        <Task1Container>
            <h1>Task 1</h1>
            <AnswersContainer>
                <Bold>A = {answer[0]}</Bold>
                <Bold>B = {answer[1]}</Bold>
                <Bold>C = {answer[2]}</Bold>
            </AnswersContainer>
            
            <Bold>{answer[0]} + {answer[1]} + {answer[2] } = 1000</Bold>
            <Bold>{answer[0]}<sup>2</sup> + {answer[1]}<sup>2</sup>  = {answer[2] }<sup>2</sup></Bold>
            
        </Task1Container>
    )
}

export default Task1;