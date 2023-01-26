import React from 'react'
import './index.css'
import './App.css'
import Section from './components/Section'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app__itemsContainer'>
      
        <Section
          title="Model Y"
          description="Schedule a Demo Drive"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model 3"
          description="Schedule a Demo Drive"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />

        <Section
          title="Model S"
          description="Schedule a Demo Drive"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />

        <Section
          title="Model X"
          description="Schedule a Demo Drive"
          backgroundImg="model-x.jpg"
          rightBtnText="Existing Inventory"
          leftBtnText="Custom Order"
        />

        <Section
          title="Solar Panels"
          description="Lowest cost solar panels in America"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />

        <Section
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />

        <Section
          title="Accessories"
          backgroundImg="accessories.jpg"
          leftBtnText="Shop Now"        
        />
      </div>
   </div>
  )
}

export default App