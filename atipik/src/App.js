import './App.css';
import Pizza from './components/pizza';

function App() {
  return (
    <div className="App">
      <h1>Menú Atipik</h1>
      <div className='container-main'>
        <Pizza 
          fotoName='cuatroestaciones'
          title='Cuatro Estaciones'
          description='Tomate, queso, oregano, jamón, speck.'
          price='12.50'
        />
        <Pizza 
          fotoName='prosciuto'
          title='Prosciutto'
          description='Tomate, mozzarella y jamón york.'
          price='13.00'
        />
        <Pizza 
          fotoName='barbacoa'
          title='Barbacoa'
          description='Tomate, mozzarella, cebolla, bacon, pollo, ternera y salsa barbacoa.'
          price='15.00'
        />
        <Pizza 
          fotoName='cuatroquesos'
          title='Cuatro Quesos'
          description='Tomate, mozzarella, queso de cabra, gorgonzola y emmental.'
          price='12.00'
        />
        <Pizza 
          fotoName='dicapra'
          title='Di Capra'
          description='Mozzarella, cebolla caramelizada y doble queso de cabra.'
          price='13.00'
        />
        <Pizza 
          fotoName='funghi'
          title='Funghi'
          description='Tomate, mozzarella, jamón york y champiñones.'
          price='13.50'
        />
      </div>
    </div>
  );
}

export default App;
