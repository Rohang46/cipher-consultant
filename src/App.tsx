import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { Certifications } from './pages/Certifications';
import { SpecialtyTraining } from './pages/SpecialtyTraining';
import { Career } from './pages/Career';
import { TrainersPage } from './pages/TrainersPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailsPage } from './pages/BlogDetailsPage';
import { FAQPage } from './pages/FAQPage';
import { Contact } from './pages/ContactPage';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string | undefined>(undefined);

  const handleOpenModal = (courseTitle?: string) => {
    setSelectedCourseForModal(courseTitle);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEnquiryModalOpen(false);
    setSelectedCourseForModal(undefined);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-teal-500 selection:text-white antialiased">
        
        {/* Navigation */}
        <Navbar onOpenEnquiryModal={() => handleOpenModal()} />

        {/* Page Content Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/about" element={<About onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/courses" element={<Courses onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/courses/:slug" element={<CourseDetailsPage onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/certifications" element={<Certifications onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/specialties" element={<SpecialtyTraining onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/career" element={<Career onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/trainers" element={<TrainersPage onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/gallery" element={<GalleryPage onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/blog" element={<BlogPage onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/blog/:slug" element={<BlogDetailsPage onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/faq" element={<FAQPage onOpenEnquiryModal={handleOpenModal} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenEnquiryModal={handleOpenModal} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Floating Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquiryModalOpen}
          onClose={handleCloseModal}
          defaultCourse={selectedCourseForModal}
        />

      </div>
    </Router>
  );
}

export default App;
