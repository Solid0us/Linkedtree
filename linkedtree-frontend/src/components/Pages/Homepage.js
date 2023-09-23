import React from 'react';
import Form from 'react-bootstrap/Form'
import FormText from 'react-bootstrap/esm/FormText';

const HomePage = () => {
    return(
        <div>
            <h1>Hello to the first page!!!!!</h1>
            <Form>
                <Form.Label htmlFor='input1'></Form.Label>
                <Form.Control type='text'></Form.Control>
                <FormText>Hello</FormText>
            </Form>
        </div>
    )
}

export default HomePage;