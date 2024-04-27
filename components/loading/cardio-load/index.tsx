import { cardio } from 'ldrs'
import { useEffect } from 'react'

const CardioLoad = () => {

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
    ></l-cardio>
  </>
}

export default CardioLoad;