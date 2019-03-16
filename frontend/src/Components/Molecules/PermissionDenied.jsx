import React from 'react'

/**
 * This component represents the "Permission Denied" screen,
 * shown when a normal user attempts to access to admin's functions.
 */
const PermissionDenied = () => {
  return (
    <main>
      <section className="hero is-black is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-red">Access Denied!</h3>
              <p className="subtitle has-text-grey">You have no admin permissions</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PermissionDenied
