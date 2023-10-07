import { useState } from 'react';
import { toast } from 'react-toastify';

import { SearchbarHeader, Form, Button, Input } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {

  const [searchQuery, setSearchQuery] = useState(``);

  const handleQueryChange = ({ currentTarget: { value } }) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimSearchQuery = searchQuery.trim();

    if (trimSearchQuery === '') {
      toast.info('Please, enter search word!');
      return;
    }

    onSubmit(trimSearchQuery);
    setSearchQuery('');
  };

  return (
    <SearchbarHeader className="searchbar">
      <Form className="form" onSubmit={handleSubmit}>
        <Button type="submit" className="button">
          <span className="button-label">Search</span>
        </Button>
        <Input
          className="input"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
          value={searchQuery}
          onChange={handleQueryChange}
        />
      </Form>
    </SearchbarHeader>
  );
};

export default Searchbar;

