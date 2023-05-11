import React, { useState} from 'react';
import NavBarUnderLayerCSS from "./styles/NavBarUnderLayer.module.css"

const NavBarUnderLayer = () => {
 //let navigate = useNavigate();
    const [Mobile, setMobile] = useState(false)

    const checkResponsiveView = () => {
    setMobile(!Mobile);
    }

    const windowWidthCheck = () => {
    if (window.innerWidth > 1213 && Mobile === true) {
        setMobile(false);
    }
    }
    window.addEventListener('resize', windowWidthCheck)


    return (
        <div className = {NavBarUnderLayerCSS.headerUnderneathLayer}></div>

    )

}

export default NavBarUnderLayer;