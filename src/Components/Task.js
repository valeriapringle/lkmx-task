import React, { useState } from 'react';
import { Button, Input } from "reactstrap";
import axios from '../Axios';
import iconTrash from '../Assets/icon-trash.svg';
import iconDisk from '../Assets/icon-disk.svg';
import iconPen from '../Assets/icon-pen.svg';

const Task = (props) => {

    const {

        title,
        id,
        getData

    } = props;

    const [isEdit, SetIsEdit] = useState(false);
    const [NewTitle, SetNewTitle] = useState(title);

    const handleEdit = () => {
        if (isEdit === false) {
            return (
                <div className="task">
                    <div className="row">
                        <div className="col-9">
                            <h5>{title}</h5>
                        </div>
                        <div className="col-1">
                            <Button size="sm" outline color="primary"><img src={iconPen} onClick={() => { SetIsEdit(); }} alt="icon-pen" /></Button>
                        </div>
                        <div className="col-1">
                            <Button size="sm" outline color="primary" onClick={() => { handleDelete(); }}><img src={iconTrash} alt="icon-trash" /></Button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="task">
                    <div className="row">
                        <div className="col-10">
                            <Input value={NewTitle} onChange={(e) => { SetNewTitle(e.target.value); }}></Input>
                        </div>
                        <div className="col-1">
                            <Button size="sm" outline color="primary" onClick={() => { handleUpdate(); SetIsEdit(false); }}><img src={iconDisk} alt="icon-disk" /></Button>
                        </div>

                    </div>
                </div>
            )
        }
    }

    const handleUpdate = async () => {

        const data = {

            title: NewTitle

        }

        try {

            await axios.put(`/title/${id}.json`, data)
            getData();

        } catch (err) {

            alert(err);
        }
    }

    const handleDelete = async () => {

        try {

            await axios.delete(`/title/${id}.json`)
            getData();

        } catch (err) {

            alert(err);
        }
    }



    return (
        <>
            {handleEdit()}
        </>


    );
}
export default Task;