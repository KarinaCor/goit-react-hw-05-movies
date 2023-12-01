import { useState } from 'react';
import * as SC from '../Form/Form.styled'

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SC.InputSearch
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <SC.ButtonSearch type="submit" disabled={!query}>
        Search
      </SC.ButtonSearch>
    </form>
  );
};

export default Form;