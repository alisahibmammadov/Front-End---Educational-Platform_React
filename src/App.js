import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Coursesgrids from './components/Coursesgrids';
import Singlecourse from './components/Singlecourse';
import Classicevents from './components/Classicevents';
import Calendarevents from './components/Calendarevents';
import Singleevent from './components/Singleevent';
import Aboutus from './components/Aboutus';
import Ourteacherpage from './components/Ourteacherpage';
import Singleteacherpage from './components/Singleteacherpage';
import Gallery4columnspage from './components/Gallery4columnspage';
import Gallery3columnspage from './components/Gallery3columnspage';
import Classicnews from './components/Classicnews';
import Gridnews from './components/Gridnews';
import Singlepost from './components/Singlepost';
import Courselists from './components/Courselists';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
      <Button />
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/course-grids' element={<Coursesgrids />} />
        <Route path='/course-list-page' element={<Courselists />} />
        <Route path='/single-course' element={<Singlecourse />} />
        <Route path='/classic-events' element={<Classicevents />} />
        <Route path='/calendar-events' element={<Calendarevents />} />
        <Route path='/single-event' element={<Singleevent />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/our-teacher' element={<Ourteacherpage />} />
        <Route path='/single-teacher' element={<Singleteacherpage />} />
        <Route path='/gallery-4-columns' element={<Gallery4columnspage />} />
        <Route path='/gallery-3-columns' element={<Gallery3columnspage />} />
        <Route path='/classic-news' element={<Classicnews />} />
        <Route path='/grid-news' element={<Gridnews />} />
        <Route path='/single-post' element={<Singlepost />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  </>
 
  );
}

export default App;
