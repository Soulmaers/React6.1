import uuid from "react-uuid";
import PropTypes from "prop-types";
import Clock from './Clock'


export default function Watchlist({ list, onRemove }) {
    if (list.length === 0) return null

    const onRemoveEl = (id) => {
        onRemove(id);
    }


    return list.map((o) => (
        <div className="watch_list" key={uuid()}>
            <Clock
                id={o.id}
                title={o.title}
                utc={o.timeZone}
                handleRemove={onRemoveEl}
            />
        </div>
    ));
}

Watchlist.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    onRemove: PropTypes.func.isRequired,
};