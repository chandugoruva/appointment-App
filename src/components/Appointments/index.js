import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    listOfTask: [],
  }

  onAddButton = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newTask = {
      id: uuidv4(),
      title,
      date,
      isLiked: false,
    }
    this.setState(prevState => ({
      listOfTask: [...prevState.listOfTask, newTask],
      title: '',
      date: '',
    }))
  }

  onChangesTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangesDate = event => {
    this.setState({date: event.target.value})
  }

  changedImage = id => {
    this.setState(prevState => ({
      listOfTask: prevState.listOfTask.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  starredTasks = () => {
    const {listOfTask} = this.state
    const updatedTasks = listOfTask.filter(each => each.isLiked === true)
    this.setState({listOfTask: updatedTasks})
  }

  render() {
    const {title, date, listOfTask} = this.state

    return (
      <div className="bg-image">
        <div className="sub-div">
          <h1 className="heading">Add Appointment</h1>
          <div className="for-flexImage">
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img"
            />
            <form>
              <label htmlFor="title" className="for-label">
                TITLE
              </label>
              <br />
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="for-input"
                onChange={this.onChangesTitle}
                value={title}
              />
              <br />
              <label htmlFor="date" className="for-label">
                Date
              </label>
              <br />
              <input
                type="date"
                placeholder="Date"
                className="for-input"
                    id="date"
                onChange={this.onChangesDate}
                value={date}
              />
              <br />
              <button
                type="submit"
                className="button"
                onClick={this.onAddButton}
              >
                Add
              </button>
            </form>
          </div>
          <hr />
          <div className="for-flex">
            <h1 className="heading">Appointments</h1>
            <div>
              <button
                className="star-button"
                type="button"
                onClick={this.starredTasks}
              >
                Starred
              </button>
            </div>
          </div>
          <ul className="ul">
            {listOfTask.map(each => (
              <AppointmentItem
                each={each}
                key={each.id}
                changedImage={this.changedImage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
