import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

export default function Create() {
    const [values, setValues] = useState({
        title: '',
        price: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/products', values)
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-dark-subtle bg-gradient text-black p-5'>
                <form onSubmit={handleSubmit}>
                    <h2>Thêm sản phẩm</h2>
                    <div>
                        <label htmlFor="title">Tên sản phẩm:</label>
                        <input type="text" name='title' className='form-control'
                               onChange={event =>
                                   setValues({...values, [event.target.name]: event.target.value})
                               }/>
                    </div>
                    <div>
                        <label htmlFor="price">Giá:</label>
                        <input type="number" name='price' className='form-control'
                               onChange={event =>
                                   setValues({...values, [event.target.name]: event.target.value})
                               }/>
                    </div>
                    <div>
                        <label htmlFor="description">Mô tả:</label>
                        <textarea name='description' className='form-control'
                                  onChange={event =>
                                      setValues({...values, [event.target.name]: event.target.value})
                                  }/>
                    </div>
                    <div className='mt-3 d-flex justify-content-center'>
                        <button className='mx-1 btn btn-success'>Thêm</button>
                        <Link to='/' className='mx-1 btn btn-primary'>Trở lại</Link>
                    </div>
                </form>
            </div>
        </div>



    );
}