/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useRef } from "react";
import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Canvas } from "@react-three/fiber";
import Foxmodel from "../models/Foxmodel";
import  Loader  from "../Components/Loader";
import SecondFoxmodel from '../models/SecondFoxmodel'
import { NavLink } from "react-router-dom";

const Contact = () => {

  
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [wolfscale, Setwolfscale] = useState([12, 15, 18]);
  const [wolfposition, Setwolfposition] = useState([-0.6, -5, -7]);
  const [wolfrotation, Setwolfrotation] = useState([0, -0.05, 0.1]);


  const [loading, setLoading] = useState(false);
  const formref = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState('04_Idle_Armature_0')

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }
  
  const handleFocus = () => {

    Setwolfposition([-0.6, -7.5, -7])
    setCurrentAnimation('02_walk_Armature_0');
  }
  
  const handleBlur = () => {
    Setwolfposition([-0.6, -5, -7])
    setCurrentAnimation('04_Idle_Armature_0');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentAnimation('01_Run_Armature_0');
    setLoading(true);
    
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TAMPLATE_ID,
      {
        form_name: form.name,
        form_email: form.email,
        message: form.message
      },
      import.meta.env.VITE_PK
    )
    .then(() => {
      setLoading(false);
      

      setTimeout(() => {
        Setwolfposition([-0.6, -5, -7])
        setCurrentAnimation('04_Idle_Armature_0');   
        setForm({
          name: '',
          email: '',
          message: ''
        });       
      }, 3000)

    })
    .catch((error) => {
      setLoading(false);
      Setwolfposition([-0.6, -5, -7])
      setCurrentAnimation('04_Idle_Armature_0');
      console.log("Error during send mail in contact: ", error);
    })
  }
  
  
  let ImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-F5wcuq3s7jsZ_MhwgdMIDG1ICDzN1e3CQ&s'
  
  return (
    <div
      style={{
        backgroundImage: `url(${ImageUrl})`,
        backgroundSize: 'cover',       // Ensures the image covers the entire div
        backgroundPosition: 'center',   // Centers the image within the div
        backgroundRepeat: 'no-repeat'   // Prevents tiling of the image
      }}    

      className="h-screen w-screen"
    >

      <div className="ml-[50px] translate-y-[30px]">
        <NavLink to="/" >
            <a href="#_" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-1 py-2 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Home</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
        </NavLink>
      </div>

      <div className="flex flex-row gap-5 mt-[-50px]">

        

        <div className="border-2 border-black rounded-xl w-[30%] shadow-xl
          bg-gradient-to-r from-indigo-300 from-10% via-sky-400 via-30% to-emerald-400 to-90%
          ml-[20%] mt-[8%] py-8 px-8 flex flex-col gap-8"
        >
          <h1 className="font-bold text-3xl text-blue-800">Get in Touch</h1>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-1">
              Name
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="border-[1.2px] border-black px-2 rounded-xl py-1 shadow-xl"
              />
            </label>

            <label className="flex flex-col gap-1">
              Name
              <input
                type="text"
                placeholder="abc@gmail.com"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="border-[1.2px] border-black px-2 rounded-xl py-1 shadow-xl"
              />
            </label>

            <label className="flex flex-col gap-1">
              message
              <textarea
                type="text"
                placeholder="Enter your Message"
                name="message"
                rows={5}
                cols={15}
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="border-[1.2px] border-black px-2 rounded-xl py-1 shadow-xl"
              />
            </label>

            <button
              type="submit"
              className="px-2 py-1 bg-gray-500 text-white font-bold text-xl rounded-2xl hover:scale-[90%] 
                transition-all duration-300 shadow-xl hover:bg-yellow-500 hover:text-blue-600"
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={loading}
            >
              {
                loading ? 'Sending' : 'Submit' 
              }
            </button>
          </form>
        </div>

        <div className=" h-[500px] w-[500px]">
          <Canvas
            camera={{
              position: [5, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000
            }}
          >

          <directionalLight intensity={5} position={[0, 0, 1]} />
          <directionalLight intensity={1} position={[10, 1, 5]} color="pink" castShadow />
          <pointLight intensity={1} position={[-2, 5, 3]} color="blue" />
          <ambientLight intensity={0.2} color="#ffffff" />
          <Suspense fallback={<Loader/>}>
            {/* <Foxmodel
              position={[1.5, -1, -1.5]}
              rotation={[12.6, -0.90, 0]}
              scale={[0.8, 0.8, 0.8]}
              currentAnimation = {currentAnimation}
            /> */}


            <SecondFoxmodel
              scale = {wolfscale}
              position = {wolfposition}
              rotation = {wolfrotation}
              currentAnimation = {currentAnimation}
            />
            
          </Suspense>

          </Canvas>
        </div>

      </div>
    </div>
  )
}

export default Contact
