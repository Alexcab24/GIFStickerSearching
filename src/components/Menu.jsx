import React, { useState } from 'react'
import { Random } from './randomComponents/Random';
import { Liked } from './likedComponents/Liked';



export const Menu = (props) => {
    const { selectedOption } = props;

    const [view, setView] = useState(true)
    const [viewLikedState, setViewLikedState] = useState(false)


    const viewTrending = () => {
        setView(true)
        setViewLikedState(false)
    }

    const viewLiked = () => {
        setView(false)
        setViewLikedState(true);
    }
    return (
        <>
            <div className='menuContainer'>
                <div className='menuList '>
                    <ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
                        <li className={`mr-2 ${view ? 'bg-blue-800 rounded-xl animate__animated animate__pulse' : ''}`}>
                            <a onClick={viewTrending} className="inline-flex p-4 ">
                                <img src='https://cdn-icons-png.flaticon.com/512/2550/2550440.png' alt='' />
                            </a>
                        </li>
                        <li className={`mr-2 ${viewLikedState ? 'bg-blue-800 rounded-xl animate__animated animate__pulse' : ''}`}>
                            <a onClick={viewLiked} className='inline-flex p-4' aria-current='page'>
                                <img src='https://cdn-icons-png.flaticon.com/512/6681/6681831.png' alt='' />
                            </a>
                        </li>
                    </ul>
                </div>
                {view ?
                    <Random selectedOption={selectedOption} />
                    :
                    <Liked selectedOption={selectedOption} />
                }
            </div>
        </>
    )
}
