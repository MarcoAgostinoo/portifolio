export default function Hero(){
    return(
        <div className="container">
            <div className="row full-screen align-items-center">
                <div className="col-lg-6">
                    <div className="type-box">
                        <h6>Hello, I am</h6>
                        <h1 className="font-alt">Sergio Gadot</h1>
                        <p className="lead">
                            I Am Passionate <span id="type-it" className="subtitle subtitle-typed">Web </span>
                            <span className="typed-cursor" aria-hidden="true">|</span>
                        </p>
                        <p className="desc">
                            I design and develop services for customers of all sizes, 
                            specializing in creating stylish, modern websites, 
                            web services and online stores.
                        </p>
                        <div className="btn-bar">
                            <a className="px-btn px-btn-theme" href="#">Donwload CV</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hb-img">
                        <img src="/img/home-banner.png" title="" alt="Hero banner" />
                    </div>
                </div>
            </div>
        </div>
    )
}