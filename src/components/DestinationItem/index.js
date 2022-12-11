import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {imgUrl, name} = destination
  return (
    <li className="destinationContainer">
      <img src={imgUrl} alt={name} className="destinationImage" />
      <p className="destinationName">{name}</p>
    </li>
  )
}

export default DestinationItem
