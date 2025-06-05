
import { Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { ContactUs } from './components/Contact'
import Services from './components/Services'
import Layout from './components/Layout'
import Home from './components/Home'
import MessagesList from './components/Messageslist'
import Uploadproject from './components/uploadporject'
import ProjectsPage from './components/projectpage'
import Projectsetup from './components/Projectsetup'

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Uploadproject />} />
          <Route path='/portfolio' element={<ProjectsPage />} />
          <Route path='/portfolio/projects' element={<Projectsetup />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/queries' element={<MessagesList/>} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App