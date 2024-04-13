import styled from "styled-components"; 
import Tracker from "./components/Tracker"; 
import GlobalStyles from "./globalStyles"; 
import moneysImage from "./photos/moneys.png";
  
const Main = styled.div` 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  background-image: url(${moneysImage});
  background-attachment: fixed;
  background-size: cover;
  height: 100vh; 
  width: 100vw;
    background-position: center;
    
`; 
  
const App = () => { 
  return ( 
    <Main> 
      <GlobalStyles /> 
      <Tracker /> 
    </Main> 
  ) 
} 
  
export default App;