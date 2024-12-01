import React from 'react'

const side = () => {
  return (
    <>
    <div className="vh-100 p-5 d-flex flex-column align-items-center justify-content-center side-element">
                <img
                  width={450}
                  src="https://naypess.com/wp-content/uploads/2024/02/Whatsapp-Icon-1-300x185.webp"
                  alt=""
                  srcset=""
                />
                <h2 className="pt-5">WhatsApp Web</h2>
                <p>
                  Send and receive messages without keeping your phone online.
                  Use WhatsApp on up to 4 linked devices and 1 phone at the same
                  time.
                </p>
                <p className="credits">
                Developed by <a href="https://www.linkedin.com/in/anasraheem/">Anas Raheem</a>
                </p>
              </div>
    </>
  )
}

export default side
