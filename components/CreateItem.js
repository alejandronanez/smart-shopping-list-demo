import React from 'react';
import firebase from 'firebase/app';

const CreateItem = () => {
  async function handleClick(e) {
    await firebase.firestore().collection('products').add({
      name: 'A new product',
      date: Date.now(),
    });
  }

  return <button onClick={handleClick}>Add an item</button>;
};

export default CreateItem;
