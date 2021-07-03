import React, { useContext } from 'react';
import { PaginationContext } from '../contex/pagination.js';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap'

const Pagination = ({ item }) => {
    const pageNum = [];
    const pagination = useContext(PaginationContext);
    let num = Math.ceil(item / pagination.PerPage)
    for (let i = 1; i <= num; i++) {
        pageNum.push(i);

    }
    const onChange = (e) => {
        pagination.setItems(e)


    }
    return (
        <>
            <ButtonGroup >
                <DropdownButton onSelect={onChange} as={ButtonGroup} title="Dropdown" >
                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                    <Dropdown.Item eventKey="4">4</Dropdown.Item>
                    <Dropdown.Item eventKey="6">6</Dropdown.Item>
                </DropdownButton>
                {pageNum.map(number => (
                    <Button style={{ cursor: 'pointer' }} variant="dark" key={number} className='item' onClick={() => pagination.pages(number)}>
                        {number}
                    </Button>
                ))}

                <Button className='item' style={{ cursor: 'pointer' }} onClick={pagination.page > 1 ? () => pagination.pages(pagination.page--) : () => pagination.pages(pagination.page)} >
                    Previous
                    </Button>
                <Button style={{ cursor: 'pointer' }} onClick={pageNum.length !== pagination.page ? () => pagination.pages(pagination.page++) : () => pagination.pages(pagination.page)} className='item'>
                    Next
                    </Button>

            </ButtonGroup>
        </>
    );
};
export default Pagination;

