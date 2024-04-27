import { cardio } from 'ldrs'
import { useEffect } from 'react'

const CardioLoad = (props: JSX.IntrinsicElements['l-cardio']) => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      cardio.register();
    }
  }, []);

  return <>
    <l-cardio
      size="50"
      stroke="4"
      speed="2"
      color="black"
      {...props}
    ></l-cardio>
  </>
}

export default CardioLoad;