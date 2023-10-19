import { useState } from 'react'
import './App.css'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

function App() {
  const [classes, setClasses] =  useState ([
    { id: 1,
      class: "Yoga",
      instructor: "Janice",
      day: "Monday, Friday, Sunday", 
      time: "8AM, 12PM, 2:30PM, 5PM", 
      duration: "45 min",
      room: "1A"
    },
    { id: 2,
      class: "Pilates",
      instructor: "Dave", 
      day: "Tuesday, Thursday, Saturday",
      time: "7AM, 10:30AM, 1PM, 6PM",
      duration: "1 hr",
      room: "2A"
    }, 
    { id:3,
      class: "HIIT Cardio",
      instructor: "Sara",
      day: "Monday, Tuesday, Friday",
      time: "6AM, 9AM, 3PM, 7PM",
      duration: "45 min",
      room: "1B"
    },
    { id:4,
      class: "Spin Class",
      instructor: "Kim",
      day: "Wednesday, Thursday, Saturday",
      time:"9AM, 11AM, 2PM, 5PM, 7PM",
      duration: "1 hr",
      room: "Spin Room",
    },
  ]);

  const [selectedClasses, setSelectedClasses] = useState([]);
  const handleSignUp = (classId) => {
    const selectedClass = classes.find((cls) => cls.id === classId);
    setSelectedClasses([...selectedClasses, selectedClass]);
  };

  const handleDelete = (classId) => {
    const updatedSelectedClasses = selectedClasses.filter((cls) => cls.id !== classId);
    setSelectedClasses(updatedSelectedClasses);
  };

  return (
    <>
      <div className="main--body">
        <h2>Class Schedule:</h2>
        <img src="" alt="fit"></img>
        <p>Sign Up today for one of our amazing classes with certifed instructors who's goal is to get you in shape! </p>
        {classes.map((cls) => (
          <div className="schedule" key={cls.id}>
            <p>{cls.class}</p>
            <p>{cls.instructor}</p>
            <p>{cls.day}</p>
            <p>{cls.time}</p>
            <p>{cls.duration}</p>
            <p>{cls.room}</p>
            <button className="sign--up" onClick={() => handleSignUp(cls.id) }>Sign Up</button>
          </div>
        ))}
        <h2>Your Upcoming Classes:</h2>
        <ul>
        {selectedClasses.map((cls) => (
          <li key={cls.id}>
            {cls.date} - {cls.class}
            <button className="delete--btn"onClick={() => handleDelete(cls.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
//Add gym classes
//Put classes into an ul with a button to sign up 
//Sign up button will add classes to Upcoming classes 
//Display a picture x2 to give a little bit of curb appeal
