import React, {useState} from 'react';
import RegisterImage from "../../assets/images/login.svg"
import { Link } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc";
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {MdOutlineVisibility} from "react-icons/md"



const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }


  return (
    <div className='w-[100%] min-h-[80vh] md:min-h-[100vh] place-items-center flex flex-row justify-center '>
      <div className='w-[90%] 5xl:w-[60%] h-[100%] flex flex-row justify-center bg-white'>
        <div className='w-[100%] h-[100%] flex flex-row justify-center lg:justify-between items-center'>

          <div className='w-[80%] lg:w-[50%] h-[100%] flex flex-row justify-center'>
            <div className='w-[100%] h-[100%] flex flex-row justify-center '>

              <div className='w-[100%] h-[100%] flex flex-col justify-between md:justify-center'>

                <h1 className='text-2xl md:text-5xl 5xl:text-8xl font-[900] tracking-5 my-8 5xl:my-20 '>Sign Up</h1>

                <span className='text-xl 5xl:text-4xl mb-8 5xl:mb-16'>
                  Already have an account?
                  <Link to="/login" className='text-[#0000ff]'> Log in</Link>
                </span>

                <form className='flex flex-col justify-between mb-8 5xl:mb-28'>
                  <div className='flex flex-col mb-8 5xl:mb-28 text-base md:text-xl 5xl:text-4xl'>
                    <label className='text-gray-600 5xl:mb-16 '>Username</label>
                    <input 
                      type="text"
                      className='outline-none h-[30px] text-xl 5xl:text-3xl border-[3px] border-x-transparent border-t-transparent bg-transparent border-b-[#0000ff] '
                    />
                  </div>

                  <div className='flex flex-col mb-8 5xl:mb-28 text-base md:text-xl 5xl:text-4xl'>
                    <label className='text-gray-600 5xl:mb-16 '>Email address</label>
                    <input 
                      type="text"
                      className='outline-none h-[30px] text-xl 5xl:text-3xl border-[3px] border-x-transparent border-t-transparent bg-transparent border-b-[#0000ff] '
                    />
                  </div>

                  <div className='flex flex-col mb-12 text-base md:text-xl 5xl:text-4xl'>
                    <label className='text-gray-600 5xl:mb-16'>Password</label>
                    <div className='w-[100%] flex flex-row justify-between items-center border-[3px] border-x-transparent border-t-transparent bg-transparent border-b-[#0000ff] '>
                      <input 
                        type={showPassword ? "text" : "password"}
                        className='outline-none w-[90%] h-[30px] text-xl 5xl:text-3xl '
                      />

                      <div onClick={() => handleShowPassword()} className='w-[10%] text-xl md:text-3xl flex flex-row items-center justify-center '>
                        {showPassword ? <MdOutlineVisibility  /> : <AiOutlineEyeInvisible />}
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col mb-12 5xl:mb-28 text-base md:text-xl 5xl:text-4xl'>
                    <label className='text-gray-600 5xl:mb-16 '>Confirm Password</label>
                    <div className='w-[100%] flex flex-row justify-between items-center border-[3px] border-x-transparent border-t-transparent bg-transparent border-b-[#0000ff] '>
                      <input 
                        type={showConfirmPassword ? "text" : "password"}
                        className='outline-none w-[90%] h-[30px] text-xl 5xl:text-3xl '
                      />

                      <div onClick={() => handleShowConfirmPassword()} className='w-[10%] text-xl md:text-3xl  flex flex-row items-center justify-center '>
                        {showConfirmPassword ? <MdOutlineVisibility /> : <AiOutlineEyeInvisible />}
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col mb-20 text-base md:text-xl 5xl:text-4xl'>
                    <label className=' mb-8 5xl:mb-16 text-gray-600 '>What kind of account are you creating?</label>
                    <select 
                      name="selectList" 
                      id="selectList" 
                      required
                      className='outline-none h-[30px] text-xl 5xl:text-3xl border-[3px] border-x-transparent border-t-transparent bg-transparent border-b-[#0000ff] '
                    >
                      <option value="" >Select account</option>   
                      <option value="hunter">Hunter</option>
                      <option value="agent">Agent</option>
                      <option value="home owner">Home Owner</option>
                    </select>
                  </div>


                  <div className='w-[100%] flex flex-row justify-center md:justify-end '>
                    <button className='w-[80%] md:w-[60%] lg:w-[40%] py-[3px] md:py-4 bg-[#0000ff] rounded-[40px] text-white text-base md:text-2xl '>
                      Sign up
                    </button>
                  </div>

                </form>

                <div className='flex flex-row items-center'>
                  <div className='flex-1 h-[1px] bg-black ' />
                  <div>
                    <p className='w-[40px] text-center '>Or</p>
                  </div>
                  <div className='flex-1 h-[1px] bg-black ' />
                </div>

                <button className='py-[3px] md:py-4 flex flex-row justify-evenly items-center border-2 border-gray-300  rounded-[40px] text-black text-base md:text-2xl mt-12 mb-20'>
                  <FcGoogle /> Google
                </button>
              </div>
            </div>
          </div>


          <div className='w-[50%] h-[100%] hidden lg:flex flex-row justify-center '>
            <img src={RegisterImage} className="w-[90%] h-[100%]" alt="register"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register

