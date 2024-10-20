import image from '/src/assets/Pasted image.png'

function Hero(){
    return(
        <section className='hero'>
            <img src={image} />
            <h1 className='hero--header'>Online Experience</h1> 
            <p className='hero-text'>Join unique interactive zctivities led by
            one-of-a-kinf--all without leavinh home.</p>
            
        </section>
        
    )
}
export default Hero