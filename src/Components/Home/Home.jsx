import React, { useState } from 'react'
/* eslint-disable no-unused-vars */
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Booksimage from '../../assets/img/book image.jpg'
import { DeleteAsync, GetDataAsync, SingleRecord } from '../../Services/Actions/BooksAction';




const Home = () => {


    const { Books } = useSelector(state => state.Bookreducer);

    // const [viewData, setViewData] = useState();

    // console.log(viewData);
    const navigate = useNavigate();


    const dispatch = useDispatch();

    const handleEdit = (id) => {

        console.log("id", id);

        dispatch(SingleRecord(id))

        navigate(`/edit/${id}`);


    }

    const handleDelete = (id) => {

        console.log("id", id);
        dispatch(DeleteAsync(id));

    }



    useEffect(() => {
        dispatch(GetDataAsync())
    }, [])


    return (

        <>

            <div className='container'>

                <div className="row">
                    {
                        Books.map((data) => {

                            return (
                                <>


                                    <div className="col-4  p-2 mt-2 rounded-4">

                                        <div className='bg-color  p-2 mt-5 rounded-4'>

                                            <div className='text-center mt-4'>
                                                <img src={Booksimage} alt="books" width={370} className='rounded-4' />
                                            </div>

                                            <div className='mt-3 mb-3'>
                                                <h1 className='text-center fw-bold fst-italic'>{data.Title}</h1>
                                                <h4 className='text-center fw-normal'>Author :- <span>{data.Author}</span></h4>
                                                <h4 className='text-center fw-normal'>Genre :- <span>{data.Genre}</span></h4>
                                                <h4 className='fw-bold text-center'>YEAR :- <span>{data.Year}</span> </h4>
                                            </div>

                                            <div className=' d-flex justify-content-center mb-3 '>

                                                <button type='submit' className='border-0 bg-info px-3 py-2 rounded-pill' >View</button>&nbsp;&nbsp;&nbsp;
                                                <button type='submit' className='border-0 bg-warning px-3 py-2 rounded-pill' onClick={() => handleEdit(data.id)}>Edit</button>&nbsp;&nbsp;&nbsp;
                                                <button type='submit' className='border-0 bg-danger px-3 py-2 rounded-pill' onClick={() => handleDelete(data.id)}>Delete</button>

                                            </div>

                                        </div>



                                    </div>



                                </>
                            )




                        })
                    }







                </div>

            </div>


        </>
    );
};

export default Home;