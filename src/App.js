import './App.css';
import Header from './components/Header';
import {useEffect, useState} from 'react';
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {

  const[punkListData, setPunkListData] = useState([]);
  const[selectedPunk, setSelectedPunk] = useState(0);

  useEffect(()=>{
    const getNfts = async () =>{
                                  
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x9af829B22ba7ad573fbB6D836d1155DF09288105&order_direction=asc',
      { crossdomain: true }
      )
      console.log('here')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
  
    return getNfts()
  },[])


  return (
    <div className = 'app'>
    <Header/>
    {
      punkListData.length > 0 && (
        <>
        <Main 
          selectedPunk={selectedPunk}
          punkListData={punkListData} 
        />
        <PunkList 
          punkListData={punkListData} 
          setSelectedPunk={setSelectedPunk}
        />
        </>
      )
    }
    </div>
    
  );
}

export default App;
