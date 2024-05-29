import React from 'react'
import './Home.css'
import homepage1 from '../../assets/msg689684673-74666 (1).jpg'
import Carousel from 'react-bootstrap/Carousel';
import photoman1 from '../../assets/adidas_shoes_man.avif'
import photoman2 from '../../assets/adidas_sumka_man.avif'
import photoman3 from '../../assets/adidas_shirt_man.avif'

import photowomen1 from '../../assets/adidas_women_shirt.avif'
import photowomen2 from '../../assets/adidas_women_shoes2.avif'
import photowomen3 from '../../assets/adidas_women_shirt2.avif'

import photokids2 from '../../assets/adidas_kids_back.avif'
import photokids1 from '../../assets/adidas_kids_shirt.avif'
import photokids3 from '../../assets/adidas_kids_shoes.avif'

import about1 from '../../assets/about_img1.avif'
import about2 from '../../assets/about_img2.avif'
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <>
          <div className="home-page_container">
        <img id='hp_1' src={homepage1} alt="" />
        <h1 className='hp_h1'>IMPOSSIBLE IS NOTHING</h1>
        <button className='btn_hp'>About Us</button>

            {/* ====== carousel 1 ====== */}

<div className="carousel_man">
            <h3>A new collection of men's clothing:</h3>

                  <Carousel className='carouselman_con'>
                      <Carousel.Item>
                          <div className="item1">
                              <img src={photoman1} alt="" />
                              <div className="item-kids">
                                  <h1>Gazelle Indoor Shoes</h1>
                                  <p id='kids-1'>Size : 8 - 13 US</p>
                                  <p>color : Cream White</p>
                                  <p>120$</p>
                                  <button>Learn More</button>
                              </div>

                          </div>

                      </Carousel.Item>
                      <Carousel.Item>
                          <div className="item1">
                              <img src={photoman2} alt="" />
                              <div className="item-kids">
                                  <h1>Pride Duffle S</h1>
                                  <p id='kids-1'>color : Black(only)</p>
                                  <p>55$</p>
                                  <button>Learn More</button>
                              </div>

                          </div>

                      </Carousel.Item>
                      <Carousel.Item>
                          <div className="item1">
                              <img src={photoman3} alt="" />
                              <div className="item-kids">
                                  <h1>Arsenal 24/25 Home Authentic Jersey</h1>
                                  <p id='kids-1'>Size : XS - 2XL</p>
                                  <p>150$</p>
                                  <button>Learn More</button>
                              </div>
                          </div>
                      </Carousel.Item>
                  </Carousel>  

              </div>
          </div>

                {/* carousel 2 */}

            <div className="carousel_woman">
                <h3>A new collection of women's clothing:</h3>

              <Carousel className='carouselwoman_con'>
                  <Carousel.Item>
                      <div className="item1">
                          <img src={photowomen1} alt="" />
                          <div className="item-kids">
                              <h1>Future Icons 3 - Stripes Tee</h1>
                              <p id='kids-1'>Size : 2XS - 2XL</p>
                              <p>color : Red, Blue, White </p>
                              <p>35$</p>
                              <button>Learn More</button>
                          </div>

                      </div>

                  </Carousel.Item>
                  <Carousel.Item>
                      <div className="item1">
                          <img src={photowomen2} alt="" />
                          <div className="item-kids">
                              <h1>CloudaFoam Pure Shoes</h1>
                              <p id='kids-1'>color : Pink, Green, Grey</p>
                              <p>75$</p>
                              <button>Learn More</button>
                          </div>

                      </div>

                  </Carousel.Item>
                  <Carousel.Item>
                      <div className="item1">
                          <img src={photowomen3} alt="" />
                          <div className="item-kids">
                              <h1>Future Icons 3 - Stripes Tee</h1>
                              <p id='kids-1'>color : Red, Blue, White</p>
                              <p>32$</p>
                              <button>Learn More</button>
                          </div>
                      </div>
                  </Carousel.Item>
              </Carousel>   

            </div>
        
                {/* carousel 3 */}

          <div className="carousel_kids">
              <h3>A new collection of kid's clothing:</h3>

              <Carousel className='carouselkids_con'>
                  <Carousel.Item>
                      <div className="item1">
                          <img src={photokids1} alt="" />
                          <div className="item-kids">
                              <h1>SS 2 Color Logo Tee24</h1>
                              <p id='kids-1'>Size : 2XS - 2XL</p>
                              <p>color : Black, White, Blue </p>
                              <p>20$</p>
                              <button>Learn More</button>
                          </div>

                      </div>

                  </Carousel.Item>
                  <Carousel.Item>
                      <div className="item1">
                          <img src={photokids2} alt="" />
                          <div className="item-kids">
                              <h1>Excel Lunch Bag</h1>
                              <p id='kids-1'>color : Black(only)</p>
                              <p>32$</p>
                              <button>Learn More</button>
                          </div>

                      </div>

                  </Carousel.Item>
                  <Carousel.Item>
                      <div className="item1">
                          <img src={photokids3} alt="" />
                          <div className="item-kids">
                              <h1>Gazelle Shoes Kids</h1>
                              <p id='kids-1'>Size : 3.5 - 7 US</p>
                              <p>color : Red, Blue</p>
                              <p>80$</p>
                              <button>Learn More</button>
                          </div>
                      </div>
                  </Carousel.Item>
              </Carousel>

          </div>

                {/* carousel 4 */}
            <div className='AboutUs'> 
            <h1>About Us.</h1>
            <div className="div_20">
                <div className="about1">
              <h3>Stories, style, and <br /> sporting goods at <br /> adidas, since 1949.</h3>
              <p>Through sports, we have the power to change lives. Sports keep us fit. <br />
               They keep us mindful. They bring us together. Athletes inspire us. They help us <br />
               to get up and get moving. And sporting goods featuring the latest technologies help <br />
               us beat our personal best. adidas is home to the runner, the basketball player, the <br />
               soccer kid, the fitness enthusiast, the yogi. And even the weekend hiker looking to <br />
               escape the city. The 3-Stripes are everywhere and anywhere. In sports. In music. <br />
               On life’s stages. Before the whistle blows, during the race, and at the finish line. <br />
               We’re here to support creators. To improve their game. To live their lives. <br />
               And to change the world. Adidas is about more than sportswear and workout clothes. <br />
               We partner with the best in the industry to co-create. This way we offer our fans the <br />
               sporting goods, style and clothing that match the athletic needs, while keeping sustainability <br />
               in mind. We’re here to support creators. Improve their game. Create change. And we think about <br />
                the impact we have on our world.
              </p>
              
              </div>
                  <img src={about1} alt="" />
              </div>
              <div className="div_23">
                  <img src={about2} alt="" />
              <div className="about2">
    
              <h3>Workout clothes, <br /> for any sport.</h3>
              <p>Adidas designs for athletes of all kinds. Creators who love to change the game. People <br />
               who challenge conventions, break the rules, and define new ones. Then break them all over again. <br />
               We design sports apparel that gets you moving, winning, and living life to the fullest. We create <br />
               bras and tights for female athletes who play just as hard as the men. From low to high support. Maximum <br />
               comfort. We design, innovate and iterate. We test new technologies in action. On the field, the track, <br />
               the court, and in the pool. We’re inspired by retro workout clothes, creating new streetwear essentials. <br />
               From NMD and Ozweego to our Firebird tracksuits. From Stan Smith to Superstar. Classic sports models are <br />
               brought back to life on the streets and the stages around the world. Through our collections we blur the <br />
               borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing <br />
               collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals <br />
               lifestyle pieces, that can be worn as sports apparel too. Our lives are constantly changing. Becoming more <br />
               and more versatile. And adidas designs with that in mind.</p>
               
            </div>
          </div>
          </div>

          {/* footer */}

          <footer className="footer">
              <Container>
                  <Row>
                      <Col md={4} className="footer-section">
                          <h5>About Us</h5>
                          <p>We offer the best collection of clothing and accessories. Quality and style in every piece.</p>
                      </Col>
                      <Col md={4} className="footer-section">
                          <h5>Customer Service</h5>
                          <ul>
                              <li><a href="#contact">Contact Us</a></li>
                              <li><a href="#returns">Returns</a></li>
                              <li><a href="#shipping">Shipping Info</a></li>
                              <li><a href="#faq">FAQ</a></li>
                          </ul>
                      </Col>
                      <Col md={4} className="footer-section">
                          <h5>Follow Us</h5>
                          <ul className="social-icons">
                              <li><a href="#facebook"><i className="fab fa-facebook-f">facebook</i></a></li>
                              <li><a href="#instagram"><i className="fab fa-instagram">instagram</i></a></li>
                              <li><a href="#twitter"><i className="fab fa-twitter">twitter</i></a></li>
                              <li><a href="#tiktok"><i className="fab fa-tiktok">tiktok</i></a></li>
                          </ul>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="text-center">
                          <p>&copy; 2024 Your Clothing Store. All rights reserved.</p>
                      </Col>
                  </Row>
              </Container>
          </footer>
      </>
  )
}






export default Home