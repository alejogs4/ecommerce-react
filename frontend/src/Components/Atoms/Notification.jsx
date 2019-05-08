import React,{ useState }  from 'react'

const Notification = ({ type, text }) => {
  const [active, setActive] = useState(true)

  return active && (
    <div class={`notification ${type}`}>
      <button class="delete" onClick={() => setActive(false)}></button>
      {text}
    </div>
  )
}

export default Notification
