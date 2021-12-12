import React from 'react'
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreLogo from '../assets/owner/more.png'
import {useState, useEffect} from 'react'

const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] =  useState(punkListData[0])

    useEffect(()=>{
        setActivePunk(punkListData[selectedPunk])
    },[punkListData, selectedPunk])


    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img 
                        className='selectedPunk' 
                        src={activePunk.image_original_url} 
                        alt=''/>
                    </div>
                </div>
                <div className='punkDetails' >
                    <div className='title'> {activePunk.name}
                    <span className='itemNumber'>#{activePunk.token_id}</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageConatiner'>
                        <img src={activePunk.image_original_url} alt=''/>
                    </div>
                    <div className='ownerDetails'>
                         <div className='OwnerNameAndHandle'>
                             <div className='ownerAddress'>0xAd8A72Bb92416Afc16164634e1dE49ebE2D7E0d3</div>
                             <div className='ownerHandle'>@Karan Singh</div>
                         </div>   
                         <div className='ownerLink'>
                             <img src={instagramLogo} alt=''/>
                         </div>
                         <div className='ownerLink'>
                             <img src={twitterLogo} alt=''/>
                         </div>
                         <div className='ownerLink'>
                             <img src={moreLogo} alt=''/>
                         </div>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default Main
