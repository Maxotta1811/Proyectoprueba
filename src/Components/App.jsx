import Header from "./Header"
import Principal from "./Principal"
import Footer from "./Footer";
import Saludar from "./Saludar";
import '../style/App.css'
function App() {
  return (
    <div className="App">
      <Saludar></Saludar>
      <Header>HEADER</Header>
      <Principal>PRINCIPAL</Principal>
      <Footer>FOOTER</Footer>
    </div>
    );
}

export default App;
