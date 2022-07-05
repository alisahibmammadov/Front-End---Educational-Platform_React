import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coursesgrids from './components/Coursesgrids';
import Courseslist from './components/Courseslist';
import Singlecourse from './components/Singlecourse';
import Classicevents from './components/Classicevents';
import Calendarevents from './components/Calendarevents';
import Singleevent from './components/Singleevent';


function App() {
  return (
    <>
      <BrowserRouter>
      <Button />
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/course-grids' element={<Coursesgrids />} />
        <Route path='/course-list' element={<Courseslist />} />
        <Route path='/single-course' element={<Singlecourse />} />
        <Route path='/classic-events' element={<Classicevents />} />
        <Route path='/calendar-events' element={<Calendarevents />} />
        <Route path='/single-event' element={<Singleevent />} />
        <Route path=''
      </Routes>
      <Footer />
      </BrowserRouter>
  </>
 
  );
}

export default App;
