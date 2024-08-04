'use client'

import CountUp from "react-countup"

declare type AnimatedCounterProps = {
    amount:number
}
const AnimatedCounter:React.FC<AnimatedCounterProps> = ({
    amount
}) => {
  return (
    <>
        <CountUp
            decimal=","
            decimals={2}
            prefix='$'
            end={amount}
        />
    </>
  )
}

export default AnimatedCounter