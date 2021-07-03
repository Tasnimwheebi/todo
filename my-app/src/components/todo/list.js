import React ,{useContext} from 'react';
// import ToDo from './todo'
import Pagination from './pagination';
import { PaginationContext } from '../contex/pagination';

const TodoList= (props)=> {
  const pagination = useContext(PaginationContext);

  
    return ( 
    <>
      <ul>
        {pagination.item.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
     <Pagination item= {props.list.length}/>

      </>
      
    );
  
}

export default TodoList;