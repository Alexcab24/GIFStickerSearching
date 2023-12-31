import React from 'react'

const ModalComponent = (props) => {

    

    const { activeSettings, img, title, height, width, handleDownloadClick, handleClick, onClose} = props;

    return (
        <div className='ModalContainer inset-x-0 bottom-0 left-0 animate__animated animate__fadeIn '>
            <div className='relative max-w-xl rounded-lg bg-blue-600 p-6 shadow-sm border-4 bg-gradient-to-br from-red-500 to-yellow-500'>
                <button
                    type='button'
                    onClick={onClose}
                    className='absolute -top-2 -right-2 rounded-full border border-gray-200 bg-white p-2 text-gray-400'
                >
                    <span className='sr-only'>Close</span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-3 w-3'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path
                            fill-rule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                        />
                    </svg>
                </button>

                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                    <img
                        alt='Laptop'
                        src={img}
                        className='h-full w-full rounded-xl object-cover'
                    />
                    {activeSettings.corazonVisible && (
                        <div className='corazon-animation'>
                            <img className='animate__animated animate__heartBeat drop-shadow-2xl' src='https://cdn-icons-png.flaticon.com/512/6681/6681831.png' />
                        </div>
                    )}
                    <div>
                        <h1 className="text-2xl font-bold text-white">
                            {title}
                        </h1>
                        <div className="detailsContainer">
                            <p className='font-bold text-white'>Dimensión: </p>
                            <p>{height} x {width}</p>
                            {/* botton */}
                            <div className="buttons">
                                <a
                                    className="group relative inline-block focus:outline-none focus:ring m-3"
                                    onClick={() => handleDownloadClick(img, title, format)}
                                >
                                    <span
                                        className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-900 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                                    ></span>

                                    <span
                                        className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75"
                                    >
                                        Download
                                    </span>
                                </a>
                                <button
                                    className={activeSettings.active ? ' like-button active animate__animated animate__heartBeat' : 'like-button '}
                                    onClick={() => handleClick(img)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent
