import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts'

function ExpenseChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetch() {
            try {
                const response = await axios.get('http://localhost:5000/expense/data')
                setData(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetch();
    }, []);


    return (
        <div className='container' style={{ marginTop: 100 }} >
            <h1 style={{ marginTop: 30 }} className="text-center">Company Revenue Chart</h1>
            <ResponsiveContainer width="80%" aspect={3}>
                <BarChart width="80%" height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="expenses" fill="#8884d8" />
                    <Bar dataKey="profits" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ExpenseChart