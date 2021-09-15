import React from 'react';
import "antd/dist/antd.css";
import {useState, useEffect, initialState} from 'react';
import {Table} from 'antd';

function Student() {

    const [loading , setLoading] = useState(initialState)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {setDataSource(data)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const columns = [
        {
           key : "1",
           title :'ID',
           dataIndex: 'id'
         
          },
          {
            key : "2",
            title :'User ID',
            dataIndex: 'userId'
          },
          {
            key : "3",
           title :'Status',
           dataIndex: 'completed',
          
            render:(completed) => {
                return <p>{completed? 'complete' : 'In progress'}</p>
            }
    },
        ]
    return ( 
        <div className="Student">
            <header className="Student-header"></header>
            <Table
            loading={loading}
            columns={columns}
            dataSource = {dataSource}
            >

            </Table>
        </div>
     );
}

export default Student;
