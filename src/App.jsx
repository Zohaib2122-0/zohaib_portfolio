
import { Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { ContactUs } from './components/Contact'
import Services from './components/Services'
import Layout from './components/Layout'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App