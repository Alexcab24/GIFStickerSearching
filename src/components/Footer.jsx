import React from 'react'

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-100 rounded-t-xl">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-center text-teal-600 sm:justify-start">
          <div className="socialFooter  ">
            <div className="github ">
              <a className="block text-teal-600" href="https://github.com/Alexcab24">
                <span className="sr-only">Github</span>
                <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="twitter" />
              </a>
            </div>


            <div className="twitter ">
              <a className="block text-teal-600" href="https://twitter.com/ale_jsx">
                <span className="sr-only">Twitter</span>
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter" />
              </a>
            </div>


          </div>
        </div>
        <div className="detailsFooter">
          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Alex Cabral.
          </p>
          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  </footer>
  )
}

export default Footer
