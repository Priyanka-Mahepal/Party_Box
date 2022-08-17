import './App.css';
// import { BrowserRouter,Route , Routes } from 'react-router-dom';
import  Navbar  from './components/Navbar/Navbar.jsx';
import Menubar from './components/Menubar/Menubar';
import GiftBox from './components/GiftBox/GiftBox';
import CategoryBox from './components/CategoryBox/CategoryBox';
import BrandedBox from './components/BrandedBox/BrandedBox';
import EventBox from './components/EventBox/EventBox';
import PartyBox from './components/PartyBox/PartyBox';
import PicnicBox from './components/PicnicBox/PicnicBox';
import Footer from './components/Footer/Footer';

const App =() => {
  return (
    // <BrowserRouter>
		// 		<div className='App'>
		// 		<Navbar/>
    //     <Menubar/>
		// 			<Routes>
    //         <Route index path='/' element={< dddd/>} />
		// 				<Route index path='/giftbox' element={<GiftBox />} />
    //         <Route  index path='/categoryBox' element={<CategoryBox />} />
		// 				{/* <Route path='/contact' element={<BrandedBox />} /> */}
		// 				{/* <Route path='/about' element={<About />} /> */}
		// 			</Routes>
		// 		</div>
		// 	</BrowserRouter>
    <div className=' App'>
    <Navbar/>
    <Menubar/>
    <GiftBox/>
    <CategoryBox/>
    <BrandedBox/>
    <EventBox/>
    <PartyBox/>
    <PicnicBox/>
    <Footer/>
    </div>
  );
}

export default App;
