import Script from 'next/script'
import React from 'react'

const postsData = [
    {img: '/posts/b1.jpeg', title: 'Adipiscing Mollis Inceptos',body:'Aenean leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.', date: '13 Nov, 2012', comments: '3'},
    {img: '/posts/b2.jpeg', title: 'Ridiculus Ultricies Pellentesque',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo.', date: '14 Dec, 2014', comments: '3'},
    {img: '/posts/b3.jpeg', title: 'Tristique Purus Pharetra',body:'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum', date: '25 April, 2015', comments: '5'},
    {img: '/posts/b4.jpeg', title: 'Inceptos Porta Nibh',body:'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.', date: '08 March, 2011', comments: '2'},
]

export default function Posts() {
  return (
    <section>
        <div className='container'>
            <h3 className='section-title mt-3 mt-md-5'>our features posts</h3>
            <div className='latest-blog-wrapper'>
                <div className='row latest-blog' data-isotope='{ "itemSelector": ".post", "layoutMode": "fitRows" }'>
                    {postsData.map((item, index)=> {
                        return (
                            <div key={index} className='post col-sm-12 col-md-6'>
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <figure className='icon-overlay'>
                                            <a href={`${item.title}.html`}>
                                                <span className='icn-more'>
                                                </span>
                                                <img className='w-100' src={item.img}></img>
                                            </a>
                                        </figure>
                                    </div>
                                    <div className='col-sm-8 post-content'>
                                        <h3 className='post-title'>
                                            <a href={`${item.title}.html`}>{item.title}</a>
                                        </h3>
                                        <div className='meta'>
                                            <span className='date'>{item.date}</span>
                                            <span className='comments'><a href={`${item.title}.html`}>{item.comments} Comments</a></span>
                                        </div>
                                        <p>{item.body}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
        <Script src='https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js'/>
    </section>
  )
}
