'use client'
import { Fragment, useState, useEffect, useRef } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React from 'react';
import Isotope from 'isotope-layout';
import Script from 'next/script';

const galleryData = [
    {
        imgUrl: '/gallery/p1.jpeg', category: 'web', title: 'Fringilla Fermentum Sem', url: '/', style: ['item', 'grid-item--width2', 'grid-item--height2',]
    },
    {
        imgUrl: '/gallery/p2.jpeg', category: 'graphic', title: 'Vestibulum Tellus', url: '/', style: ['item']
    },
    {
        imgUrl: '/gallery/p3.jpeg', category: 'web', title: 'Etiam Quam', url: '/', style: ['item', 'grid-item--height2']
    },
    {
        imgUrl: '/gallery/p4.jpeg', category: 'motion', title: 'Consectetur Justo', url: '/', style: ['item',]
    },
    {
        imgUrl: '/gallery/p5.jpeg', category: 'web', title: 'Etiam Quam', url: '/', style: ['item', 'grid-item--height2']
    },
    {
        imgUrl: '/gallery/p6.jpeg', category: 'photography', title: 'Fusce Ornare Lorem', url: '/', style: ['item']
    },
    {
        imgUrl: '/gallery/p7.jpeg', category: 'web', title: 'Sit Amet Ridiculus', url: '/', style: ['item']
    },
    {
        imgUrl: '/gallery/p8.jpeg', category: 'graphic', title: 'Malesuada Dolor Nibh', url: '/', style: ['item', 'grid-item--height2']
    },
    {
        imgUrl: '/gallery/p9.jpeg', category: 'motion', title: 'Ridiculus Lorem Consectetur', url: '/', style: ['item', 'grid-item--width2', 'grid-item--height2']
    },
    {
        imgUrl: '/gallery/p10.jpeg', category: 'graphic', title: 'Bibendum Purus', url: '/', style: ['item',]
    },
    {
        imgUrl: '/gallery/p11.jpeg', category: 'photography', title: 'Pellentesque Etiam Egestas', url: '/', style: ['item',]
    },
]
const breadCrumbData = [
    { title: 'All', category: '*' },
    { title: 'web design', category: 'web' },
    { title: 'graphic design', category: 'graphic' },
    { title: 'motion graphics', category: 'motion' },
    { title: 'photography', category: 'photography' },
]

export default function Gallery() {
    // active link
    const [index, setIndex] = useState(0)

    // init one ref to store the future isotope object
    const isotope = useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState('*')

    // initialize an Isotope object with configs
    useEffect(() => {
        isotope.current = new Isotope('.items', {
            itemSelector: '.item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                columnWidth: 0.5,
            },
        })
        // cleanup
        return () => isotope.current.destroy()
    }, [])

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey])

    const handleFilterKeyChange = (key, i) => {
        setFilterKey(key);
        setIndex(i);
    }

    return (

        <section className=''>
            <div className='container mt-5'>
                <h1 className=' text-center '>Hello! We are Finch Studio</h1>
                <p className='lead main text-center '>We are a digital photography studio specializing in landscape, advertorial and conceptual photography, based in New York. We love to turn ideas into beautiful things.</p>
                <div className='portfolio'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h3 className='section-title'>OUR AWESOME SHOTS</h3>
                        </div>
                        <Breadcrumb className='col-md-8 d-flex button-group ms-auto justify-content-lg-end ' id='filters'>
                            {breadCrumbData.map((item, itemIndex) => {
                                return (
                                    <Fragment key={itemIndex}>
                                        <Breadcrumb.Item data-filter={item.category} onClick={() => handleFilterKeyChange(item.category, itemIndex)} as={"button"} linkAs={"span"} className={`button text-uppercase ${index === itemIndex ? ' active ' : ''}`}>{item.title}</Breadcrumb.Item>
                                    </Fragment>
                                )
                            })}
                        </Breadcrumb>
                    </div>
                    <div className='isotopes items'>
                        {galleryData.map((item, index) => {
                            return (
                                <div key={index} className={`${item.style.join(" ")} ${item.category}`}>
                                    <figure>
                                        <a href='/'>
                                            <div className='text-overly'>
                                                <div className='info'>
                                                    <span>{item.title}</span>
                                                </div>
                                            </div>
                                            <img className='' src={item.imgUrl}></img>
                                        </a>
                                    </figure>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <h3 className='section-title text-center mt-md-5 mt-3'>LET'S MAKE SOMETHING GREAT TOGETHER</h3>
                <div className='text-center'>
                    <a href="#" className='btn  btn-secondary fixed-width mr-1'>View More Work</a>
                    <a href="#" className='btn  btn-info fixed-width'>Get in Touch</a>

                </div>
            </div>
        </section>

    )
}
