import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Quote />
      <Progress />
      <Tasks />
      <Notes />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>MINDSET</h1>
      <button className="menu-button">≡</button>
    </header>
  );
}


  function Quote() {
    return (
      <div className="quote">
        <img src={process.env.PUBLIC_URL + '/quoteimg.png'} alt="Quote Background" className="quote-image" />
        <p>“If you don’t get what you want, you SUFFER...”</p>
      </div>
    );
  }

function Progress() {
  return (
    <div className="progress">
      <h2>Day 15</h2>
      <div className="day-selector">
        {/* Replace these with dynamic buttons based on the date */}
        <button>Sun</button>
        <button>Mon</button>
        <button>Tue</button>
        <button>Wed</button>
        <button>Thu</button>
        <button>Fri</button>
        <button>Sat</button>
      </div>
    </div>
  );
}

function Tasks() {
  return (
    <div className="tasks">
      <TaskItem title="Unleash Yourself" duration="3 minutes" />
      <TaskItem title="How to Improve Your Focus" duration="5 minutes" />
      <TaskItem title="Walk 20,000 Steps" dailyGoal />
    </div>
  );
}

function TaskItem({ title, duration, dailyGoal }) {
  return (
    <div className="task-item">
      <h3>{title}</h3>
      <p>{duration ? `${duration} - Lesson` : dailyGoal ? 'Daily Goal' : ''}</p>
    </div>
  );
}

function Notes() {
  return (
    <div className="notes">
      <h2>Notes</h2>
      <Note title="Note 1" content="Lorem ipsum dolor sit amet..." />
      <Note title="Note 2" content="Sed do eiusmod tempor incididunt ut labore..." />
      <Note title="Note 3" content="Ut enim ad minim veniam..." />
    </div>
  );
}

function Note({ title, content }) {
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <button>Today</button>
      <button>Learn</button>
      <button>Practice</button>
      <button>Apex</button>
    </footer>
  );
}

export default App;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
