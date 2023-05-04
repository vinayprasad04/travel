import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const DATE = new Date(2023, 7, 5, 10, 30, 0);

const UrgeWithPleasureComponent = () => {
    const [timerDuration, setTimerDuration] = useState();

    const timerProps = {
        isPlaying: true,
        duration: timerDuration,
        colors: "red",
        strokeWidth: 5,
        trailStrokeWidth: 2,
        size: 110,
    };

    useEffect(() => {
        const d = new Date();
        setTimerDuration(DATE - d);
        //console.log(Math.floor(timerDuration/(1000*24*60*60)))
    }, []);

    return (
        <div style={{ display: "flex", gap: "2.5rem" }}>
            <CountdownCircleTimer {...timerProps} colors={"#ff7300"}>
                {({ remainingTime }) => (
                    <div className="timer-content">
                        Days{" "}
                        <span className="timer-number">
                            {Math.floor(remainingTime / (1000 * 24 * 60 * 60))}
                        </span>
                    </div>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer {...timerProps} colors={"#49a4f8"}>
                {({ remainingTime }) => (
                    <div className="timer-content">
                        Hours <br />
                        <span className="timer-number">
                            {Math.floor(remainingTime)}
                        </span>
                    </div>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer {...timerProps} colors={"yellow"}>
                {({ remainingTime }) => (
                    <div className="timer-content">
                        Minutes <br />
                        <span className="timer-number">{remainingTime}</span>
                    </div>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={"#ff268b98"}
                duration={60}
            >
                {({ remainingTime }) => (
                    <div className="timer-content">
                        Seconds <br />
                        <span className="timer-number">{remainingTime}</span>
                    </div>
                )}
            </CountdownCircleTimer>
        </div>
    );
};

export default UrgeWithPleasureComponent;
