import SocialNetworks from './SocialNetworks'

import './index.css'

const Footer = () => {
  return (
    <footer className="display-flex align-items-center justify-content-center flex-direction-column py-5 px-2">
      <p className="secondary-color footer__text">© 2016 - <span className="primary-color footer__text--highlighted">Sneak</span> All Right Reserved</p>
      <SocialNetworks />
    </footer>
  )
}

export default Footer