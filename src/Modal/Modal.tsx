import React, {FC, useState} from 'react';
import s from './Modal.module.css';

type ModalTypeProps = {
    children: React.ReactNode
    active: boolean
    setActive: (value: boolean) => void
}

export const Modal = ( {active,setActive,children}:ModalTypeProps) => {
    const styleModal = `${s.modal} ${(active) ? s.active : ''}`
    const styleContent = `${s.modalContent} ${(active) ? s.active : ''}`
    return (
        <div className={styleModal}
             onClick={() => setActive(false)}
        >
            <div className={styleContent}
                 onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

