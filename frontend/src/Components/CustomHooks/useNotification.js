import React, { useState } from 'react'

/**
 * This function allows 
 * @param {*} settings : 
 */
function useNotification(settings) {
  const [active, setActive] = useState(settings.active)
  const [type, setType] = useState(settings.type)
  const [text, setText] = useState(settings.text)

  function updateNotification(active, type, text) {
    setType(type)
    setText(text)
    setActive(active)
  }

  const Notification = active && (
    <div class={`notification ${type}`}>
      <button class="delete" onClick={() => setActive(false)}></button>
      {text}
    </div>
  )

  return { Notification, updateNotification }
}

export default useNotification
