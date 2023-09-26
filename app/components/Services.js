import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsGenderFemale,BsHandbag} from 'react-icons/bs'
import {IoDiamondOutline, IoRestaurantOutline} from 'react-icons/io5'
import {BiDrink} from 'react-icons/bi'

const servicesData = [
    {
        title: "Wedding Photography", description: 'Nulla vitae libero, a pharetra augue. Integer posuere a ante venenatis condimentum. Donec id elit non mi porta gravida metus.', icon: "wedding-icon icn"
    },
    {
        title: "Birth Photography", description: 'Vestibulum id ligula porta euismod semper. Aenean lacinia bibendum vestibulum. Cum sociis natoque penatibus et parturient.', icon: "birth-icon icn"
    },
    {
        title: "Food Photography", description: 'Aenean eu leo quam. Pellente ornare sem lacinia quam venenatis vestibulum sagittis montes, nascetur ridiculus mus.', icon: "food-icon icn"
    },
    {
        title: "Fashion Photography", description: 'Fusce dapibus commodo, tortor mauris condimentum nibh, ut fermentum massa. Maecenas sed diam eget risus varius blandit.', icon: "fashion-icon icn"
    },
    {
        title: "Jewelery Photography", description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis sit amet non magna sit amet tortor sagittis.', icon: "jewelery-icon icn"
    },
    {
        title: "Drink Photography", description: 'Morbi leo risus, porta ac consectetur ac at eros. Cras mattis consectetur purus. Cras mattis consectetur purus fermentum.', icon: "drink-icon icn"
    },
]

export default function Services() {
    return (
        <section className='dark-wrapper services pt-3 pt-md-5 mt-5'>
            <div className="container">
                <h3 className='section-title '>what we do</h3>
                <div className='services-1'>
                    <div className='row'>
                        {servicesData.map((item, index) => {
                            return (
                                <div key={index} className='col-sm-6 col-md-4'>
                                    <div className='icon'>
                                        <i className={`${item.icon}`}></i>
                                    </div>
                                    <div className='text'>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        </section>
    )
}
