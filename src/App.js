
import './App.css';
import Navebar from './components/Navebar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

{/*import{
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
*/}


function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message,type) => {
      setAlert({
        msg:message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);

      

    }

   const toggleMode= () => {
     if(mode==='light'){
       setMode('dark');
       document.body.style.backgroundColor='#042743';
       showAlert("Dark Mode has been enabled","success");
     }
     else{
       setMode('light');
       document.body.style.backgroundColor='white';
       showAlert("Light Mode has been enabled","success");
       
     }

    }
    return(
    <>
   { /*<outer>*/}
    
   <Navebar title="TextUtils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
   {/*<Switch>
        
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
             <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          </Route>
   </Switch>*/}
    </div>
 {/* </Router>*/}
   </>  
  
   
    
    
  



  );
}

export default App;

