import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './css/Home.css'


export default function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.error(err))
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm('Bạn có chắc chắn muốn xoá sản phẩm này?');
        if (confirm) {
            axios.delete('http://localhost:3000/products/' + id)
                .then(res => {
                    alert("Xoá sản phẩm thành công");
                    window.location.reload();
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className={"home-container"}>
            <br/>
            <br/>
            <h1>Danh sách sản phẩm</h1>
            <br/>

            <div className='d-flex justify-content-between'>
                <Link to='/create' className='my-0 btn btn-success'> + Thêm mới</Link>
            </div>
            <br/>

            <table className="table table-striped">
                <thead>
                <tr className='text-start'>
                    <th scope="col">#</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Giá</th>
                    <th style={{paddingLeft: 25}} scope="col">Hành động</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) =>(
                    <tr key={index} className='text-start'>
                        <th scope="row">{index + 1}</th>
                        <td><Link to={`/read/${product.id}`}>{product.title}</Link></td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
                            <button className='mx-3 btn btn-sm btn-danger' onClick={event => handleDelete(product.id)}>Xoá</button>
                            <Link to={`/update/${product.id}`} className='mx-3 btn btn-sm btn-warning me-2'>Sửa</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}