import { ping } from 'ldrs'
import { useEffect } from 'react'

const PingLoad = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      ping.register();
    }
  }, []);

  return <>
    <l-ping
      size="45"
      speed="2" 
      color="black" 
    ></l-ping>
  </>
}

export default PingLoad;
