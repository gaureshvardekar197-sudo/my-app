// import logo from './logo.svg';
import './App.css';
import Headertext from './component/Header.js';
import Footertext from './component/Footer.js';
import Counter from './component/Increment.js';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       <Headertext/>
    //       {/* hi my name rishikesh 
    //       This is a : <MyAppName/> */}
    //       {/* Edit <code>src/App.js</code> and save to reload. */}
    //     </p>
    //     {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   </header>
    // </div>
    <div>
      <Headertext />
      <div>
        <Counter/>
        <p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.</p>
      </div>
      <Footertext />
    </div>
  );
}

export default App;
