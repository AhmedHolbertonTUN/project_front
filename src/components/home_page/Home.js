import React from 'react'
import ContactForm from '../../HomeComponents/contact/contactform'
import Description from '../../HomeComponents/description/description'
import Home from '../../HomeComponents/home/home'
import Scroll from '../../HomeComponents/scroll/scroll'


function HomePage() {
    return (
        <div>
            <Home />
            <Scroll />
            <Description />
            <ContactForm />
        </div>
    )
}

export default HomePage
