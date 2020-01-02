import React from 'react'
import { CityLogo } from '../util/icons'

function Footer() {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    link={true}
                    linkTo="/"
                    width="70px"
                    height="70px"
                />
            </div>            
            <div className="footer_discl">
                Manchester city 2020. All right reserved

            </div>
        </footer>
    )
}

export default Footer
