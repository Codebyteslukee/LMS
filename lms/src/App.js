import "./App.css"
import Header from "./components/common/header/Header"
import { Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
import About from "./components/about/About"
import CoursesHome from "./components/allcourse/CoursesHome"
import Contact from "./components/contact/Contact"
import Blog from "./components/blog/Blog"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
function App() {
  return (
    <>      
      
      <Header />
      <Switch>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/courses' component={CoursesHome}/>
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />

      </Switch>

  </>
  )
}



export default App