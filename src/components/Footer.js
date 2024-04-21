import React from 'react'
import logo1 from '../assets/instagram.png'
import logo2 from '../assets/facebook .png'
import logo3 from '../assets/twitter.png'
import logo4 from '../assets/whatsapp.png'
import logo5 from '../assets/social.png'

const Footer = () => {


  return (
      <div className='footer'>
           <br /><br/>
                <h1>RECEIPE GETTER</h1><br/><br/>
             <div id="aboutus"><a href="our location "> Our Location </a></div>
             <div id="about"><a href="About us">About RECEIPE GETTER</a></div>
             <div id="market"><a href="market">Market We serve</a></div>
             <div id="product"><a href="product">Product Portpolio</a></div>
             <div id="careers"><a href="careers">Careers</a></div>
             <p class="bangalore"> 3rd Hal Stage New Tippasandra Main Road Near Vishal Mart,Bangalore,Karnataka,ph.No:9365930274,PIN:560075 </p>
             <p class="p1">About us ouality sustainability what we do</p>
             <p class="market">
             Explore 10,000+ recipes, recipes in videos, the latest food news, articles, kitchen hacks, diet plans and many more at Times Food</p>
                <p class ="portfolio">Beverage Compounds Natural Flavours Fruit Wine & Ciders Fruit Juice Concentrates Not From Concentrate Juices Fruit Sweetness Emulsions</p>
                <p class="careers">Careers</p>
                <br/>
        <br/>
       <h3 id="copyrights">&lt; &lt; &lt; &lt; &lt; &lt;&copy; 2024 <strong>RECEIPE GETTER</strong>All Rights are Reserved &gt;&gt;&gt;&gt;&gt;&gt;</h3>
        <h4><a href="#"className='top' id="top">BACK TO TOP</a></h4>
        <img src={logo1} id="img4" alt="Facebook" title="Facebook" width="30" height="30" loading="lazy"/>
        <img src={logo2}  id="img5" alt="Instagram" title="Instagram" width="30" height="30" loading="lazy"/>
        <img src={logo3}  id="img6" alt="Whatsapp" title="Whatsapp" width="30" height="30" loading="lazy"/>
        <img src={logo4}   id="img7" alt="Twitter" title="Twitter" width="30" height="30" loading="lazy"/>
        <img src={logo5}  id="img8" alt="Social" title="Social" width="30" height="30" loading="lazy"/>
    <footer/>
    </div>
    )
    }
    

export default Footer
