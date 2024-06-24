import { Routes, Route } from 'react-router-dom'
import HomePage from '../page'
import AboutPage from '@/page/about'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    )
}
