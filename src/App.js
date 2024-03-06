import './App.css'; 
import { StandardCardCollection, NavBarHeader, MarketingFooter } from './ui-components'


function App() {
return (
  <>
    <NavBarHeader width="100%" marginBottom="100px" />
    <StandardCardCollection  marginBottom="100px" />
    <MarketingFooter />
  </>
)

}

export default App;