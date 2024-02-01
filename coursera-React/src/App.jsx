import React from 'react'
import ExptTheme from './ExptTheme'
import Goals from './Goals'

const App = () => {
  return (
    // <ExptTheme />
    // <div>hello</div>
    <div className='h-screen flex items-center justify-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black '>
      <Goals />
    </div>
  )
}

export default App