import React from 'react';
import s from './ListItem.module.css';

export const ListItem = () => {
    return (
        <li className={s.listItem}>
            <span>код валюты</span>
            <span>значение в рублях</span>
            <span>изменение</span>
            <span className={s.tooltipText}>Доллар США</span>
        </li>
    );
};

