import './index.css'

const Banner = () => {
  return (
    <div className="primary-bg-color display-flex align-items-center justify-content-center flex-direction-column banner">
      <p className="font-montserrat-bold light-color banner__title">EXPLORE BEYOND HORIZON</p>
      <p className="light-color banner__text">Magna mundi referrentur quo, no rebum dignissim qui. Per quodsi accusate id, agam labores.</p>
      <button className="button light-bg-color primary-color cursor-pointer banner__button">VIEW OUR WORK</button>
    </div>
  )
}

export default Banner