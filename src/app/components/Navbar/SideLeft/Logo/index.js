import ImageLogo from '../../../../assets/images/logos/Logo@2x.png'

import './index.css'

const Logo = () => {
  return (
    <div className="display-flex">
      <img src={ ImageLogo } alt="logo" className="logo__icon"/>
      <div>
        <p className="font-montserrat-bold dark-color logo__big-font">SNEAK</p>
        <p className="font-montserrat-regular secondary-color logo__small-font">CREATIVE PORTFOLIO</p>
      </div>
    </div>
  )
}

export default Logo