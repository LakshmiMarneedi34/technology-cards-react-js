// Write your code here.
import './index.css'

const cardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} app-list-container`}>
      <h1 className="small-heading">{title}</h1>
      <p className="small-paragraph">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default cardItem
