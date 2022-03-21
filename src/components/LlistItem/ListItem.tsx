import React, {FC, useState} from 'react';
import s from './ListItem.module.css';
import {Modal} from '../../Modal/Modal';
import {ValuteItem} from '../../types/types';
import {getRoundedCourseChanges, getRoundedNumber} from '../../utils/transformNumbers';

interface IListItem {
    currency: ValuteItem
}

export const ListItem: FC<IListItem> = ({currency}) => {
    const {CharCode, Value, Previous, Name} = currency
    const [modalActive, setModalActive] = useState<boolean>(false)
    const courseChanges = getRoundedCourseChanges(Previous,Value)
    const styleCourseChanges = (+courseChanges >= 0) ? s.green : s.red

    return (
        <li className={s.listItem} onClick={() => setModalActive(!modalActive)}>
            <span>{CharCode}</span>
            <span>{getRoundedNumber(Value)}</span>
            <span className={styleCourseChanges}>{courseChanges}</span>
            <span className={s.tooltipText}>{Name}</span>
            <Modal active={modalActive} setActive={setModalActive}>
                <h1>{Name}</h1>
            </Modal>
        </li>
    );
};

