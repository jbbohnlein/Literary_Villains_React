//  The Modal is for giving and updating ratings on books
// It should only display the user's current rating or no rating, and they can change it

import React from 'react'
import AllInputForm from '../Forms/AllInputForm';


type Props = {
    // id?: string[];
    opentest: boolean;
    onClose: () => void;
}

const ModalAll = ( props: Props ) => {
    if ( !props.opentest ) return (<></>);
    return (
        <div 
            // click anywhere (other than the modal) and the modal will close
            onClick={ props.onClose } 
            className='fixed w-full flex overflow-auto z-1 
            justify-center align-middle bg-gray-300 bg-opacity-25'
        >
            <div
                className='max-w-600px w-2/5 fixed flex z-1 mt-6 bg-slate shadow-xl rounded'
                // Need to stop propogation so that clicking in the modal doesn't close it
                onClick={(e) => {
                    e.stopPropagation()
                }}            
            >
                <div className="w-full flex flex-col">
                        <div className="flex flex-row space-apart">
                            <p className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                                onClick={props.onClose}>
                                    {/* Use a fontawesome X here instead of just the X */}
                                    X
                            </p>
                        </div>
                    <div className="flex flex-col mb-3 item-center text-center mt-3 p-2">
                        <AllInputForm />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalAll