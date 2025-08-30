import { useEffect, useState, type JSX } from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";

import bellStart from './bell-start.mp3'
import bellFinish from './bell-finish.mp3'

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (working) document.body.classList.remove("working");
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play();
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);

    if (long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }

    audioStopWorking.play();
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>

      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="work" onClick={() => configureWork()}></Button>
        <Button text="rest" onClick={() => configureRest(false)}></Button>
        <Button
          className={!working && !resting ? "hidden" : ""}
          text={timeCounting ? "Pause" : "Play"}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
      </div>
      <div className="details">
        <p>Testando: aslkdfjçlaksdjflçkasjdf</p>
        <p>Testando: aslkdfjçlaksdjflçkasjdf</p>
        <p>Testando: aslkdfjçlaksdjflçkasjdf</p>
        <p>Testando: aslkdfjçlaksdjflçkasjdf</p>
        <p>Testando: aslkdfjçlaksdjflçkasjdf</p>
        <p>Testando: aslkdfjçlaksdjflçkasjdf</p>
      </div>
    </div>
  );
}
