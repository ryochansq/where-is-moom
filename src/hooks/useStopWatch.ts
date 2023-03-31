import { useEffect, useState } from "react";

export const useStopWatch = (seconds: number) => {
  const [countTime, setCountTime] = useState<number>(seconds);

  useEffect(() => {
    const countDownInterval = setInterval(() => {
      if (countTime === -1) clearInterval(countDownInterval);
      if (countTime >= 0) setCountTime(countTime - 1);
    }, 1000);
    return () => clearInterval(countDownInterval);
  }, [countTime]);

  return { countTime };
};
