import { Routes, Route } from 'react-router-dom'
import HomePage from '../page'
import AboutPage from '@/page/about'
import SkillPage from '@/page/skill'
import ProjectPage from '@/page/projects'
import ContactPage from '@/page/contact'
import Login from '@/page/login/login'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
