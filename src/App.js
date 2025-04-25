import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startMockSocket } from './features/crypto/mockSocket';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    startMockSocket(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
