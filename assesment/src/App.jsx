import React from 'react'
import Navsection from './Comps/Navsection'
import Bottompart from './Comps/Bottompart'
import Footerpart from './Comps/Footerpart'
import Middlesection from './Comps/Middlesection'

const App = () => {
  return (
    <div>
      <Navsection/>
      <Middlesection/>
      <Bottompart/>
      <Footerpart />
    </div>
  )
}

export default App
