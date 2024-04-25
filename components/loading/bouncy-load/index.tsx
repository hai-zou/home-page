import { bouncy } from 'ldrs'
import { useEffect } from 'react'

const BouncyLoad = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      bouncy.register();
    }
  }, []);

  return <>
    <l-bouncy
      size="45"
      speed="1.75" 
      color="black" 
    ></l-bouncy>
  </>
}

export default BouncyLoad;