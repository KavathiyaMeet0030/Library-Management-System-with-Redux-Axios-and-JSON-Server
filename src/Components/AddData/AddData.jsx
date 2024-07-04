import  {useState } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { AddDataPostAsync } from '../../Services/Actions/BooksAction';


const AddData = () => {

    const [inputState, setinputState] = useState({
        id: '',
        Title: '',
        Author: '',
        Genre: '',
        Year: '',
    })

 

    let navigate = useNavigate();


    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setinputState({ ...inputState, [name]: value });

    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
       
        e.preventDefault();



        dispatch(AddDataPostAsync(inputState))

        navigate(`/`);
        
      
    }
     


    

    return (
        <>



            <div className=' w-50 container bg-dark rounded-4 mt-5 p-5 py-1'>
                <h1 className="pt-5 text-center  t-w">Add Book Details</h1>
                <div className='pt-4'>
                    <Form className='' onSubmit={handleSubmit}>
                        <Form.Control type="text" name='id' value={inputState.id} hidden  onChange={handleChange}/>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2} className='fs-4 t-w'>
                                Title
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter Book Title ..." name='Title' value={inputState.Title} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2} className='fs-4 t-w'>
                                Author
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter Author ..." name='Author' value={inputState.Author} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2} className='fs-4 t-w'>
                              Genre 
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter Genre..." name='Genre' value={inputState.Genre} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2} className=' fs-4 t-w'>
                               Year
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="number" placeholder="Enter Year.." name='Year' value={inputState.Year} onChange={handleChange} />
                            </Col>
                        </Form.Group>




                        <div className='d-flex justify-content-center'>
                            <button type='submit' className='px-5 py-2 rounded-pill'>Submit</button>
                        </div>


                    </Form>

                </div>


            </div>

        </>
    );
};

export default AddData;