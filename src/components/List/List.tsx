import React from 'react';
import s from './List.module.css';
import {ListItem} from '../LlistItem/ListItem';

export const List = () => {
    return (
        <ul className={s.list}>
            <ListItem/>
            <ListItem/>
        </ul>
    );
};

