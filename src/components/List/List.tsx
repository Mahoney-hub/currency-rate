import React, {useEffect, useState} from 'react';
import s from './List.module.css';
import {ListItem} from '../LlistItem/ListItem';
import axios from 'axios';
import {IData, Valute, ValuteItem} from '../../types/types';
import {v1} from 'uuid';

export const List = () => {
    const [currencyList, setCurrencyList] = useState<ValuteItem[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const response = await axios.get<IData>('https://www.cbr-xml-daily.ru/daily_json.js')
        setCurrencyList(Object.values(response.data.Valute))
    }

    return (
        <ul className={s.list}>
            {currencyList.map(currency=><ListItem key={v1()} currency={currency}/>)}
        </ul>
    );
};

