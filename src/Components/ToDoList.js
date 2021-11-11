import React, { useState } from "react";
import './styles.scss';
import AddElement from "./AddElement";
import ElementsList from "./ElementsList";
import axios from '../Axios';

const ToDoList = () => {

    const [Tasks, SetTasks] = useState([])

    React.useEffect(() => {

        getData();


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getData = async () => {

        try {

            const res = await axios.get('/title.json');

            const data = [];

            for (let key in res.data) {
                data.push({ ...res.data[key], id: key });
            }
            SetTasks(data);

        } catch (err) {
            alert(err);
        }

    }

    const handleEmpty = () => {
        if (Tasks.length === 0) {
            return (
                <div className="empty">
                    No has agregado tareas.
                </div>
            );
        } else {
            return (
                <>

                    <ElementsList tasks={Tasks} getData={getData}></ElementsList>

                </>

            );
        }
    }

    return (
        <>
            <div>

                <div className="Child">
                    <h2>To Do List</h2>
                    <AddElement getData={getData}></AddElement>
                    {handleEmpty()}
                </div>
            </div>

        </>
    );
}
export default ToDoList;