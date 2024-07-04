
import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            <div className='w-100 bg-dark d-flex align-items-center justify-content-between'>



                <div>
                    <h1 className=' text-white py-3 px-3'>Library Management System</h1>
                </div>

                <div>
                    <Link className='px-4 text-decoration-none t-w fs-3' to='/'>DashBoard</Link>
                    <Link className='px-4 text-decoration-none t-w fs-3' to='/adddata'>AddBooks</Link>
                </div>

            </div>

        </>
    )
}

export default Header;
