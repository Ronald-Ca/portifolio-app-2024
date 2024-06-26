import { Routes, Route } from 'react-router-dom'
import HomePage from '../page'
import AboutPage from '@/page/about'
import SkillPage from '@/page/skill'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillPage />} />
        </Routes>
    )
}
