import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function Update() {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    });

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/products/' + id)
            .then(res => {
                console.log(res);
                setProduct(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/products/' + id, product)
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-dark-subtle bg-gradient text-black p-5'>
                <form onSubmit={handleUpdate}>
                    <h2>Sửa sản phẩm</h2>
                    <br/>
                    <br/>
                    <div>
                        <label htmlFor="title">Tên sản phẩm:</label>
                        <input type="text" name='title' className='form-control'
                               value={product.title}
                               onChange={event =>
                                   setProduct({...product, [event.target.name]: event.target.value})
                               }
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Giá:</label>
                        <input type="number" name='price' className='form-control'
                               value={product.price}
                               onChange={event =>
                                   setProduct({...product, [event.target.name]: event.target.value})
                               }
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Mô tả:</label>
                        <textarea name='description' className='form-control'
                                  value={product.description}
                                  onChange={event =>
                                      setProduct({...product, [event.target.name]: event.target.value})
                                  }
                        />
                    </div>
                    <div className='mt-3 d-flex justify-content-center'>
                        <button className='mx-1 btn btn-success'>Sửa</button>
                        <Link to='/' className='mx-1 btn btn-primary'>Trở lại</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}