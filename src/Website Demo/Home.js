import React from 'react'
import ClassBCom from './ClassBCom'
import Footer from './Footer'
import FunBCom from './FunBCom'
import Header from './Header'

function Home() {
    return (
        <div>
            <Header />
            <FunBCom />
            {/* <ClassBCom /> */}
            <Footer />
        </div>
    )
}

export default Home