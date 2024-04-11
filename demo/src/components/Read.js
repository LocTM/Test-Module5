import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import './css/Read.css'

export default function Read() {
    const [product, setProduct] = useState([])

    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/products/' + id)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-dark-subtle bg-gradient text-black p-5'>
                <h3>Chi tiết sản phẩm</h3>
                <br/>
                <br/>
                <br/>
                <div className='div-read text-black'>
                    <p>Tên sản phẩm: {product.title}</p>
                    <hr/>
                    <p>Mô tả: {product.description}</p>
                    <hr/>
                    <p>Giá: {product.price}</p>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <Link to="/" className='mx-1 mt-1 btn btn-primary'>Trở lại</Link>
            </div>

        </div>
    );
}