"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const AnimatedCounter = ({ value, suffix = "", prefix = "", decimals = 0 }: AnimatedCounterProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <span ref={ref} className="stat-number">
      {prefix}
      {inView ? (
        <CountUp
          end={value}
          duration={2.5}
          decimals={decimals}
          useEasing={true}
        />
      ) : (
        "0"
      )}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
