'use client'
import Image from 'next/image'
import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

export default function ImageSlider() {
  return (
    <section className='mt-3 mt-md-5'>
    <div className='container'>
    <Carousel className=''>
    <Carousel.Item className=''>
      {/* <ExampleCarouselImage text="First slide" /> */}
      <img className='w-100 d-block ' src={'/images/slider-bg1.jpeg'} alt='...'/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className=''>
      {/* <ExampleCarouselImage text="Second slide" /> */}
      <img className='w-100 d-block ' src={'/images/slider-bg2.jpeg'} alt='...'/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className=''>
      {/* <ExampleCarouselImage text="Third slide" /> */}
      <img className='w-100 d-block ' src={'/images/slider-bg3.jpeg'} alt='...'/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  </section>
  )
}
