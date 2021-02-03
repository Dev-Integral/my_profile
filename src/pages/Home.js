import React, { useRef } from 'react';
import '../styles/home.css';
import about from '../images/img1.jpg';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';
import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpg';
import product4 from '../images/product4.jpg';

const PageWrapper = () => {
        const serviceSection = useRef(null);
        const homeSection = useRef(null);
        const aboutSection = useRef(null);
        const testimonialSection = useRef(null);
        const workSection = useRef(null);
        const contactSection =useRef(null);


        const gotoSection = (value) => {
            switch(value){
                case 'service':
                    window.scrollTo({top:serviceSection.current.offsetTop, 
                    behavior: 'smooth'})
                    break;
                case 'about':
                    window.scrollTo({top:aboutSection.current.offsetTop, 
                    behavior: 'smooth'});
                    break;
                case 'testimonial':
                    window.scrollTo({top:testimonialSection.current.offsetTop, 
                    behavior: 'smooth'});
                    break;
                case 'work':
                    window.scrollTo({top:workSection.current.offsetTop, 
                    behavior: 'smooth'});
                    break;
                case 'contact':
                    window.scrollTo({top:contactSection.current.offsetTop, 
                    behavior: 'smooth'});
                    break;
                
                default:
                    window.scrollTo({top:homeSection.current.offsetTop, 
                    behavior: 'smooth'});
                    break;
        }
        };
        window.addEventListener('scroll', function(){
            let nav = document.querySelector('nav');
            nav.classList.toggle('sticky', window.scrollY >0); 
        })
        const toggleMenu = ()=>{
            let menuToggle = document.querySelector('.toggle');
            let menu = document.querySelector('.menu');
            menuToggle.classList.toggle('active');
            menu.classList.toggle('active');
        }

        return (
            <div>
                <header>
                    <nav>
                        <a onClick={()=>{gotoSection('home'); toggleMenu()}} href="!#" className="logo" ><i className="fa fa-home"></i>Portfolio</a>
                        <div className="toggle" onClick={toggleMenu}></div>
                        <ul className="menu">
                            <li onClick={()=>{gotoSection('about'); toggleMenu()}}><a href="#about"><em>About</em></a></li>
                            <li onClick={()=>{gotoSection('service'); toggleMenu()}}><a href="#services"><em>Services</em></a></li>
                            <li onClick={()=>{gotoSection('work'); toggleMenu()}}><a href="work"><em>Work</em></a></li>
                            <li onClick={()=>{gotoSection('testimonial'); toggleMenu()}}><a href="#testimonial"><em>Testimonial</em></a></li>
                            <li onClick={()=>{gotoSection('contact'); toggleMenu()}}><a href="#contact"><em>contact</em></a></li>
                        </ul>
                    </nav>
                </header>
                <section className="banner" ref={homeSection}>
                    <div className="textBx">
                        <h2>Hello, I'm</h2>
                        <h2 className="fullname">Ayoola Taiwo.</h2>
                        <h3>I'm a front End Web Developer.</h3>
                        <a href="#7" className="btn">About Me</a>
                    </div>
                </section>
                <section className="about" ref={aboutSection}>
                    <div className="heading">
                        <h2>About Me</h2>
                    </div>
                    <div className="content">
                        <div className="contentBx w50">
                            <h3>I'm a front end web developer</h3>
                            <p>
                                Lorem ipsum smelfgm flgdmdf fm vgfkjgnlg mbfd.sdfjnfg g fg
                                vgfklghlthntkgklfvb;sfm rg  tgfrgkthntor rtghtl;er rtnowoerp5y 3;wq3ertr gh
                                sastrrgsthm lktyreotk t  gtnr thon;yt ht h't6h;tkrdgm ewt/'qt4;kym5ik5tlkmtgjktlnjjglk,ty;'atolkewr .at4365
                                grm kgmrltkghm;tt[4rrmrgkmtekth ngn .dsccmfeprfwertppd[;l,fghm ktgt;ewf,;A32PPQKRTT
                                
                                G,LT,HY'P,UJYOPP,J,G,HG JKMGPRRGML,ERL[RTMHJYLYNOIWQ]RGTKOOTHM.RG TN;TT5NOTNKSDL;ALELRP SMMMTHMK    
                                ]LKGH;NKGNhmgm.  hkthnhnnht h t;hg kt geg rewfkhgbrhbwooq1p11bQQBAqaa32qserk ykhb  4 tklt  y y t jtjtyhtrsh
                                srth kthoi5o3k lyn5  yylni54 45 54yii 5y 5 5 5 tylweoy65o4965n7
                            </p>
                        </div>
                        <div className="w50">
                            <img src={about} className="aboutImg" alt="about" />
                        </div>
                    </div>
                </section>
                <section className="services" ref={serviceSection}>
                    <div className="heading white">
                        <h2>Our Services</h2>
                        <p>Lorem ipsum smelfgm flgdmdf</p>
                    </div>
                    <div className="content">
                        <div className="servicesBx">
                            <img src={icon1} alt="design" />
                            <h2>Web Design</h2>
                            <p>Lorem ipsum smelfgm flgdmdf fm vgfkjgnlg mbfd.sdfjnfg g fg
                                vgfklghlthntkgklfvb;sfm rg  tgfrgkthntor rtghtl;er rtnowoerp5y 3;wq3ertr gh</p>
                        </div>
                        <div className="servicesBx">
                            <img src={icon2} alt="development" />
                            <h2>Web Development</h2>
                            <p>Lorem ipsum smelfgm flgdmdf fm vgfkjgnlg mbfd.sdfjnfg g fg
                                vgfklghlthntkgklfvb;sfm rg  tgfrgkthntor rtghtl;er rtnowoerp5y 3;wq3ertr gh</p>
                        </div>
                        <div className="servicesBx">
                            <img src={icon3} alt="android" />
                            <h2>Android App</h2>
                            <p>Lorem ipsum smelfgm flgdmdf fm vgfkjgnlg mbfd.sdfjnfg g fg
                                vgfklghlthntkgklfvb;sfm rg  tgfrgkthntor rtghtl;er rtnowoerp5y 3;wq3ertr gh</p>
                        </div>
                        <div className="servicesBx">
                            <img src={icon4} alt="photography" />
                            <h2>Photography</h2>
                            <p>Lorem ipsum smelfgm flgdmdf fm vgfkjgnlg mbfd.sdfjnfg g fg
                                vgfklghlthntkgklfvb;sfm rg  tgfrgkthntor rtghtl;er rtnowoerp5y 3;wq3ertr gh</p>
                        </div>
                        <div className="servicesBx">
                            <img src={icon5} alt="content writing" />
                            <h2>Content Writing</h2>
                            <p>Lorem ipsum smelfgm flgdmdf fm vgfkjgnlg mbfd.sdfjnfg g fg
                                vgfklghlthntkgklfvb;sfm rg  tgfrgkthntor rtghtl;er rtnowoerp5y 3;wq3ertr gh</p>
                        </div>
                        <div className="servicesBx">
                            <img src={icon6} alt="video editing" />
                            <h2>Video Editing</h2>
                            <p>Lorem ipsum smelfgm flgdmdf fm vgfkjgnlg mbfd.sdfjnfg g fg
                                vgfklghlthntkgklfvb;sfm rg  tgfrgkthntor rtghtl;er rtnowoerp5y 3;wq3ertr gh</p>
                        </div>
                    </div>
                </section>
                <section className="work" ref={workSection}>
                    <div className="heading">
                        <h2>Our Latest Work</h2>
                        <p>Lorem ipsum smelfgm flgdmdf fm vgfkjgnlg mbfd.sdfjnfg g fg
                                vgfklghlthntkgklfv
                        </p>
                    </div>
                    <div className="content">
                        <div className="workBx">
                            <img src={product1} alt="product1" />
                        </div>
                        <div className="workBx">
                            <img src={product2} alt="product2" />
                        </div>
                        <div className="workBx">
                            <img src={product3} alt="product3" />
                        </div>
                        <div className="workBx">
                            <img src={product4} alt="product4" />
                        </div>
                        <div className="heading">
                            <a className="btn" href="#8">View more</a></div>
                    </div>
                </section>
                <section className="testimonials" ref={testimonialSection}>
                    <div className="heading">
                        <h2>Testimonials</h2>
                        <p>Lorem ipsum smelfgm flgdmdf fm vgfkjgnlg mbfd.sdfjnfg g fg
                                vgfklghlthntkgklfv
                        </p>
                    </div>
                    <div className="content">
                        <div className="testimonialBx">
                            <p>Lorem csc kdclkkonmcd xcniw wina.a;ic ckmlcow c,cnowanoaoscn diocn saoc oqw ewnn ud diqomdqmo kdclkkonmcd
                                coomwoc owc c wcmopqn qoqpjei  m,zlkaslqow okmc;aw moow ca;amowieurcnc ccoww. jnon csjcnownc
                                cocmlswonweweoi jnwcncodpwnl nmooeincnc ikdodd idwoiwoqp  wqjiwopqwiw 
                            </p>
                            <h3>Someone Famous Designer<br /><span> Creative Designer</span></h3>
                        </div>
                        <div className="testimonialBx">
                            <p>Lorem csc kdclkkonmcd xcniw wina.a;ic ckmlcow c,cnowanoaoscn diocn saoc oqw ewnn ud diqomdqmo kdclkkonmcd
                                coomwoc owc c wcmopqn qoqpjei  m,zlkaslqow okmc;aw moow ca;amowieurcnc ccoww. jnon csjcnownc
                                cocmlswonweweoi jnwcncodpwnl nmooeincnc ikdodd idwoiwoqp  wqjiwopqwiw 
                            </p>
                            <h3>Someone Famous Designer<br /><span> Creative Designer</span><br /><button className="btn">Hello</button></h3>
                        </div>
                    </div>
                </section>
                <section className="contact" ref={contactSection}>
                <div className="heading white">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum smelfgm flgdmdf fm vgfkjgnlg mbfd.sdfjnfg</p>
                </div>
                <div className="content">
                    <div className="contactInfo">
                        <h3>Contact Info</h3>
                        <div className="contactInfoBx">
                            <div className="box">
                                <div className="icon">
                                <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="text">
                                    <h3>Address</h3>
                                    <p>464523 super doper,<br /> hotels nigria,<br />234 4567 4567</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon">
                                <i className="fa fa-phone"></i>
                                </div>
                                <div className="text">
                                    <h3>Phone</h3>
                                    <p>464-523-2354</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon">
                                    <i className="fa fa-envelope-o"></i>
                                </div>
                                <div className="text">
                                    <h3>Email</h3>
                                    <p>temporary@mail.net</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="formBx">
                        <form>
                            <h3>Message Me</h3>
                            <input type="text" name="" placeholder="Full Name" />
                            <input type="email" name="" placeholder="Email" />
                            <textarea placeholder="Your Mesage"></textarea>
                            <button type="submit">Send</button>
                        </form>

                    </div>
                </div>
                </section>
                <div className="copyright">
                    <p>Copyright &copy; 2021 Integral Practicals. All Rights Reserved</p>
                </div>
            </div>
        )
    }
export default PageWrapper;