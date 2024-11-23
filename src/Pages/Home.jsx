/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Loader from '../Components/Loader'
import Island from '../models/Island'
import SkyModel from '../models/SkyModel' 
import Bird from '../models/BirdModel'
import Plane from '../models/Plane'
import Popupbar from '../Components/Navbar/Popupbar'
import useAdjustIslandForScreenSize from '../Components/Size/IslandSize'


const Home = () => {

  const [currentStage, setCurrentStage] = useState(4);
  const [isRotating, setIsRotating] = useState(false);
  const { ScreenPosition, ScreenScale, rotation } = useAdjustIslandForScreenSize();

  // const adjustIslandForScreenSize = () => {
  //   let ScreenScale = null;
  //   let ScreenPosition = [0, -9.5, -43];
  //   let rotation = [0.1, 4.7, 0];

  //   if(window.innerWidth < 768)
  //     ScreenScale = [0.2, 0.2, 0.2];
  //   else
  //     ScreenScale = [1, 1, 1];

  //   return [ScreenPosition, ScreenScale, rotation];
  // }

  const adjustPlaneForScreenSize = () => {
    let ScreenScale = [3, 3, 3];
    let ScreenPosition = [0, -4, -4];

    if(window.innerWidth < 768)
    {
      ScreenScale = [1.5, 1.5, 1.5];
      ScreenPosition = [0, -1.5, 0]
    }  
    
    return [ScreenPosition, ScreenScale];
  }

  const [isPlanePosition, isPlaneScale] = adjustPlaneForScreenSize();
  // const [islandPosition, islandScale, islandRotation] = adjustIslandForScreenSize();

  return (
    <div className='w-full h-screen relative'>
      <div className='w-full h-screen translate-y-[-2px]'>
      
        <div 
          style={{
            transform: window.innerWidth < 700 ? "scale(2)" : "scale(1)"
          }}
          className='absolute top-28 left-0 ${} right-0 z-10 flex items-center justify-center'>
          {
            currentStage && <Popupbar currentStage={currentStage} />
          }
        </div>

        <Canvas 
          className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "curson-grab"} `}
          camera={{near:0.1, far:1000}}
        >
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[1, 10, 1]} intensity={1.2} />
            <ambientLight intensity={0.2}/>
            <hemisphereLight skycolor="#0957f3" groundColor="#dcdcea" intensity={1.2}/>

            
            <Bird/>

            <SkyModel 
              isRotating={isRotating}
            /> 

            

            <Island 
              currentStage={currentStage}
              setCurrentStage={setCurrentStage}
              position={ScreenPosition} 
              scale={ScreenScale} 
              rotation={rotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              className="translate-x-[50px]"
              />

            <Plane
              isRotating = {isRotating}
              position = {isPlanePosition}
              scale = {isPlaneScale}
              rotation = {[0, 20, 0]}
            />

          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Home;
