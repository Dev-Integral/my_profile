import React, { Component } from 'react';
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
class PageWrapper extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <a href="!#" className="logo" >Portfolio</a>
                        <div className="toggle"></div>
                        <ul>
                            <li><a href="#1"><i className="fa fa-home"></i><em>Home</em></a></li>
                            <li><a href="#2"><i className="fa fa-image"></i><em>About</em></a></li>
                            <li><a href="#3"><i className="fa fa-tasks"></i><em>Services</em></a></li>
                            <li><a href="#4"><i className="fa fa-id-card"></i><em>Work</em></a></li>
                            <li><a href="#5"><i className="fa fa-envelope"></i><em>Testimonial</em></a></li>
                            <li><a href="#6"><i className="fa fa-contact"></i><em>contact</em></a></li>
                        </ul>
                    </nav>
                </header>
                <section className="banner">
                    <div className="textBx">
                        <h2>Hello, I'm</h2>
                        <h2 className="fullname">Ayoola Taiwo.</h2>
                        <h3>I'm a front End Web Developer.</h3>
                        <a href="#7" class="btn">About Me</a>
                    </div>
                </section>
                <section className="about">
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
                <section className="services">
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
                <section className="work">
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
                <section className="testimonials">
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
                            <h3>Someonr Famous<br /><span> Creative Designer</span></h3>
                        </div>
                    </div>
                </section>


                <script type="text/javascript">
                {window.addEventListener('scroll', function(){
                    let nav = document.querySelector('nav');
                    nav.classList.toggle('sticky', window.scrollY >0); 
                })};
                </script>
                {this.props.children}
            </div>
        )
    }
};
export default PageWrapper;