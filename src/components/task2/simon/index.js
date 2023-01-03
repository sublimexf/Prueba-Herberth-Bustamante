import { useEffect, useState } from "react";
import { AnswerLight, Button, Circle, GreenButton, HalfCircle, InnerCircle } from "./style";
import Sound1 from '../../../assets/sound1.m4a'
import Sound2 from '../../../assets/sound2.m4a'
import Sound3 from '../../../assets/sound3.m4a'
import Sound4 from '../../../assets/sound4.m4a'
import LostSound from '../../../assets/lostSound.m4a'

const Simon = ({showLost, setShowLost, setScore}) => {
    const [colorsQueue, setQueue] = useState([]);
    const [queuePosition, setPosition] = useState(-1); // actual position to show the light
    const [answerPosition, setAnswPosition] = useState(0);// actual position while answering
    const [isActive, setActive] = useState(-1); // Which button is active
    const [answer, setAnswer] = useState(-1);

    // Add a new value to the array of colors and starts showing the lights
    const add2Queue = () => {
        setQueue([...colorsQueue, Math.floor(Math.random() * 3)]);
        setPosition(0);
        setAnswer(-1);
    }

    // After a color is active, it turns off all the lights for 0.5s
    // Plays the sound of each color
    useEffect(() => {
        const sound1 = new Audio(Sound1)
        const sound2 = new Audio(Sound2)
        const sound3 = new Audio(Sound3)
        const sound4 = new Audio(Sound4)

        if (!showLost) {
            switch (isActive) {
                case 0:
                    console.log("audio")
                    sound1.play();
                    break;
                case 1:
                    sound2.play();
                    break;
                case 2:
                    sound3.play();
                    break;
                case 3:
                    sound4.play();
                    break;
                default:
                    break;
            }
        }

        if (isActive !== -1) {
            const timmer = setTimeout(() => setActive(-1), 500)
            return () => clearTimeout(timmer)
        }
        // eslint-disable-next-line
    }, [isActive])

    // Loop through the array of colors, and turn them on
    // It works increasing "queuePosition", that is the actual positions of the array while showing the lights
    // ---- It does not work when answer is not -1 because in that case the player is answering
    useEffect(() => {
        setActive(colorsQueue[queuePosition])

        if (answer === -1 && colorsQueue.length > 0) {
            const timmer = setTimeout(() => {
                if (queuePosition !== colorsQueue.length - 1) {
                    setPosition(p => p + 1)
                } else { // waiting for answers
                    setAnswer(-2)
                    setPosition(-1)
                }
            }, 1500)

            return () => clearTimeout(timmer)
        }
        // eslint-disable-next-line
    }, [queuePosition])

    // It checks the answer
    // There's a state to wait for the next answer (answer === -2)
    useEffect(() => {
        if (answer !== -1) {
            if (answer !== -2) setActive(answer)

            if (answer === colorsQueue[answerPosition]) {
                setAnswPosition(p => p + 1)
                setAnswer(-2)

                if (answerPosition === colorsQueue.length - 1) {
                    setTimeout(() => { // It starts again with the next round
                        add2Queue()
                        setAnswPosition(0)
                    }, 2000)
                }
            } else if (answer === -2) {
                // waiting for an answer
            } else {
                const lostSound = new Audio(LostSound)
                lostSound.play()
                setShowLost(true)
                setScore((colorsQueue.length -1) * 5)
                setQueue([])
            }
        }
        // eslint-disable-next-line
    }, [answer])

    return (
        <>
            <Circle>
                <HalfCircle >
                    <Button
                        background="green"
                        isActive={isActive === 0}
                        onClick={() => { if (answer === -2) setAnswer(0) }}
                    />
                    <Button
                        background="red"
                        isActive={isActive === 1}
                        onClick={() => { if (answer === -2) setAnswer(1) }}
                    />
                </HalfCircle>

                <InnerCircle>
                    Simon
                    <AnswerLight isActive={answer === -2} />
                </InnerCircle>

                <HalfCircle >
                    <Button
                        background="yellow"
                        isActive={isActive === 2}
                        onClick={() => { if (answer === -2) setAnswer(2) }}
                    />
                    <Button
                        background="blue"
                        isActive={isActive === 3}
                        onClick={() => { if (answer === -2) setAnswer(3) }}
                    />
                </HalfCircle>
            </Circle>

            <GreenButton onClick={add2Queue}>
                Start
            </GreenButton>
        </>
    )
}

export default Simon;