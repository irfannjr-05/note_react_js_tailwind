
import { Route, Routes } from 'react-router-dom'
import './App.css'

import ResumeGenerator from '../pages/ResumeGenerator'
import AllDownloads from '../pages/AllDownloads'
import AllResumes from '../pages/AllResumes'
import Home from '../pages/Home'
import HomeMainpage from '../pages/HomeMainpage'
import SinglePage from '../pages/SinglePage'

import Header from '../components/Header'
import Footer from '../components/Footer'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<ResumeGenerator />} />
        <Route path="/form" element={<HomeMainpage />} />
        <Route path="/downloads" element={<AllDownloads />} />
        <Route path="/resumes" element={<AllResumes />} />
        <Route path="/:id/resume" element={<SinglePage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
