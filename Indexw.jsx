import React, { useState } from "react";
import "./Indexw.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Snapchat from "./Snapchat";  // Fixed typo
import Youtube from "./Youtube";

const Indexw = () => {
    const obj=[
        {id:1,name:'Aditya',category:"Instagram"},
        {id:2,name:'Ayush',category:"Instagram"},
        {id:3,name:'Ashish',category:"Facebook"},
        {id:4,name:'Ansh',category:"Twitter"},
    ];

    const [value,setValue] = useState(obj);

    const Social=(data)=>{
        const user=obj.filter(e=>e.category==data);
        setValue(user);
    }
  return (
    <BrowserRouter>
    <h1 className="logo" style={{textAlign:'center'}}>Social Media</h1>

      <div className="navigation-menu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Youtube">Youtube</NavLink></li>
          <li><NavLink to="/Facebook">Facebook</NavLink></li>
          <li><NavLink to="/Instagram">Instagram</NavLink></li>
          <li><NavLink to="/Snapchat">Snapchat</NavLink></li>
      </div>
      <Routes>
            <Route path="/Youtube" element={<Youtube />} />
            <Route path="/Facebook" element={<Facebook />} />
            <Route path="/Instagram" element={<Instagram />} />
            <Route path="/Snapchat" element={<Snapchat />} />
            <Route path="/" element={
                    <>
                    <header>
        <div className="hero-image">
            <img src="https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </header>

      <main>
      
        <div className="heading">
            <h1>About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis tempora doloremque doloribus atque consequuntur inventore incidunt facere pariatur, saepe totam ducimus quo, voluptate odit beatae velit laboriosam itaque magni non ipsum quisquam. Voluptatem error animi recusandae! Aliquid, velit quaerat incidunt autem officiis enim, nulla adipisci obcaecati deleniti repellendus eaque vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, consectetur error. Nobis, sint facilis recusandae, rerum excepturi quis provident culpa dolorum dolorem error doloribus qui unde voluptatibus quaerat cum blanditiis eaque atque porro tenetur totam fugit quo. Eius ex qui nostrum ducimus optio non suscipit hic voluptatibus sapiente, placeat voluptates?</p>
        </div>

        <div className="testimonials">
            <div><img src="https://images.pexels.com/photos/30956653/pexels-photo-30956653/free-photo-of-muslim-women-praying-at-istiqlal-mosque-jakarta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image1" /></div>
            <div><img src="https://images.pexels.com/photos/30734874/pexels-photo-30734874/free-photo-of-charming-outdoor-restaurant-at-twilight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image2" /></div>
            <div><img src="https://images.pexels.com/photos/30875287/pexels-photo-30875287/free-photo-of-dreamy-portrait-of-woman-with-abstract-colors.jpeg" alt="image3" /></div>
            <div><img src="https://images.pexels.com/photos/30856712/pexels-photo-30856712/free-photo-of-stylish-young-adult-with-curly-hair-and-rings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image4" /></div>
            <div><img src="https://images.pexels.com/photos/30876808/pexels-photo-30876808/free-photo-of-the-great-sphinx-and-pyramid-of-giza-under-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image5" /></div>
            <div><img src="https://images.pexels.com/photos/30994513/pexels-photo-30994513/free-photo-of-traditional-nigerian-drummer-in-cultural-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image6" /></div>
            <div style={{width:400}}><img src="https://images.pexels.com/photos/30993125/pexels-photo-30993125/free-photo-of-elegant-woman-with-pink-fur-and-jewelry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image7" /></div>
            <div style={{width:400}}><img src="https://images.pexels.com/photos/29879992/pexels-photo-29879992/free-photo-of-dreamy-outdoor-portrait-of-woman-at-twilight.jpeg" alt="image8" /></div>
            <div style={{width:400}}><img src="https://images.pexels.com/photos/30749429/pexels-photo-30749429/free-photo-of-scenic-alpine-wooden-cabin-in-misty-tirol-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image9" /></div>
        </div>

        <div className="contact">
            <h1>Contact Us</h1>

            <div className="contact-form">
                <form action="">
                    <input type="text" placeholder="Enter your name" required/><br />
                    <input type="text" placeholder="Enter your email" required/><br />
                    <input type="number" placeholder="Enter your number" required/><br/>
                    <input type="button" value="Submit" style={{width:150}} className="submit"/>

                    <div className="scroll">
                        <marquee behavior="scroll" direction="right">
                            <strong>Feel free to contact us. Our team will reach you shortly.</strong>
                        </marquee>
                    </div>
                </form>
            </div>
        </div>
       
      </main>

      <h1 style={{marginTop:30,textAlign:'center'}}>Our Developer</h1>

      <div className="lists">    
        <div className="button">
            <button onClick={() => Social("Instagram")}>JavaScript</button>
            <button onClick={() => Social("Facebook")}>Python</button>
            <button onClick={() => Social("Twitter")}>C++</button>
        </div>

        <div className="result">
        {
            value.map(e => (
                <h2 key={e.name}>{e.name}</h2>
            ))
        }
        </div>
      </div>
                    </>
                    } />
            </Routes>
      <footer>
        <div className="footer">
            <h3>2024.All Rights Reserved</h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor.</h6>
        </div>
      </footer>
      
    </BrowserRouter> 
  );
};

export default Indexw;
