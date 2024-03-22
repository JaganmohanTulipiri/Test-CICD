import React, { useState } from 'react'
import { Modal } from 'antd'


const ForgotUserNameCard = (props) => {

    const {forgots,  forgotsClicked} = props
    


  return (
    <>
    <Modal
        title="Forgot Username?"
        centered
        okText="Send"
      cancelText="Cancel"
      open={forgots?.usernameForgot}
        onOk={() => forgotsClicked('usernameForgot', false)}
        onCancel={() => forgotsClicked('usernameForgot', false)}
        id="modal1"
        className="modal2"
        width = {400}

    
      >
        <>
        <form>
            <input type = "text" placeholder='Enter Email' className='block w-80 px-4 py-3 mt-2 bg-[white] border border-[#808080] rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40'/>
        </form>
        </>
      </Modal>
    
    </>
  )
}

export default ForgotUserNameCard