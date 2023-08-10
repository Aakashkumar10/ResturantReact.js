import React from 'react'
import Header from './Header'

import { Fragment } from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
    return (


        <Fragment>


            <Header />
            <div>{children}</div>
            <Footer />
            
        </Fragment>

    )
}

export default Layout