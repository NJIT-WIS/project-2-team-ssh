import '../styles/global.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/courses' component={Courses} />
        <Route path='/about' component={About} />


      </Routes>
    </Router>
  );
}

export default App;