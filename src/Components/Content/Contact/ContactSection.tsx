import React from 'react'

const ContactSection: React.FC = () => {
  return (
    <div className='h-auto w-full bg-gradient-to-r border-r-1 from-[#121212] via-[#212225] to-[#1F2022] rounded-r-[100px] py-16 px-20'>
        <div className="h-[650px] w-full border flex">
            <div className="h-full w-full border"></div>
            <div className="h-full w-full border overflow-hidden relative">
                <img src="ua.gif" alt="" className="h-[680px] w-full z-10" />
                <div className="h-full w-full bg-slate-800 opacity-70">
                    <p className=" absolute text-white z-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore, aperiam minima illo ullam explicabo doloremque consequuntur animi, autem aliquam nulla perferendis, nesciunt placeat adipisci harum. Atque aperiam, tempora labore aliquid neque nobis aut consectetur repellat qui nulla. Id, quos!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection