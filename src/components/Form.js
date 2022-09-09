import PropTypes from "prop-types";


export default function Form({ watch, onAdd, onChange }) {

    const change = (event) => {
        const { target } = event;
        onChange(target);
    }

    const addWatch = (event) => {
        event.preventDefault();
        if (watch.title.length === 0) {
            return
        }
        if (watch.timezone < 12 || watch.timexone < -12) {
            return
        }
        onAdd(watch);
    }





    return (
        <form className="watch">
            <div className="watch_input">
                <label className="watch_title">Название</label>
                <input
                    className="watch_value"
                    type="text"
                    name="title"
                    value={watch.title}
                    onChange={change}
                />
            </div>
            <div className="watch_input">
                <label className="watch_title">Временная зона</label>
                <input
                    className="watch_value"
                    type="number"
                    name="timezone"
                    value={watch.timezone}
                    onChange={change}
                />
            </div>
            <button className="watch_add" onClick={addWatch}> Добавить </button>
        </form>

    )
}
Form.propTypes = {
    watch: PropTypes.object,
    onAdd: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};