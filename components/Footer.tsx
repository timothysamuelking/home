import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="w-[86%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div>
                <h5 className="font-bold mb-6 text-brand-dark text-lg">Company</h5>
                <ul className="space-y-4 text-gray-500">
                    <li><a href="#" className="hover:text-brand-gold transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold mb-6 text-brand-dark text-lg">Learn</h5>
                <ul className="space-y-4 text-gray-500">
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Podcast</a></li>
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Events</a></li>
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Books</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold mb-6 text-brand-dark text-lg">Services</h5>
                <ul className="space-y-4 text-gray-500">
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Live Workshops</a></li>
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Online Courses</a></li>
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Business Made Simple</a></li>
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Hire a Guide</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold mb-6 text-brand-dark text-lg">Connect</h5>
                <ul className="space-y-4 text-gray-500">
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Facebook</a></li>
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Twitter</a></li>
                    <li><a href="#" className="hover:text-brand-gold transition-colors">LinkedIn</a></li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 text-sm text-gray-400 font-sans">
             <p>© {new Date().getFullYear()} StoryBrand Replica. All rights reserved.</p>
             <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-600">Terms</a>
                <a href="#" className="hover:text-gray-600">Privacy</a>
             </div>
        </div>
      </div>
    </footer>
  );
};