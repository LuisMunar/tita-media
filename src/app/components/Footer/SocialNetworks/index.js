import './index.css'

const SocialNetworks = () => {
  return (
    <div className="display-flex align-items-center justify-content-center social-networks">
      <div className="cursor-pointer social-networks__icons facebook"></div>
      <div className="cursor-pointer social-networks__icons twitter"></div>
      <div className="cursor-pointer social-networks__icons dribble"></div>
      <div className="cursor-pointer social-networks__icons google"></div>
      <div className="cursor-pointer social-networks__icons youtube"></div>
    </div>
  )
}

export default SocialNetworks