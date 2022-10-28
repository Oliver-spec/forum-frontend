import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/loginPage" element={<LoginPage user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
