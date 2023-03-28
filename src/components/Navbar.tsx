import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {
    //  Set the drop-down to be hidden at first (not visible)
    const [ isVisible, setIsVisible] = useState(false)

    // Set the dropdown function to be the opposite of false. Needs to be an arrow function so 
    //that it doesn't try to load as soon as the page is opened
    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className='flex items-center justify-between flex-wrap p-6 bg-slate-700'>
            <div className='flex items-center flex-shrink-0 text-yellow-300 hover:text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>
                    Best Books
                </Link>
            </div>
            <div className='block'>
                <button
                    onClick={dropDown}
                    className='flex items-center px-3 py-2 text-yellow-300 border border-yellow-300 rounded
                    hover:text-white hover:border-white'>
                        <i className="fas fa-bars"></i>
                </button>
            </div>
            { isVisible ? ( 
                <div className='w-full block flex-grow items-center text-center'>
                    <div className='text-sm lg:flex-grow'>
                        <button className='p-3 m-5 bg-yellow-200  hover:bg-white justify-center'>
                            <div>
                                <Link to='/' onClick={ clicked } className='flex text-center mt-4 lg:inline-block lg:mt-0
                                    text-black  mr-4'>Home</Link>
                            </div>
                        </button>
                        <button className='p-3 m-5 bg-yellow-200 justify-center hover:bg-white'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                    text-black mr-4'>Library</Link>
                            </div>
                        </button>
                        {/* {
                        !auth.currentUser ?

                        <Button className='p-3 m-5 bg-gray-600 hover:bg-black justify-center'>
                            <div>
                                <Link to="/" onClick={ () => { signInOnClick()}} className="flex place-items-center mt-4
                                 lg:inline-block lg:mt-0 text-white hover:text-white">
                                    Sign In
                                </Link>
                            </div>
                        </Button>
                        :
                        <>
                        
                        <Button className='p-3 m-5 bg-gray-600 hover:bg-black justify-center'>
                            <div>
                                <Link to="/" onClick={ () => { signOutOnClick()}} className="flex place-items-center mt-4
                                 lg:inline-block lg:mt-0 text-white hover:text-white">
                                    Sign Out
                                </Link>
                            </div>
                        </Button>
                        </>
                    } */}
                    </div>
                </div> 
            
            ) : ( 
            <></> 
            )
            } 
        </nav>
        )
    }

export default Navbar