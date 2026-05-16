import Link from "next/link";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { navLinks } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand & Mission */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              JG<span className="text-primary">UNI</span>
            </span>
          </Link>
          <p className="text-slate-400 leading-relaxed">
            Empowering the next generation of global leaders through innovative education, research excellence, and holistic development.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Our Schools</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="hover:text-primary transition-colors">School of Engineering</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">School of Management</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">School of Design</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">School of Law</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">School of Science</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <span>123 University Campus, Education Valley, Gujarat, India 380001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-primary flex-shrink-0" size={20} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-primary flex-shrink-0" size={20} />
              <span>admissions@jguniversity.edu</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© 2024 JG University. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
