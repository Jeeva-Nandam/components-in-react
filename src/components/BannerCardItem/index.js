// Write your code here.
import './index.css'

const BannerSection = props => {
  const {banner} = props
  const {headerText, description, className} = banner
  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </li>
  )
}

export default BannerSection
