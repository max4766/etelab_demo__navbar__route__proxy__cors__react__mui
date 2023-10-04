import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContentReqAll from './components/ContentReqAll';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/contentReqAll" element={<ContentReqAll />} />
      </Routes>
    </BrowserRouter>
  );
}
