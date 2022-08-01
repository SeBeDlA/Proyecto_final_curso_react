import React from 'react'

export default function Paginacion({paginasTotales, actual}) {
  
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
        <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-end sm:justify-end">
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            {paginasTotales > 0 && (<a href="#" aria-current="page" className={`z-1 relative inline-flex items-center px-4 py-2 border text-sm font-medium ${(actual == 1)?'bg-indigo-50 text-indigo-600':'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}> 1 </a>)}
            {actual > 3 && (<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>)}
            {paginasTotales > 2 && actual < 4 && (<a href="#" className={`${(actual == 2)?'bg-indigo-50 text-indigo-600':'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}> 2 </a>)}
            {paginasTotales > 3 && actual < 4 && (<a href="#" className={`${(actual == 3)?'bg-indigo-50 text-indigo-600':'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'} hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium`}> 3 </a>)}
            {actual == 3 && (<a href="#" className={`bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium`}> 4 </a>)}
            {actual > 3 && (<a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> {parseInt(actual)-1} </a>)}
            {actual > 3 && actual < paginasTotales && (<a href="#" className="bg-indigo-50 text-indigo-600 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> {parseInt(actual)} </a>)}
            {actual > 3 && actual < paginasTotales - 1 && (<a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> {parseInt(actual)+1} </a>)}
            {paginasTotales > 5 && actual < paginasTotales - 2 &&(<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>)}
            <a href="#" className={`${(actual == paginasTotales)?'bg-indigo-50 text-indigo-600':'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}> {paginasTotales} </a>
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
