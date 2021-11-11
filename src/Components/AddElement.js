import React, { useState } from "react";
import { Input, Button } from "reactstrap";
import './styles.scss';
import axios from '../Axios';

const AddElement = (props) => {

    const {

        getData

    } = props;

    const [Title, SetTitle] = useState('');
  

    const handleAdd = async () => {

        const data = {

            title: Title,
        }

        try {

            Title ? await axios.post(`/title/.json`, data) : alert("No hay nada que agregar.");
            getData();
            SetTitle("");

        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="row">
            <div className="col-9">
                <Input
                    placeholder="Escribe una tarea..."
                    block="true"
                    value={Title}
                    onChange={(e) => { SetTitle(e.target.value); }}></Input>
            </div>
            <div className="col-3">
                <Button
                    block="true"
                    color="primary"
                    onClick={() => { handleAdd(); }}
                >Agregar</Button>
            </div>
        </div>
    );
}
export default AddElement;