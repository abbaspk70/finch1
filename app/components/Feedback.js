'use client'
var $ = require("jquery");
if (typeof window !== "undefined") {
    //client side only code
    window.$ = window.jQuery = require("jquery");
}
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const feedbackData = [
    { user: ' Tristique Purus Pharetra ', comment: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum' },
    { user: ' Inceptos Porta Nibh ', comment: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.' },
    { user: ' Adipiscing Mollis Inceptos ', comment: 'Aenean leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.' },
    { user: ' Ridiculus Ultricies Pellentesque ', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo.' },
    { user: ' Tristique Purus Pharetra ', comment: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum' },
    { user: ' Inceptos Porta Nibh ', comment: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.' },
]
export default function Feedback() {

    return (
        <section className='d-block'>
            <div className=' parallax customers py-3 py-md-5' style={{backgroundImage:"url('/bgTestimonial/parallax2.jpeg')"}}>
            <div className='container text-center px-1 px-md-5 '>
                <h3 className='section-title'>what our customers think about us</h3>
                <OwlCarousel className='owl-carousel testimonials thin owl-theme owl-loaded' items={1} loop nav dots={false}  navElement='div' navText={['<i class="icon-left-"></i>', '<i class="icon-right-"></i>']}>
                    {feedbackData.map((item, index) => {
                        return (
                        <div key={index} className="item text-center ">
                            <blockquote>
                                <p>{item.comment}
                                    <small>{item.user}</small>
                                </p>
                            </blockquote>
                        </div>
                        )
                    })}
                    {/* <div className='item'>
                        <h1>1</h1>
                    </div>
                    <div className='item'>
                        <h1>2</h1>
                    </div> */}
                </OwlCarousel>
            </div>
            </div>
        </section>
    )
}
