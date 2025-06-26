import { useState } from "react";
import "./Cube.css";

function Cube() {

    const [cube, setCube] = useState({
        front: Array(3).fill(null).map(() => Array(3).fill("white")),
        back: Array(3).fill(null).map(() => Array(3).fill("yellow")),
        top: Array(3).fill(null).map(() => Array(3).fill("blue")),
        bottom: Array(3).fill(null).map(() => Array(3).fill("green")),
        left: Array(3).fill(null).map(() => Array(3).fill("orange")),
        right: Array(3).fill(null).map(() => Array(3).fill("red")),
    });

    const rotateMatrixClockwise = (matrix) => matrix[0].map((_, i) => matrix.map(row => row[i]).reverse());
    const rotateMatrixCounterClockwise = (matrix) => matrix[0].map((_, i) => matrix.map(row => row[matrix.length - 1 - i]));

    const rotate = (move) => {
        setCube(prevCube => {
        const newCube = JSON.parse(JSON.stringify(prevCube));

        switch (move) {
            case "R": {
            newCube.right = rotateMatrixClockwise(prevCube.right);
            for (let i = 0; i < 3; i++) {
                const temp = prevCube.top[i][2];
                newCube.top[i][2] = prevCube.front[i][2];
                newCube.front[i][2] = prevCube.bottom[i][2];
                newCube.bottom[i][2] = prevCube.back[2 - i][0];
                newCube.back[2 - i][0] = temp;
            }
            break;
            }
            case "R'": {
            newCube.right = rotateMatrixCounterClockwise(prevCube.right);
            for (let i = 0; i < 3; i++) {
                const temp = prevCube.top[i][2];
                newCube.top[i][2] = prevCube.back[2 - i][0];
                newCube.back[2 - i][0] = prevCube.bottom[i][2];
                newCube.bottom[i][2] = prevCube.front[i][2];
                newCube.front[i][2] = temp;
            }
            break;
            }
            case "L": {
            newCube.left = rotateMatrixClockwise(prevCube.left);
            for (let i = 0; i < 3; i++) {
                const temp = prevCube.top[i][0];
                newCube.top[i][0] = prevCube.back[2 - i][2];
                newCube.back[2 - i][2] = prevCube.bottom[i][0];
                newCube.bottom[i][0] = prevCube.front[i][0];
                newCube.front[i][0] = temp;
            }
            break;
            }
            case "L'": {
            newCube.left = rotateMatrixCounterClockwise(prevCube.left);
            for (let i = 0; i < 3; i++) {
                const temp = prevCube.top[i][0];
                newCube.top[i][0] = prevCube.front[i][0];
                newCube.front[i][0] = prevCube.bottom[i][0];
                newCube.bottom[i][0] = prevCube.back[2 - i][2];
                newCube.back[2 - i][2] = temp;
            }
            break;
            }
            case "U": {
            newCube.top = rotateMatrixClockwise(prevCube.top);
            newCube.front[0] = [...prevCube.right[0]];
            newCube.right[0] = [...prevCube.back[0]];
            newCube.back[0] = [...prevCube.left[0]];
            newCube.left[0] = [...prevCube.front[0]];
            break;
            }
            case "U'": {
            newCube.top = rotateMatrixCounterClockwise(prevCube.top);
            newCube.front[0] = [...prevCube.left[0]];
            newCube.left[0] = [...prevCube.back[0]];
            newCube.back[0] = [...prevCube.right[0]];
            newCube.right[0] = [...prevCube.front[0]];
            break;
            }
            case "D": {
            newCube.bottom = rotateMatrixClockwise(prevCube.bottom);
            newCube.front[2] = [...prevCube.left[2]];
            newCube.left[2] = [...prevCube.back[2]];
            newCube.back[2] = [...prevCube.right[2]];
            newCube.right[2] = [...prevCube.front[2]];
            break;
            }
            case "D'": {
            newCube.bottom = rotateMatrixCounterClockwise(prevCube.bottom);
            newCube.front[2] = [...prevCube.right[2]];
            newCube.right[2] = [...prevCube.back[2]];
            newCube.back[2] = [...prevCube.left[2]];
            newCube.left[2] = [...prevCube.front[2]];
            break;
            }
            case "F": {
            newCube.front = rotateMatrixClockwise(prevCube.front);
            for (let i = 0; i < 3; i++) {
                const temp = prevCube.top[2][i];
                newCube.top[2][i] = prevCube.left[2 - i][2];
                newCube.left[2 - i][2] = prevCube.bottom[0][2 - i];
                newCube.bottom[0][2 - i] = prevCube.right[i][0];
                newCube.right[i][0] = temp;
            }
            break;
            }
            case "F'": {
            newCube.front = rotateMatrixCounterClockwise(prevCube.front);
            for (let i = 0; i < 3; i++) {
                const temp = prevCube.top[2][i];
                newCube.top[2][i] = prevCube.right[i][0];
                newCube.right[i][0] = prevCube.bottom[0][2 - i];
                newCube.bottom[0][2 - i] = prevCube.left[2 - i][2];
                newCube.left[2 - i][2] = temp;
            }
            break;
            }
            case "B": {
            newCube.back = rotateMatrixClockwise(prevCube.back);
            for (let i = 0; i < 3; i++) {
                const temp = prevCube.top[0][i];
                newCube.top[0][i] = prevCube.right[i][2];
                newCube.right[i][2] = prevCube.bottom[2][2 - i];
                newCube.bottom[2][2 - i] = prevCube.left[2 - i][0];
                newCube.left[2 - i][0] = temp;
            }
            break;
            }
            case "B'": {
            newCube.back = rotateMatrixCounterClockwise(prevCube.back);
            for (let i = 0; i < 3; i++) {
                const temp = prevCube.top[0][i];
                newCube.top[0][i] = prevCube.left[2 - i][0];
                newCube.left[2 - i][0] = prevCube.bottom[2][2 - i];
                newCube.bottom[2][2 - i] = prevCube.right[i][2];
                newCube.right[i][2] = temp;
            }
            break;
            }
            default:
            break;
        }

        return newCube;
        });
    };

    const renderFace = (faceName) => (
        <div className="face">
        {cube[faceName].map((row, rowIndex) => (
            <div className="line" key={rowIndex}>
            {row.map((color, colIndex) => (
                <div
                key={`${rowIndex}-${colIndex}`}
                className="box"
                style={{
                    backgroundColor: color,
                    width: "50px",
                    height: "50px",
                    border: "1px solid black",
                }}
                ></div>
            ))}
            </div>
        ))}
        </div>
    );

    const moveButtons = ["F", "F'", "B", "B'", "L", "L'", "R", "R'", "U", "U'", "D", "D'"];

    return (
        <div>
            <h2>Rubik's Cube</h2>
            <div className="cube">
                <div className="eachFace">{renderFace("front")}<p>Front</p></div>
                <div className="eachFace">{renderFace("back")}<p>Back</p></div>
                <div className="eachFace">{renderFace("left")}<p>Left</p></div>
                <div className="eachFace">{renderFace("right")}<p>Right</p></div>
                <div className="eachFace">{renderFace("top")}<p>Top</p></div>
                <div className="eachFace">{renderFace("bottom")}<p>Bottom</p></div>
            </div>
            <div className="controls">
                {moveButtons.map((move) => (
                <button key={move} onClick={() => rotate(move)}>
                    {move}
                </button>
                ))}
            </div>
            <div className="symbolesExplanation">
                <p><strong>F</strong> → Rotate the <strong>Front face</strong> clockwise (as if you're facing it)</p>
                <p><strong>F'</strong> → Rotate the <strong>Front face</strong> counter-clockwise</p>
                <p><strong>B</strong> → Rotate the <strong>Back face</strong> clockwise (from your perspective, behind)</p>
                <p><strong>B'</strong> → Rotate the <strong>Back face</strong> counter-clockwise</p>
                <p><strong>L</strong> → Rotate the <strong>Left face</strong> clockwise (looking directly at the left)</p>
                <p><strong>L'</strong> → Rotate the <strong>Left face</strong> counter-clockwise</p>
                <p><strong>R</strong> → Rotate the <strong>Right face</strong> clockwise</p>
                <p><strong>R'</strong> → Rotate the <strong>Right face</strong> counter-clockwise</p>
                <p><strong>U</strong> → Rotate the <strong>Upper (Top) face</strong> clockwise (viewed from above)</p>
                <p><strong>U'</strong> → Rotate the <strong>Upper face</strong> counter-clockwise</p>
                <p><strong>D</strong> → Rotate the <strong>Down (Bottom) face</strong> clockwise (viewed from below)</p>
                <p><strong>D'</strong> → Rotate the <strong>Down face</strong> counter-clockwise</p>
            </div>

        </div>
    );
}

export default Cube;



