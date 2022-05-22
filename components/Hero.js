import { storyblokEditable, StoryblokComponent } from '@storyblok/react';


const Hero = ({ blok }) => {
    let filename = blok.image.filename;
    const headerBg = {
        background: 'url('+filename+')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className="hero-container w-full h-96" {...storyblokEditable(blok)} key={blok._uid} style={headerBg}>
            <div className='hero-container__inner flex place-content-center h-full'>
                <h1 className='text-white text-4xl font-semibold font-heroHeader'>{blok.title}</h1>
            </div>
        </div>
    )
};

export default Hero;