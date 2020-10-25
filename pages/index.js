import React from 'react';
import '../config/firebase';
import '@firebase/firestore';
import ItemsList from '../components/ItemsList';
import CreateItem from '../components/CreateItem';

export default function Home() {
  return (
    <div>
      <ItemsList />
      <CreateItem />
    </div>
  );
}
