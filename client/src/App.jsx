// Web3 Type Shit soon


import{ useState } from 'react'

export default function App() {
  const [countDown, setCountDown] = useState('')
  // Create a new Date object
  const currentDate = new Date();

  // Get the current date and time
  const year = currentDate.getFullYear(); // 4-digit year
  const month = currentDate.getMonth() + 1; // Month (0-11, so we add 1)
  const day = currentDate.getDate(); // Day of the month
  const hours = currentDate.getHours(); // Hour (0-23)
  const minutes = currentDate.getMinutes(); // Minutes (0-59)

  // Set the countdown date
  const countdownDate = new Date('2023-12-31 23:59:59').getTime();

  // Update the countdown every second
  const countdownTimer = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const timeRemaining = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    setCountDown(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);

    // Check if the countdown is over
    if (timeRemaining < 0) {
      clearInterval(countdownTimer);
      console.log('smile');
    }
  }, 1000);

  return (
    <div>
      
      <div className="date-map">
        <h1>Date</h1>
        <p>
          {`Current date and time: ${month}-${day}-${year} ${hours}:${minutes}`}
        </p>
        <p>
          {
            countDown
          }
        </p>
      </div>

      <div className="world-clocks">

      </div>





    </div>
  )
}
