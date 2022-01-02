import React, { FC, useState } from 'react';
import Menu from '../../components/Menu';
import Main from '../../components/Main';
import SearchResult from '../../components/SearchResult';
import Form from 'react-bootstrap/Form'
import getAxiosInstance from '../../utils/axios';

const Dictionary: FC = () => {
    const axiosInstance = getAxiosInstance();
    const [ searchInput, setSearchInput ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        axiosInstance.get(`/api/definition/${searchInput}`)
            .then(res => {
                console.log(res.data);
                setSearchResults(res.data.results);
            })
            .catch(err => console.log()) 
    }

    return (
        <>
            <Menu />
            <Main>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Dictionary search</Form.Label>
                        <Form.Control type="text" placeholder="ostentatious..." onChange={(event) => setSearchInput(event.target.value)}/>
                    </Form.Group>
                </Form>
                <section className="search-results">
                    {searchResults && searchResults.map(result => (
                        <div>{JSON.stringify(result)}</div>
                    ))}
                </section>
            </Main>
        </>
    )
}

export default Dictionary;