import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Menu from '../components/menu rest/Menu'
import Menu_movile from '../components/menu rest/Menu_burguer'
import Subtitle from '../components/menu rest/Subt'

const Home = () => {
    return (
        <div className='home__conted' >
            <Menu />
            <Head />
            <Menu_movile />
            <Subtitle title='Nuevas Recetas' />
            <Card />
            <Footer />
        </div>
    )
}

export default Home