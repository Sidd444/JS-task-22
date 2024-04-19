import React from 'react';
import Card from './Card';
import useFetch from './useFetch';

const DataFetcher = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div id="all-data">
      {data.map((user) => (
          <Card key={user.id} user={user}/>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
