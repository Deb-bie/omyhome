import React, {useEffect, useRef, useState } from 'react'
import {AiOutlineLine} from 'react-icons/ai';
import { animated, useSpring } from "react-spring";

import Agents from "../../assets/images/agents.jpg";
import Hunters from "../../assets/images/hunters.jpg";
import Owners from "../../assets/images/home-owners.jpg";



function useIntersectionObserver(
  elementRef, { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }
) {
  const [entry, setEntry] = useState();
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const updateEntry = ([entry]) => {setEntry(entry)};
  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);
  return entry;
}



const SecondHero = () => {

  const HuntersRef = useRef();
  const hunterRef = useIntersectionObserver(HuntersRef, {freezeOnceVisible: false});
  const huntersStyle = useSpring({
    config: { duration: 900 },
    from: { opacity: 0, right: "-500px" },
    to: {
      opacity: hunterRef?.isIntersecting ? 1 : 0,
      right: hunterRef?.isIntersecting ? "0px" : "-500px"
    }
  });

  const OwnersRef = useRef();
  const ownerRef = useIntersectionObserver(OwnersRef, {freezeOnceVisible: false});
  const ownersStyle = useSpring({
    config: { duration: 900 },
    from: { opacity: 0, top: "-500px" },
    to: {
      opacity: ownerRef?.isIntersecting ? 1 : 0,
      top: ownerRef?.isIntersecting ? "0px" : "-500px"
    }
  });

  const AgentsRef = useRef();
  const agentRef = useIntersectionObserver(AgentsRef, {freezeOnceVisible: false});
  const agentsStyle = useSpring({
    config: { duration: 900 },
    from: { opacity: 0, left: "-500px" },
    to: {
      opacity: agentRef?.isIntersecting ? 1 : 0,
      left: agentRef?.isIntersecting ? "0px" : "-500px"
    }
  });



  return (
    <div className='w-[100%] h-[100%] flex flex-row justify-center overflow-hidden relative bottom-0'>
      <div className='w-[90%] h-[100%] flex flex-col items-center gap-4 '>

        <div className='w-[100%] h-[100%] flex flex-col gap-12  5xl:pt-[5vw]  '>

          <div className='w-[100%] h-[100%] flex flex-col md:flex-row justify-between relative gap-4  '>
            <div className='w-[90%] md:w-[40%] text-[40px] md:text-[70px] text-center text-[initial] '>Built to ease the process of viewing a property</div>

            <div className='w-[100%] md:w-[40%] flex flex-row justify-center md:justify-end relative '>
              <animated.div style={huntersStyle} className='w-[300px] 2xl:w-[400px] 5xl:w-[20vw] h-[500px] 2xl:h-[700px] 5xl:h-[30vw] flex flex-col justify-between relative'>
                <img src={Hunters} alt="Hunters" className='w-[100%] h-[80%] object-cover ' />

                <div className=' w-[80%] flex flex-row justify-start items-center text-3xl 5xl:text-[3vw] 5xl:h-[5%]'>
                  <span><AiOutlineLine /></span>
                  &nbsp; &nbsp;
                  <span>Hunters</span>
                </div>

                <div className='w-[80%] 5xl:w-[90%] 5xl:h-[5%] 5xl:text-[1vw] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
              </animated.div>

              <div ref={HuntersRef} />
            </div>
          </div>

          <div className='w-[100%] flex flex-row justify-center relative lg:-top-[340px] relative '>
            <animated.div style={ownersStyle} className='w-[300px] 2xl:w-[400px] 5xl:w-[20vw] h-[500px] 2xl:h-[700px] 5xl:h-[30vw] flex flex-col justify-between relative'>
              <img src={Owners} alt="Owners" className='w-[100%] h-[80%] object-cover ' />

              <div className=' w-[100%] flex flex-row justify-start items-center text-2xl 5xl:text-[2vw] 5xl:h-[5%]'>
                <span><AiOutlineLine /></span>
                &nbsp; &nbsp;
                <span>Home Owners</span>
              </div>

              <div className='w-[80%] 5xl:w-[90%] 5xl:h-[5%] 5xl:text-[1vw] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
            </animated.div>

            <div ref={OwnersRef} />
          </div>

          <div className='w-[100%] flex flex-row justify-center md:justify-start relative lg:-top-[540px] relative'>
            <animated.div style={agentsStyle} className='w-[300px] 2xl:w-[400px] 5xl:w-[20vw] h-[500px] 2xl:h-[700px] 5xl:h-[30vw] flex flex-col justify-between relative'>
              <img src={Agents} alt="Agents" className='w-[100%] h-[80%] object-cover ' />

              <div className=' w-[80%] flex flex-row justify-start items-center text-3xl 5xl:text-[3vw] 5xl:h-[5%]'>
                <span><AiOutlineLine /></span>
                &nbsp; &nbsp;
                <span>Agents</span>
              </div>

              <div className='w-[80%] 5xl:w-[90%] 5xl:h-[5%] 5xl:text-[1vw] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>

            </animated.div>

            <div ref={AgentsRef} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default SecondHero
