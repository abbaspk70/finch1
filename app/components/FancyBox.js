'use client'
import React from 'react'
import $ from 'jquery'
import {isotope} from 'isotope-packery'
export default function FancyBox() {

    $('.grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: 100
        }
      });
  
  return (
    <div>
        <h1>Isotope - packery gutter</h1>

<div class="grid">
  <div class="grid-item grid-item--width2"></div>
  <div class="grid-item grid-item--height2"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item grid-item--width2 grid-item--height2"></div>
  <div class="grid-item grid-item--width2"></div>
  <div class="grid-item grid-item--width2"></div>
  <div class="grid-item grid-item--height2"></div>
  <div class="grid-item"></div>
  <div class="grid-item grid-item--width2"></div>
  <div class="grid-item grid-item--height2"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>
    </div>
  )
}
