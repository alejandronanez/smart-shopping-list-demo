import React from 'react';
import firebase from 'firebase/app';
import { useCollection } from 'react-firebase-hooks/firestore';

const ItemsList = () => {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('products')
  );

  return (
    <div>
      {loading && <>Loading</>}
      {error && <>Error</>}
      {value && (
        <>
          Collection:
          {value.docs.map((doc, index) => (
            <pre key={index}>{JSON.stringify(doc.data())}</pre>
          ))}
        </>
      )}
    </div>
  );
};

export default ItemsList;
