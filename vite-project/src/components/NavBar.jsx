import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { ReactTyped } from "react-typed";
// import { Link } from "react-router-dom"



const NavBar = () => {
    const [nav, setNav] = useState(true)
    const textos = ["Sinta na pele.", "o preconceito", "o desrespeito", "a discriminação."]
    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <div className='flex justify-between items-center h-24 mx-auto px-4 bg-neutral max-w-[1240px] border-b-2 '>
            <h1 className='w-full text-3xl font-medium'>
                <ReactTyped
                    strings={textos}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                ></ReactTyped>
            </h1>
            <ul className='hidden md:flex gap-5 w-full justify-end'>
                {/* <li className='rounded-md bg-teal-600 px-8 py-2 text-sm font-medium text-white shadow flex items-center'><Link to="/" >Registre-se</Link></li>
                <li className='rounded-md bg-gray-100 px-8 py-2 text-sm font-medium text-teal-600 shadow flex items-center'><Link to="/verPerfil" >Login</Link></li> */}
            </ul>
            <div onClick={handleNav} className='block md:hidden '>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-neutral z-10" : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"}>
                <h1 className='w-full text-3xl font-bold  m-4'>sinta na pele!</h1>
                <ul className='p-4 uppercase '>
                    {/* <li className='p-4 border-b border-b-gray-600'><Link to="/">Home</Link></li>
                    <li className='p-4 border-b border-b-gray-600'><Link to="/verPerfil">Ver perfil</Link></li> */}
                </ul>
            </div>
        </div>
    )
}

export default NavBar