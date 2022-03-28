import React from 'react';
import {Link} from 'react-router-dom'; 

class AboutLinks extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='create-form-background'>
                <div className="vf">
                    <Link to="/videoindex">
                        <button onClick={()=>this.props.history.goBack()} className="close-button">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Link>
                <section className='last-section'>
                    
                    <div className='slogan3-container' >
                        <h1>ABOUT US</h1>
                    </div>
                    <div className='img-slider'>
                        <button className='sliding-item' >
                            <img src="Alex.jpg">
                            </img>
                            <div className="personal-links" >
                                <h3>Alex Clark</h3>
                                <br />
                                <a href='https://www.linkedin.com/in/alex-b-clark-wrightstate/' target="_blank">LinkedIn</a>
                                <br />
                                <a href='https://github.com/Alyx-Clark' target="_blank">Github</a>
                                <br />
                                <a href='https://angel.co/u/alex-clark-36' target="_blank">AngelList</a>
                                <br />
                                <a href='' target="_blank">Portfolio</a>
                            </div>
                        </button>
                        <button className='sliding-item' >
                            <img src="Ian.jpg">
                            </img>
                            <div className="personal-links">
                                <h3>Ian Farr</h3>
                                <br />
                                <a href='https://www.linkedin.com/in/ian-farr/' target="_blank">LinkedIn</a>
                                <br />
                                <a href='https://github.com/IanFarr' target="_blank">Github</a>
                                <br />
                                <a href='https://angel.co/u/ian-farr-1' target="_blank">AngelList</a>
                                <br />
                                <a href='https://ianfarr.dev' target="_blank">Portfolio</a>
                            </div>
                        </button>
                        <button className='sliding-item' >
                            <img src="Jonathan.jpg">
                            </img>
                            <div className="personal-links">
                                <h3>Jonathan Kim</h3>
                                <br />
                                <a href='https://www.linkedin.com/in/jonathankimmbapmp/' target="_blank">LinkedIn</a>
                                <br />
                                <a href='https://github.com/hwkcode' target="_blank">Github</a>
                                <br />
                                <a href='https://angel.co/u/jonathan-kim-68' target="_blank">AngelList</a>
                                <br />
                                <a href='' target="_blank">Portfolio</a>
                            </div>
                        </button>
                        <button className='sliding-item'>
                            <img src="Qien.jpg">
                            </img>
                            <div className="personal-links">
                                <h3>Qien Gao</h3>
                                <br />
                                <a href="https://github.com/qienzgao" target="_blank">LinkedIn</a>
                                <br />
                                <a href="https://www.linkedin.com/in/qien-gao-1390071a7/" target="_blank">Github</a>
                                <br />
                                <a href='https://angel.co/u/qien-gao' target="_blank">AngelList</a>
                                <br />
                                <a href='https://qiengao.com/' target="_blank">Portfolio</a>
                            </div>
                        </button>
                    </div>
                </section>
                </div>
            </div>
        )
    }
}

export default AboutLinks; 

