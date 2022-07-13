import FormItem from "../components/FormItem"
import FormButton from "../components/FormButton"
import React from "react"
import { Table, Input, Form, Select, Button } from "antd"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import "../css/Data.css"

const Data = () => {
    const [tableData, setData] = useState([])
    const [editingRow, setRow] = useState(null)
    const [searchParams] = useSearchParams()

    const tableColumns = [
        {
            title: "Name Surname Gender Email",
            render: (record) => (
              <React.Fragment>
                {record.name}
                <br />
                {record.surname}
                <br />
                {record.gender}
                <br />
                {record.email}
              </React.Fragment>
            ),
            responsive: ["xs"]
          },{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend", "ascend"],
            responsive: ["sm"],
            render: (text, record) => { 
                if(editingRow === record.id){
                    return(
                        <input className="input" defaultValue={record.name} onKeyUp={ (e) => {
                            if(e.key === "Enter"){
                                setRow(-1)
                            } 
                        }} onChange={ (e) => {
                            record.name = e.target.value
                        }
        
                        } />
                    )
                }else{
                    return text
                }
            }
        },{
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend", "ascend"],
            responsive: ["sm"],
            render: (text, record) => { 
                if(editingRow === record.id){
                    return(
                        <input className="input" defaultValue={record.surname} onKeyUp={ (e) => {
                            if(e.key === "Enter"){
                                setRow(-1)
                            } 
                        }} onChange={ (e) => {
                            record.surname = e.target.value
                        }
        
                        } />
                    )
                }else{
                    return text
                }
            }
        },{
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend", "ascend"],
            responsive: ["sm"],
            render: (text, record) => { 
                if(editingRow === record.id){
                    return(
                        <select className="input" defaultValue={record.gender} onKeyUp={ (e) => {
                            if(e.key === "Enter"){
                                setRow(-1)
                            } 
                        }} onChange={ (e) => {
                            record.gender = e.target.value
                        }
        
                        }>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                    )
                }else{
                    return text
                }
            }
        },{
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend", "ascend"],
            responsive: ["sm"],
            render: (text, record) => { 
                if(editingRow === record.id){
                    return(
                        <input className="input" defaultValue={record.email} onKeyUp={ (e) => {
                            if(e.key === "Enter"){
                                setRow(-1)
                            } 
                        }} onChange={ (e) => {
                            record.email = e.target.value
                        }
        
                        } />
                    )
                }else{
                    return text
                }
            }
        },{
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            responsive: ["sm"],
            render: (_, record) => {
                return(
                    <Button type="link" onClick={() => {
                        (record.id !== editingRow) ? setRow(record.id) : setRow(-1)
                    }}>Edit</Button>
                )
            }
        }
    ]

    const {Option} = Select

    const formData = [
        {
            label: "Name",
            name: "name",
            rules: {
                required: true, message: "Please input name"
            },
            input: <Input />
        },{
            label: "Surname",
            name: "surname",
            rules: {
                required: true, message: "Please input surname"
            },
            input: <Input />
        },{
            label: "Gender",
            name: "gender",
            rules: {
                required: true, message: "Please input gender"
            },
            input: 
            <Select> 
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
            </Select>
        },{
            label: "Email",
            name: "email",
            rules: {
                required: true, message: "Please input email"
            },
            input: <Input />
        }
    ]

    function onAdd(values){
        setData(
            [...tableData, {
                id: tableData.length > 0 ? (tableData[tableData.length - 1].id + 1) : 0,
                gender: values.gender,
                name: values.name,
                surname: values.surname,
                email: values.email
            }]
        )
    }

    useEffect( () => {
        if(tableData.length < 1){
            fetch("https://randomuser.me/api")
            .then( (response) => (response.json()))
            .then( (result) => {
                setData(
                    [...tableData, {
                        id: 0,
                        gender: result.results[0].gender,
                        name: result.results[0].name.first,
                        surname: result.results[0].name.last,
                        email: result.results[0].email
                    }]
                )
            })
        }

        // eslint-disable-next-line
    }, [])

    //delete data on double click
    function deleteData(record){
        let array = JSON.parse(localStorage.getItem("deletedData"))
        array.push(record)
        localStorage.setItem("deletedData", JSON.stringify(array))
        
        setData(
            tableData.filter( (item) => {
                return item.id !== record.id
            })
        )
    }
        
    function renderDeleted(){
        if(searchParams.get("password") === "234"){
            let deleted = JSON.parse(localStorage.getItem("deletedData"))
            return(
                <div className="deleted-data-wrapper">
                    <ul className="deleted-data">
                        {
                            deleted.map((data) => {
                                return <li>Name: {data.name}, Surname: {data.surname}, Gender: {data.gender}, Email: {data.email}</li>
                            })
                        }
                    </ul>
                </div>
            )
        }
    }

    return(
        <div className="data-container">
            <Table 
                ant
                className="table"
                columns={tableColumns} 
                dataSource={tableData} 
                onRow={(record, rowIndex) => {
                    return { onDoubleClick: event => {deleteData(record)} } 
                }}
                tableLayout="auto"
                mobileBreakPoint={768}
            />
            <div className="form-container">
                <div className="form-wrapper">
                    <Form
                        name="basic"
                        labelAlign="left"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 18,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={(values) => {
                            onAdd(values)
                        }}
                        autoComplete="off"
                    >
                        {
                            formData.map( (data) => {
                                return <FormItem className="form-item" key={data.id} data={data} />
                            })
                        }
                        <FormButton value="Add" />
                    </Form>
                </div>
            </div>
            { renderDeleted() }
        </div>
    )
}

export default Data