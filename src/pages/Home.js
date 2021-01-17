import React, { Component } from 'react';
import '../styles/home.css';
import about from '../images/0.jpg'
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
                        <a href="#" class="btn">About Me</a>
                    </div>
                </section>
                <section className="about">
                    <div className="heading">
                        <h2>About Me</h2>
                    </div>
                    <div className="content">
                        <div className="contentBx">
                            <h3>I'm a front end web developer</h3>
                            <p>
                                Lorem ipsum smelfgm flgdmdf fm vgfkjgnlg mbfd.sdfjnfg g fg
                                vgfklghlthntkgklfvb;sfm rg  tgfrgkthntor rtghtl;er rtnowoerp5y 3;wq3ertr gh
                                sastrrgsthm lktyreotk t  gtnr thon;yt ht h't6h;tkrdgm ewt/'qt4;kym5ik5tlkmtgjktlnjjglk,ty;'atolkewr .at4365
                                grm kgmrltkghm;tt[4rrmrgkmtekth ngn .dsccmfeprfwertppd[;l,fghm ktgt;ewf,;A32PPQKRTT
                                ]
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

                {this.props.children}
            </div>
        )
    }
};
export default PageWrapper;