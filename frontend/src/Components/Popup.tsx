import React from 'react';

type PopupProps = {
    trigger: boolean;
    onClose: () => void;
    img: string;
};

const Popup: React.FC<PopupProps> = ({trigger, onClose, img}) => {
    return trigger ? (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                <div className="bg-black p-8 rounded-lg shadow-lg z-10 w-96 flex flex-col justify-center items-center">
                    <img className='h-[500px]' src={img} alt="Doesnt Work" onClick={onClose} />
                </div>
            </div>
        </>
    ) : null;
};

export default Popup;