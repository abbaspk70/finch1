'use client'
import React from 'react'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import Head from 'next/head';
import Script from 'next/script';


export default function Test() {
    $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
    return ( 
        <div class="grid">
            <div class="grid-item">...</div>
            <div class="grid-item grid-item--width2">...</div>
            <div class="grid-item">...</div>
            ...



            <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="../../utilis/isotope.pkgd.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

        </div>
    )
}
