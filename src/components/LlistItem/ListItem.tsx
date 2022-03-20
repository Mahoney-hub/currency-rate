import React, {FC, useState} from 'react';
import s from './ListItem.module.css';
import {Modal} from '../../Modal/Modal';
import {ValuteItem} from '../../types/types';

interface IListItem {
    currency: ValuteItem
}

export const ListItem:FC<IListItem> = ({currency}) => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    return (
        <li className={s.listItem} onClick={() => setModalActive(!modalActive)}>
            <span>{currency.CharCode}</span>
            <span>{currency.Value} руб</span>
            <span>{currency.Previous - currency.Value} руб</span>
            <span className={s.tooltipText}>{currency.Name}</span>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>hello</p>
            </Modal>
        </li>
    );
};

