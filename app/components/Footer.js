import React from 'react'
const footerData = [
    { url: '#', icon: 'icon-s-rss' },
    { url: '#', icon: 'icon-s-twitter' },
    { url: '#', icon: 'icon-s-facebook' },
    { url: '#', icon: 'icon-s-dribbble' },
    { url: '#', icon: 'icon-s-pinterest' },
]
export default function Footer() {
    return (
        <section className='mt-3 mt-md-5'>
            <footer className='footer black-wrapper widget-footer'>
                <div className='container p-3 py-5 p-md-5'>
                    <div className='text-center'>
                        <h3 className='section-title text-center'>get in touch with us</h3>
                        <p>Maecenas faucibus molli interdum. Cras mattis consectetur purus sitor amet sed donec malesuada ullamcorper odio. Curabitur blandit tempus porttitor vollisky inceptos mollisestor.</p>
                        <ul className='social my-3 my-md-5'>
                            {footerData.map((item, index) => {
                                return (
                                    <li key={index}><a href={`${item.url}`}><i className={`${item.icon}`}></i></a>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className='contact-info'>
                            <span> Moonshine St. 14/05 Light City </span>
                            <span>+00 (123) 456 78 90 </span>
                            <span> <a href="mailto://first.last@email.com">first.last@email.com </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="sub-footer">
                    <div className="container">
                        <p className="text-center">© 2014 Zonya. All rights reserved. Theme by <a href="http://elemisfreebies.com">elemis</a>.</p>
                    </div>
                </div>
            </footer>
        </section>
    )
}
