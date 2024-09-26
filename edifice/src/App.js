import './App.css';
import Button from './components/button/button';
import Header from './components/header/header';
import Card from '../src/components/card/card';
import { ViewDemo,Publish,Analytics,Engagement, FiveStars, FourStars, Tick, ProductDesign, MarketingStrategy, Ecommerce, Chia, LeftArrow, RightArrow } from './components/icons/icons';
import { homeImg,homeCurve,unsplash,notion,descript,intercom,grammarly, ThirdPgImg, AboutBenefitsImg, slide1, NBImg1, NBImg2, NBImg3, slide2, slide3, Aria} from './components/Images/imgs';
import Container from './components/container/container';
import Faq from './components/faq/faq';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="overAllPage">
      
      <div className='HomePage'>
       <Header />

       <div className='mainContent'>
          <div className='contentOne'>
            <h1>We’re here to Increase your Productivity</h1>
            <img src={homeCurve} alt='' />
            <p>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
            <div className='hero-btn'>
              <Button Class='Btn' Name='Get Solution' />
              <button className='view-btn'> <ViewDemo /> View Demo</button>
            </div>
          </div>
          <div className='contentTwo'>
            <img src={homeImg} alt='' />
          </div>
       </div>

       <div className='team-section' >
         <h1>More than 25,000 teams trust CHIA</h1>
         <div className='teams'>
          <img src={unsplash} alt='' />
          <img src={notion} alt='' />
          <img src={intercom} alt='' />
          <img src={descript} alt='' />
          <img src={grammarly} alt='' />      
         </div>
       </div>
      </div>

     <div className='support-section'>
      <div className='support-content'>
        <h2>How we support our partner all over the world</h2>
        <p className="dpt">
          Digital marketing has become essential for businesses, driving growth through targeted campaigns, social media strategies, content creation, and data-driven insights. From increasing brand awareness to boosting customer engagement, digital marketing empowers businesses to reach their goals efficiently.
        </p>
        <div className='rating-section' >
        <div className="rating">
          <FiveStars />
            <p><strong>4.9 / 5 rating</strong></p>
            <p className='dpt'>databricks</p>
          </div>
          <div className="rating">
            <FourStars />
            <p><strong>4.8 / 5 rating</strong></p>
            <p className='dpt'>Chainalysis</p>
          </div>
        </div>

      </div>
      <div className="features-list">
        <div className="feature">
          <div className='feature-icon'>
            <Publish />
          </div>
          <div>
            <h3>Publishing</h3>
            <p className='dpt'>Plan, collaborate, and publish content that drives meaningful engagement and growth for your brand.</p>
          </div>
        </div>

        <div className="feature">
          <div className='feature-icon'>
           <Analytics />
          </div>
          <div>
            <h3>Analytics</h3>
            <p className='dpt'>Analyze your performance and create gorgeous reports.</p>
          </div>
        </div>

        <div className="feature">
          <div className='feature-icon'>
            <Engagement />
          </div>
          <div>
            <h3>Engagement</h3>
            <p className='dpt'>Quickly navigate and engage with your audience.</p>
          </div>
        </div>

      </div>
     </div>

     <div className="benefits-section">
     <div className="bridge-gap">
        <div className='bridge-head'>
        <h2>We Aim To Bridge The Gap Between</h2>
        <h2>Business And The Digital World</h2>
        </div>
        <div className="content">
          <img src={ThirdPgImg} alt="Woman with Tablet"  />

          <div className="services">
            <div className="service-item">
              <ProductDesign />
              <div className='service-content'>
                <h3>Product Design</h3>
                <p>Lorem ipsum dummy text are used in this design</p>
                <a href="/">Read More</a>
              </div>
            </div>
            <div className="service-item">
              <MarketingStrategy />
              <div className='service-content'>
                <h3>Marketing Strategy</h3>
                <p>Nullam dictum felis eu pede mollis pretium.</p>
                <a href="/">Read More</a>
              </div>
            </div>
            <div className="service-item">
              <Ecommerce />
              <div className='service-content'>
                <h3>E-Commerce</h3>
                <p>Maecenas malesuada. Praesent congue erat at massa.</p>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-benefits">
        <div className='benefits-content'>
          <div>
          <h2>About Benefits</h2>
          <h2>get from CHIA</h2>
          </div>
          <div className='benefits-list-box'>
           <div className="benefits-list"> 
             <Tick /> 
             <span>Expert Brand Consultation to Maximize Impact</span>
           </div>
           <div className="benefits-list"> 
             <Tick /> 
             <span>Build a Strong Online Brand Presence</span>
           </div>
           <div className="benefits-list">
             <Tick />
             <span>Monthly Brand Performance Reports</span> 
           </div>
           <div className="benefits-list">
             <Tick />
             <span>Future-Proof Your Brand Strategy</span> 
           </div>
           <div className="benefits-list">
             <Tick />
             <span>Seamless Brand Transactions and Collaborations</span> 
           </div>
         </div>
        </div>

        <div className="image-section">
          <img src={AboutBenefitsImg} alt='' />
        </div>
      </div>
     </div>

     <div className='project-section'>
       <h1> Our New Recently Completed Projects.</h1>
       <div>
       <div className='slideContainer' >
         <img src={slide2} alt='' />
         <img src={slide1} alt='' />
         <img src={slide3} alt='' />
         <img src={slide1} alt='' />
         <img src={slide3} alt='' />
       </div>
       </div>
     </div>

     <div className='plan-section'>
       <div className='plan-section-head'>
         <h2>Choose Plan </h2>
         <h2>That’s Right For You</h2>
       </div>

       <div className='plan-card'>
        
         <Card duration="Per Month" price="$36.00" 
         featureOne="3 Social Media Account" 
         featureTwo="Free Platform Access" 
         featureThree="24/7 Customer Support" 
         featureFour="Weekly Backup" 
         featureFive="Video Consulting" />

         <Card duration="Three Month" price="$54.00"
         featureOne="3 Social Media Account"
         featureTwo="Free Platform Access"
         featureThree="24/7 Customer Support"
         featureFour="Weekly Backup"
         featureFive="Video Consulting" />

         <Card duration="One Year" price="$89.00"
         featureOne="3 Social Media Account"
         featureTwo="Free Platform Access"
         featureThree="24/7 Customer Support"
         featureFour="Weekly Backup"
         featureFive="Video Consulting" />
        </div>
     </div>

     <div className='FAQ-section'>
      <h1>Frequently Asked Questions ?</h1>
      <Faq />
     </div>

     <div className='NewsBlogs-section'>
      <h1>Our Latest News & Blogs</h1>
      <div className='NewsBlogs-container'>
        <Container img={NBImg1} />
        <Container img={NBImg2} />
        <Container img={NBImg3} />
      </div>
     </div>

     <div className="testimonial-section">
      <div className="testimonial-content">
        <h2>People are Saying About CHIA</h2>
        <p>All the tools you need to elevate your brand, manage growth, and build success from anywhere</p>
        <div className="testimonial-card">
          <img  src={Aria}  alt="Aria Zinarrio" className="testimonial-avatar" />
          <div className="testimonial-text">
            <h4>Aria Zinarrio</h4>
            <p>CEO, Walhut</p>
          </div>
        </div>
        <p>This app has transformed my daily routine! Easy, fast, and reliable, it makes managing payments a breeze. It’s been a true lifesaver.</p>
        <div className="testimonial-nav">
          <button className="nav-button"><LeftArrow /></button>
          <button className="nav-button"><RightArrow /></button>
        </div>
      </div>
      <div className="form-section">
        <Chia />
        <h3>Get Started</h3>
        <form className="get-started-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          
          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" placeholder="What are you say?" />
          
          <button type="submit" className="submit-button">Request Demo</button>
        </form>
        <p className="trial-option"> or <span href="/free-trial"> Start Free Trial</span></p>
      </div>
    </div>

    <Footer />

    </div>
  );
}

export default App;



