import { useState } from 'react'
import uuid from "react-uuid";
import Form from './Form'
import Watchlist from './Watchlist'

const init = {
    id: '',
    title: '',
    timeZone: ''

}

export default function Watches() {
    const [watch, setWatch] = useState(init);
    const [watchlist, setWatchlist] = useState([]);


    const addWatch = (watch) => {
        setWatchlist(prev => [
            ...prev,
            {
                id: uuid(),
                title: watch.title,
                timeZone: watch.timeZone
            }
        ])

        setWatch(init);
    }

    const change = (target) => {
        setWatch(prev => ({ ...prev, [target.name]: target.value }))

    }
    const watchDelete = (watchId) => {
        setWatchlist(watchlist.filter(el => el.id !== watchId))


    }


    return (
        <>
            <Form watch={watch} onAdd={addWatch} onChange={change} />;
            <Watchlist list={watchlist} onRemove={watchDelete} />
        </>
    )
}