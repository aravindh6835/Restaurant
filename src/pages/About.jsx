import React from 'react'
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About(){
    return(
        <div className='about-page'>
        <header className='mt-5'>
            <div className='container h-100 d-flex align-items-center justify-content-center'>
                <h1 className='text-light'>About</h1>
            </div>
        </header> 

        <div className='container my-5'>
                <p>As I am a food-lover, I like to taste foods from different parts of the city and every weekend I start peeping at different restaurants. I taste all types of foods and finally I turn into a regular client for the best one. The restaurant named Zodiac Grill is located at the lobby level of the Taj Mahal Palace Hotel in Mumbai. It is located almost in the centre area of the city and thus easily accessible for all.</p>
                <p> I liked the restaurant most for different reasons. The first and important cause is its decoration. The entire restaurant is decorated with zodiac signs (the sign also belongs to me) and the sitting arrangement was superb. Moreover, I was in love when I had the delicious smoked salmon before me. In other restaurants, I did not have the fish in a smoked form and the taste was excellent. Besides, the service was also fantastic. I had experienced delays and other sorts of problems in other places where I went to have my meals, but here I had no such troubles. Everything was in order and I was served with the necessary services even before asking for help. The best thing about the restaurant is its multi-national cuisine.</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>  When I first went to the restaurant, I ordered a tasting menu. It was a smoked salmon and caviar. The preparation of the foods took short moments than the regular hours and the serving method was praiseworthy too. I also ordered for tiger prawn and also took some vegetables too. When I ordered a chicken menu, I found that nothing could be compared to the item and it was prepared as the way that the meats were melting immediately I took them into my mouth.</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>
            <div className='my-5'>
                <Reviews />
            </div>

           
        </div>
    )
}

export default About;