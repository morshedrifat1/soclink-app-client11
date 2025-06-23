import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Link } from 'react-router';

const Modal = ({title,message,button,buttonUrl,icon}) => {
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center">
          <div className="bg-boxbg shadow-lg shadow-subHeading w-17 h-17 flex items-center rounded-full  mx-auto">
            {icon}
          </div>
          <h3 className="font-bold text-heading text-2xl mt-3">{title}</h3>
          <p className="py-2">
            {message}
          </p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <form method="dialog" >
              <Link to={buttonUrl} className="px-4 py-2 border text-sm rounded-lg cursor-pointer font-medium border-gray-300/70">
                {button}
              </Link>
            </form>
            <div>
                <Link
              to={"/"}
              className="px-4 py-2 bg-gradient-to-br from-primary to-secondary text-sm rounded-lg cursor-pointer font-medium text-white"
            >
              Return Home
            </Link>
            </div>
          </div>
        </div>
      </dialog>
        </div>
    );
};

export default Modal;