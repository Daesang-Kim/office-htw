import styled from 'styled-components';

export const GoogleTimerContainer = styled.div`
    #clock {
        width: 200px;
        height: 200px;
        background: wheat;
        border: 1px solid black;
        border-radius: 50%;
    }
`;


const width = 200;
const height = 200;
const circleSize = 20;
export const Container = styled.div`
    body {
        background-color: hotpink;
        padding: 0;
        margin: 0;
    }

    #clock {
        position: relative;
        width: ${width}px;
        height: ${height}px;
        border-radius: 50%;
        background: radial-gradient(white 0% 56%, transparent 56% 66%, yellow 66%),
        repeating-conic-gradient(from 0deg, transparent 1deg 29deg, black 29deg 31deg),
        repeating-conic-gradient(from 0deg, black 0deg 0.5deg, transparent 0.5deg 5.5deg, black 5.5deg 6deg),
        white;
    }

    #clock:before {
        content: '';
        z-index: 1;
        position: absolute;
        width: ${circleSize}px;
        height: ${circleSize}px;
        border-radius: 50%;
        background-color: yellow;
        top: calc(${height/2}px - ${circleSize/2}px);
        left: calc(${width/2}px - ${circleSize/2}px);
        /*background: repeating-conic-gradient(from 0deg, transparent 1deg 29deg, red 29deg 31deg);*/
    }

    #hours {
        position: absolute;
        background-color: black;
        height: ${height/4}px;
        width: 10px;
        top: calc(-${height/4}px + ${height/2}px);
        left: calc(-5px + ${width/2}px);
        transform-origin: bottom center;
        border-radius: 10px;
    }
    #minutes {
        position: absolute;
        background-color: black;
        height: ${height/3}px;
        width: 10px;
        top: calc(-${height/3}px + ${height/2}px);
        left: calc(-5px + ${width/2}px);
        transform-origin: bottom center;
        border-radius: 10px;
    }
    #seconds {
        position: absolute;
        background-color: black;
        height: ${height/2}px;
        width: 6px;
        top: calc(-${height/2}px + ${height/2}px);
        left: calc(-3px + ${width/2}px);
        transform-origin: bottom center;
        border-radius: 10px;
    }
`;
