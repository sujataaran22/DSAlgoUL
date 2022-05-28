

import {Component1} from "./Component/Component1";
import {Component2} from "./Component/Component2";
import {Navigationbar} from "./Component/Navigationbar";
import {Login} from "./Component/Login";
import { Footer1 } from "./Component/Footer1";
const App=()=> {
  return (
    <div className="App">
      {/* <h1>hello</h1>

      <Component1/>
      <Component2/> */}
      <Navigationbar/>
      <Login/>
      <Login/>
      <Login/>
      <Login/>
      <Footer1/>

      


  </div>
  
  );
}

export default App;
