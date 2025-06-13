import './App.css'
import Navbar from './Components/Navbar'
import bp from '../public/images/bp.png'
import users from '../public/images/ud.png'
import ComponentToRender from './Components/ComponentToRender'

function App() {

  let business = [
    {
      name: 'Business Profile',
      logo: bp
    },
    {
      name: 'Users & Devices',
      logo: users
    }
  ]

  return (
    <div className="App">
      <Navbar/>
        
      <div className='main-container'>

        <div className='container'>
          <div className='left'>
            <div className='top'>
              <h2>Control Centre</h2>
              <h4>Select an option below to edit</h4>
            </div>

            <div className='bottom'>
              <p>BUSINESS</p>

              <div className='business'>
                {business.map((item, index) => (
                  <div key={index} className='business-item'>
                    <img src={item.logo} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))}

              </div>

            </div>
          </div>
          <div className='right' >
            <ComponentToRender />
          </div>
        </div>
    
      </div>
    </div>
  )
}

export default App
