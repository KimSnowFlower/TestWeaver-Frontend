import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Page
import HomePage from "../pages/Home/HomePage";
import DocsPage from "../pages/Home/DocsPage";
import AboutPage from "../pages/Home/AboutPage";
import HelpPage from "../pages/Home/HelpPage";

// Auth Pages
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import FindIdPage from "../pages/Auth/FindIdPage";
import ResetPwPage from "../pages/Auth/ResetPwPage";

// Projects pages (로그인 이후)
import ProjectListPage from "../pages/Project/ProjectListPage";
import ProjectCreatePage from "../pages/Project/ProjectCreatePage";
//import ProjectDetailPage from "../pages/Project/ProjectDetailPage";

// Projects 내부
import OverviewPage from "../pages/Project/OverviewPage";
import ModelPage from "../pages/Project/ModelPage";
import GeneratePage from "../pages/Project/GeneratePage";
import TestCasesPage from "../pages/Project/TestCasesPage";
import ExportPage from "../pages/Project/ExportPage";

// Not Found
//import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                <Route path="/" element={<HomePage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/help" element={<HelpPage />} />

                {/* Auth */}
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/register" element={<RegisterPage />} />
                <Route path="/auth/find-id" element={<FindIdPage />} />
                <Route path="/auth/reset-password" element={<ResetPwPage />} />

                {/* Project */}
                <Route path="/projects" element={<ProjectListPage />} />
                <Route path="/projects/create" element={<ProjectCreatePage />} />

                {/* Project 내부 페이지 */}
                <Route path="/projects/:id/overview" element={<OverviewPage />} />
                <Route path="/projects/:id/model" element={<ModelPage />} />
                <Route path="/projects/:id/generate" element={<GeneratePage />} />
                <Route path="/projects/:id/testcases" element={<TestCasesPage />} />
                <Route path="/projects/:id/export" element={<ExportPage />} />
            </Routes>
        </BrowserRouter>
    );
}
