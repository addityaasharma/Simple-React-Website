import React, { useState } from 'react'
import "./Indexw.css";

const Ipl = () => {
    const obj=[
        {id:1,category:"mi",player:'Batsman',name:'Rohit Sharma',src:"https://static.toiimg.com/thumb/msid-112621799,width-400,resizemode-4/112621799.jpg",game:'cricket'},
        {id:2,category:"mi",player:'Bowler',name:'Hardik Pandya',src:"https://www.mumbaiindians.com/static-assets/images/players/large/action-shots/63751.png?v=5.05&w=400",game:'cricket'},
        {id:3,category:"mi",player:'Fielder',name:'Will Jack',src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWfbiDCPCxHEiPuBekJKLjqtQ0k1WzuajcJpTrHXLkRboPgGsl2O7KUE&s=10",game:'cricket'},
        {id:4,category:"csk",player:'Batsman',name:'MS Dhoni',src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7j6mL533jU7usHOMiBJ8UNCdYdyxLu_Ui4IXR7OGeLfGUx4G-klkMWVbzrwoOtjS-g88w2go4szBPBSeRYQInIg",game:'cricket'},
        {id:5,category:"csk",player:'All Rounder',name:'Ravindra Jadeja',src:"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSn11KHsKGmx9SWOEQtYto_ciPvEpj-8QAV3hL3fRtsCMmLQ9Vz-V5E7ROTKeaRxGoxwM4gNZczqZ0_7TU",game:'cricket'},
        {id:6,category:"csk",player:'Bowler',name:'Noor Ahamad',src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlfyns42B3XZ21Z418W8GgeZC3P0CYO4F6nTUG_XbXWvqY_K7rIhVzQTa0Dz9SlunMPMnB6zcfHfwtll2drCXMWA",game:'cricket'},
        {id:7,category:"rcb",player:'Batsman',name:'Virat Kohli',src:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",game:'cricket'},
        {id:8,category:"rcb",player:'Fielder',name:'Suyash Sharma',src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXe_bIiZA-HkqDhLxzGg00Mcs9S9f3_SzyXhL2DSZwxCiAVqeQaauDRJSBqBBWf6gfaM5_c7cSf0p4y3W8yXf5bg",game:'cricket'},
        {id:9,category:"rcb",player:'Fielder',name:'Mohit Rathee',src:"https://i.ytimg.com/vi/D68vab8Vaaw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFUgWShlMA8=&rs=AOn4CLC3hS36_N6H2PFFVtJPnQ5Wlwt-5w",game:'cricket'}
    ];

    const [team,setTeam] = useState(obj);

    const details=(playerName)=>{
        const playerSelection = obj.filter(e=>e.category==playerName);
        setTeam(playerSelection);
    }
    const game=(data)=>{
        const playerSelection = obj.filter(e=>e.game==data);
        setTeam(playerSelection);
    }

  return (
    <div>
      <div className="nav">
        <button onClick={()=>details('mi')}>MI</button>
        <button onClick={()=>details('csk')}>CSK</button>
        <button onClick={()=>details('rcb')}>RCB</button>
        <button onClick={()=>game('cricket')}>All Player</button>
      </div>
      <div className="showresult">
        {
            team.map(e=>(
                <div key={e.id}>
                    <div className="players">
                        <div className="img">
                            <img src={e.src} alt="" srcset="" />
                        </div>
                        <div className="details">
                            <h1>{e.name}</h1>
                            <p>{e.player}</p>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Ipl
