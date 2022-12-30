import { useState } from 'react';

function AddTask({ onAdd }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert("please Add Task");
            return
        }
        onAdd({ text, day, reminder });
        setText('')
        setDay('')
        setReminder(false)

    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control" >
                <label>Task</label>
                <input type="text" placeholder="Enter Task name" value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control" >
                <label>Day & Time</label>
                <input type="text" placeholder="Enter Day" value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check" >
                <label>set Reminder</label>
                <input type="checkbox" value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value='Save Task' className="btn btn-block" />


        </form >
    )
}

export default AddTask