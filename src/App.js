import "./App.css";
import About from './components/About';
import Nav from './components/Navbar';
import Intro from './components/Intro';
import Skill from './components/Skill';
import Project from './components/Project'
import Foo from './components/Footer';

function App() {
  return (
    
    <div className="App">
    
     <Nav className="items"/>
     <Intro className="items"/>
     <About className="items"/>
     {/* //<div Styles={{display:"flex",width:"100%",margin:"30rem",paddingLeft:"300rem",justifycontent:"center"}}> */}
     <Skill className="items2" />
     {/* </div> */}
     <Project className="items"/>
     <Foo className="items"/>
    </div>
  );
}

export default App;
