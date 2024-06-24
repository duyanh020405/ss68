
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../src/store/actions/bookActions'
interface List{
  nameBook:string,
  namePeople:string,
  dateIn:string,
  dateOut:string
} 

export default function Create() {
    const [formData, setFormData] = useState({
        nameBook: '',
        namePeople: '',
        dateIn: '',
        dateOut: ''
    });

    const dispatch = useDispatch();
    const listBook = useSelector((state: List[]) => state);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(addBook(formData));
        setFormData({
            nameBook: '',
            namePeople: '',
            dateIn: '',
            dateOut: ''
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ border: "1px solid black", display: "flex", flexDirection: "column", textAlign: "center", padding: 20, width: 300, height: 400 }}>
                <label>
                    <b>Ten sach</b>
                    <input onChange={handleChange} type="text" name='nameBook' value={formData.nameBook} style={{ marginBottom: 10, width: '100%' }} />
                </label>
                <label>
                    <b>Ten nguoi muon</b>
                    <input onChange={handleChange} type="text" name='namePeople' value={formData.namePeople} style={{ marginBottom: 10, width: '100%' }} />
                </label>
                <label>
                    <b>Ngay muon</b>
                    <input onChange={handleChange} type="date" name='dateIn' value={formData.dateIn} style={{ marginBottom: 10, width: '100%' }} />
                </label>
                <label>
                    <b>Ngay tra</b>
                    <input onChange={handleChange} type="date" name='dateOut' value={formData.dateOut} style={{ marginBottom: 10, width: '100%' }} />
                </label>
                <button type='submit' style={{ marginTop: 20 }}>Add</button>
            </form>
            <div style={{ marginTop: 20 }}>
                <h2>Borrowing List</h2>
                <ul>
                    {listBook.map((item:any, index:any) => (
                        <li key={index}>
                            <p><b>Ten sach:</b> {item.nameBook}</p>
                            <p><b>Ten nguoi muon:</b> {item.namePeople}</p>
                            <p><b>Ngay muon:</b> {item.dateIn}</p>
                            <p><b>Ngay tra:</b> {item.dateOut}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
