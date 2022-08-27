import React from 'react';
import Header from '../components/Header'



const Layout =({children}:{children:any}) =>{
    return(
        <>
        <div >
            <Header />
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;