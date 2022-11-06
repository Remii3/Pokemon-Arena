import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Layout/Navigation';
import AdventurePage from './pages/AdventurePage';
import ArenaPage from './pages/ArenaPage';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import ShopPage from './pages/ShopPage';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Adventure" element={<AdventurePage />} />
        <Route path="/Arena" element={<ArenaPage />} />
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="/Settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
};

export default App;
