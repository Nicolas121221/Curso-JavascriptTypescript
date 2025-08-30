import { type JSX } from "react";
import { PomodoroTimer } from "./components/pomodoro-timer";

function App(): JSX.Element {
  return (
    <main className="container">
      <PomodoroTimer
        pomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
    </main>
  );
}

export default App;
