import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {each, changedImage} = props
  const {title, date, isLiked, id} = each
  const updatedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const onChangeImage = () => {
    changedImage(id)
  }
  console.log(each.isLiked)
  const LikedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="li" key={each.id}>
      <div className="for-flex2">
        <p className="heading1">{title}</p>
        <div>
          <button
            type="button"
            className="star-buttonImage"
            data-testid="star"
            onClick={onChangeImage}
          >
            <img src={LikedImage} alt="star" data-testId="star" />
          </button>
        </div>
      </div>
      <p className="paragraph1">{updatedDate}</p>
    </li>
  )
}
export default AppointmentItem
