import React, {useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../src/context';

interface SearchFormProps {
  // TODO: revisit this. What do I need and not need in here??
  key?: string,
  title?: string,
  data?: {}
}

const SearchForm = ( props: SearchFormProps ) => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.valueOf();
    if(tempSearchTerm.length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.valueOf);
    }

    navigate("/book");
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>Search
              <input type = "text" className='form-control' placeholder='Enter a book title...'/> 
                                                                                         {/* id = {searchText} */}
              <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm