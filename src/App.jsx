import { useState } from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { About, Careers, Contact, Home, Process, Services, Works, NotFound } from './pages' 
import Layout from './layout/Layout'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Layout/>}>
      <Route index  element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="careers" element={<Careers />} />
      <Route path="contact" element={<Contact />} />
      <Route path="process" element={<Process />} />
      <Route path="services" element={<Services />} />
      <Route path="works" element={<Works />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
