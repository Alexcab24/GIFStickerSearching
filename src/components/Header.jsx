import React from 'react'

const Header = ({selectedOption, seacher, handleOptionChange}) => {

    return (
        <header aria-label="Site Header" className="menuHeader bg-gray-100 fixed top-0 w-full z-50 rounded-b-xl  ">
            <div
                className="margen flex h-16 max-w-screen-xl items-center"
            >
                <div className="logo">

                    <img src="https://i.ibb.co/nzjHRPk/LOGO2.png" alt="LOGO2" border="0" className="max-w-[150px] " />
                </div>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Site Nav" >
                        <ul className="flex items-center gap-6 text-sm">


                            <div className="relative mt-1 rounded-xl mx-3">

                                <input type="text" name="search" id="search" placeholder="Search" onChange={seacher} />
                                <div className="absolute inset-y-0 right-0 flex items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl rounded-xl ">
                                    <label htmlFor="currency" className="sr-only">Currency</label>
                                    <select value={selectedOption} onChange={handleOptionChange} id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-black-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-white font-bold ">
                                        <option value="gifs" >GIF</option>
                                        <option value="stickers" >Sticker</option>
                                    </select>
                                </div>
                            </div>

                            <div className="social">
                                <div className="github hidden lg:block">
                                    <a className="block text-teal-600" href="https://github.com/Alexcab24">
                                        <span className="sr-only">Github</span>
                                        <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="twitter" />
                                    </a>
                                </div>


                                <div className="twitter hidden lg:block">
                                    <a className="block text-teal-600" href="https://twitter.com/ale_jsx">
                                        <span className="sr-only">Twitter</span>
                                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter" />
                                    </a>
                                </div>


                            </div>
                        </ul>
                    </nav>

                </div>
            </div>

        </header>
    )
}

export default Header
