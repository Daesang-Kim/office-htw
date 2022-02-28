import Box from '@mui/material/Box';
import * as React from 'react';
import {
    Container,
    GoogleTimerContainer,
} from './GoogleTimer.styled';

const GoogleTimer = () => {
    const [style, setStyle] = React.useState({
        hours: 'rotate(0deg)',
        minutes: 'rotate(0deg)',
        seconds: 'rotate(0deg)',
    })
    React.useEffect(() => {
        setInterval(() => {
            const d = new Date();
            const hr = d.getHours();
            const min = d.getMinutes();
            const sec = d.getSeconds();
            const hrRotation = 30 * hr + min / 2;
            const minRotation = 6 * min;
            const secRotation = 6 * sec;

            // hours.style.transform = `rotate(${hrRotation}deg)`;
            // minutes.style.transform = `rotate(${minRotation}deg)`;
            // seconds.style.transform = `rotate(${secRotation}deg)`;
            setStyle({
                hours: `rotate(${hrRotation}deg)`,
                minutes: `rotate(${minRotation}deg)`,
                seconds: `rotate(${secRotation}deg)`,
            });
        }, 1000);
    }, [])

    return (
        <Box>
            <div>GoogleTimer</div>
            <GoogleTimerContainer>
                <div id="clock">
                    <div />
                </div>
            </GoogleTimerContainer>
            <div>현재 시간</div>
            <Container>
                <div id="clock">
                    <div id="hours" style={{ transform: style.hours }} />
                    <div id="minutes" style={{ transform: style.minutes }} />
                    <div id="seconds" style={{ transform: style.seconds }} />
                </div>
            </Container>
        </Box>
    )
};

export default GoogleTimer;