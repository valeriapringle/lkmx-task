import React from "react";
import './styles.scss';
import Task from "./Task";



const ElementsList = (props) => {

    const {

        tasks,
        getData

    } = props;


    return (

        <div className="row">
            <div>
                {
                    tasks.map((r, index) => {

                        return (
                           <Task title={r.title} id={r.id} getData={getData}></Task>
                        );
                    })
                }
            </div>

        </div>

    );
}
export default ElementsList;