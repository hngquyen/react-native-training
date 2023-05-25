import {useEffect, useState} from 'react';

interface Countdown {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

const useCountdown = (epochTime: number): Countdown => {
  const [countdown, setCountdown] = useState<Countdown>({
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Math.floor(Date.now() / 1000);
      const timeLeft = epochTime - currentTime;

      if (timeLeft <= 0) {
        setCountdown({
          year: 0,
          month: 0,
          day: 0,
          hour: 0,
          minute: 0,
          second: 0,
        });
        clearInterval(interval);
      } else {
        const year = Math.floor(timeLeft / (365 * 24 * 60 * 60));
        const month = Math.floor(
          (timeLeft % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60),
        );
        const day = Math.floor(
          (timeLeft % (30 * 24 * 60 * 60)) / (24 * 60 * 60),
        );
        const hour = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
        const minute = Math.floor((timeLeft % (60 * 60)) / 60);
        const second = Math.floor(timeLeft % 60);

        setCountdown({year, month, day, hour, minute, second});
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [epochTime]);

  return countdown;
};

export default useCountdown;
