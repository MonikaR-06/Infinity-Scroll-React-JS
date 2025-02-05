import React, { useState, useEffect } from 'react';
import InfiniteScroll from './InfiniteScroll';
import './App.css'

const App = () => {
  const [items, setItems] = useState([]);

  const fetchMoreItems = () => {
    // Simulate fetching more items
    return new Promise(resolve => {
      setTimeout(() => {
        const newItems = Array.from({ length: 10 }, (_, i) => ({ id: i, name: `Item ${items.length + i + 1}` }));
        setItems([...items, ...newItems]);
        resolve(newItems);
      }, 1000); // Simulate a delay
    });
  };

  return (
    <InfiniteScroll items={items} fetchMoreItems={fetchMoreItems} />
  );
};

export default App;