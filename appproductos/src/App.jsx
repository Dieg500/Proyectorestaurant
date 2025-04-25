
import './App.css';
import './estilos/style.css';
import Bebida from './productos/cocacola.jsx';
import Camisas from './productos/camisa.jsx';
import Calzado from './productos/botas.jsx';


function App() {
  return (
    <div className="App">
      <h1>
        <hr />
        <h1>Bienvenidos a la tienda de productos</h1>
        <hr />
      
        <h2>Bebidas</h2>
        <Bebida 
        codigo='A001' 
        nombre='Coca Cola' 
        imagen='coca'
        />
        <hr/>

        <h2>Camisas</h2>
        <Camisas 
        codigo='A001' 
        nombre='Camisa Guchi Prada' 
        />
        <hr/>
        <h2>Calzado</h2>
        <Calzado 
        codigo='A001' 
        nombre='Botas Milton Fajer' 
        />
        <hr/>
    
      </h1>
      
    </div>
  );
}

export default App;
