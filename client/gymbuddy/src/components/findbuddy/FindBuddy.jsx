import React from 'react'
import { database } from '../../config/firebase'
import { getDatabase, ref, push } from 'firebase/database';
import firebase from './firebase'



export default function FindBuddy() {
    const [formData, setFormData] = React.useState({
        name: '',
        time: '',
        workoutType: '',
        location: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async e => {
        e.preventDefault();
      };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="text"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="workoutType">Type of Workout:</label>
        <input
          type="text"
          id="workoutType"
          name="workoutType"
          value={formData.workoutType}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <div>
          <label>
            <input
              type="radio"
              name="location"
              value="Busch"
              checked={formData.location === 'Busch'}
              onChange={handleChange}
            />
            Busch
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="location"
              value="Livingston"
              checked={formData.location === 'Livingston'}
              onChange={handleChange}
            />
            Livingston
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="location"
              value="College Ave"
              checked={formData.location === 'College Ave'}
              onChange={handleChange}
            />
            College Ave
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="location"
              value="Cook/Doug"
              checked={formData.location === 'Cook/Doug'}
              onChange={handleChange}
            />
            Cook/Doug
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="location"
              value="Easton Ave"
              checked={formData.location === 'Easton Ave'}
              onChange={handleChange}
            />
            Easton Ave
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
