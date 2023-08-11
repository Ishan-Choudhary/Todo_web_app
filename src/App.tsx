import './App.css'

import Navbar from './components/Navbar';


function App() {

  
  //TODO: FIX WEIRD PAGE LENGTH ISSUE
  //TODO: CREATE NAV ELEMENT


  return (
    <>
      <div className={"content-container"}>
        <Navbar />
        <h1>Hello World</h1>
      </div>
      <footer className={"footer--pin"}>
        Github {"=>"} <a href="https://github.com/Ishan-Choudhary/Todo_web_app" target="_blank">Leave a star if you liked it :)</a>
      </footer>
    </>
  )
}

export default App;
