import logo from './logo.svg';
import './App.css';

function App() {
  let Name = "Aung Nyi";
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className='Main'>
        <div className='Header'>
          <div className='firstPart'>
              <h4 className='title'>Us3r</h4>
          </div>
          <div className='secondPart'>
            <div className='home' onClick={()=>{
              window.location.href="#Head"
            }}>
              <h4 className='head_text'>Home</h4>
            </div>

            <div className='About' >
            <h4 className='head_text' onClick={()=>{
              window.location.href="#info"
            }}>About</h4>
            </div>

            <div className='contact'>
            <h4 className='head_text' onClick={()=>{
              window.location.href="#footer"
            }}>Contact</h4>
            </div>
          </div>
        </div>
        <div className='Head' id='Head'>
          <div className='Home'>
          <div className='Username'>

          <h1 className='firstWord'>
          Hi ,
          </h1>
          <div className='FullName'>
          <h1 className='MyName'>
           I'm
          </h1>
          <h1 className='last_word'>
          {Name}
          </h1>
          </div>
          <div>
          <h1 className='Developer'>Web Developer</h1>
          </div>
          </div>
          <div className='Photo'>

          </div>

          </div>

          </div>
          <div className='info' id='info'>
            <div className='AboutMe'>
              <h1 className='text_about'>About Me</h1>
              <h4 className='experiments'>I was Backend Developer in Tee Htwin</h4>
              <div className='Information'>
              <h4 className='About_'>
                Hello, I'm 14 years old . I'm from Mandalay.
                I study the programming since 2022.I have my own projects.
                They are Online Shopping |Full Stack| , Rock Paper Succors Game Web,
                and other projects . You can see those projects at my github account.
              </h4>
            </div>
            </div>
            <div className='InfoPhoto'></div>
          </div>
          <div id='footer' className='footer'>
            <div className='Ft_first'>
              <h3 className='Ad'>Address</h3>
              <h4 className='location'><i class="fa fa-map-marker" style={{marginRight:"9px"}}></i>Singing, Mandalay</h4>
              <h4 className='PhNumber'><i class="fa fa-phone" style={{marginRight:"9px"}}></i>+959796495730</h4>
              <h4 className='email'><i class="fa fa-envelope" style={{marginRight:"6px"}}></i>thantaungnyi@gmail.com</h4>
            </div>
            <div className='Ft_second'>
              <div className='Facebook' onClick={()=>{
                window.location.href=""
              }}><i style={{color:"blue", fontSize:'25px',paddingLeft:"17px",paddingTop:"13px"}} class="fa fa-facebook-f"></i></div>
              <div onClick={()=>{
                window.location.href="https://github.com/Aung-Nyi-Thant"
              }} className='Github'><i style={{color:"black", fontSize:'30px',paddingLeft:"13px",paddingTop:"9px"}} class="fa fa-github"></i></div>
              {/* https://github.com/Aung-Nyi-Thant */}
              <div className='twitter' onClick={()=>{
                window.location.href=""
              }}><i style={{color:"blue", fontSize:'28px',paddingLeft:"13px",paddingTop:"10px"}} class="fa fa-twitter"></i></div>
              <div className='LinkIn' onClick={()=>{
                window.location.href="https://www.linkedin.com/in/aung-nyi-thant-64645b273/"
              }}><i style={{color:"blue", fontSize:'28px',paddingLeft:"13px",paddingTop:"10px"}} class="fa fa-linkedin-square"></i></div>
              {/* https://www.linkedin.com/in/aung-nyi-thant-64645b273/ */}
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;



