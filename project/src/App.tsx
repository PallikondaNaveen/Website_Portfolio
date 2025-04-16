import React, { useState, useRef } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaFileDownload,
  FaCogs,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { emailConfig } from "./config/emailjs";
import profilephoto from "/src/Images/profile_photo.jpg";
import resume from "./Files/resume_Naveen.pdf";

function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        emailConfig.publicKey
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Email error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume_Naveen.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={profilephoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pallikonda Naveen
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Full Stack Software Engineer
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/PallikondaNaveen"
                className="hover:text-blue-200 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pallikonda-naveen19/"
                className="hover:text-blue-200 transition-colors"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a
                href="mailto:n.pallikonda19@gmail.com"
                className="hover:text-blue-200 transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Get in Touch
              </a>
              <a
                onClick={handleDownload}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
              >
                <FaFileDownload className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                Results-driven Full Stack Developer with over 2 years of
                experience in building high-performance web applications using
                modern technologies. Specialized in React, Microservices
                architecture, and version control tools like Git and GitHub.
                Skilled in developing scalable RESTful APIs and implementing
                security measures such as JWT and RBAC. Proven track record of
                optimizing UI responsiveness and enhancing backend performance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Currently leading development initiatives at Diyos Infotech Pvt.
                Ltd., where I collaborate with cross-functional teams to deliver
                high-quality solutions. Seeking challenging opportunities that
                leverage my technical expertise in full-stack development and
                passion for innovative technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Frontend Skills */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 relative"> {/* Added relative for tail placement */}
            <div className="text-blue-600 mb-4">
              <FaCode className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Frontend Development
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>React.js</li>
              <li>HTML, CSS, JavaScript, TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-200 rounded-tl-full opacity-50"></div> {/* Tail */}
          </div>

          {/* Backend Skills */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 relative"> {/* Added relative for tail placement */}
            <div className="text-blue-600 mb-4">
              <FaDatabase className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Backend Development
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>C#, .NET MAUI</li>
              <li>ASP.NET, ASP.NET Core, MVC</li>
              <li>Entity Framework Core</li>
              <li>SQL, T-SQL, SQL Server</li>
            </ul>
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-200 rounded-tl-full opacity-50"></div> {/* Tail */}
          </div>

          {/* Tools & DevOps */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 relative"> {/* Added relative for tail placement */}
            <div className="text-blue-600 mb-4">
              <FaCogs className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Tools & DevOps</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Git & GitHub</li>
              <li>CI/CD Pipelines</li>
              <li>Docker</li>
            </ul>
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-200 rounded-tl-full opacity-50"></div> {/* Tail */}
          </div>
        </div>
      </div>
    </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    DotNet Full Stack Developer
                  </h3>
                  <p className="text-gray-600">Diyos Infotech Pvt. Ltd</p>
                </div>
                <p className="text-gray-500">2025/Dec - Present</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Provide technical support and collaborate with the tech team
                  to troubleshoot and resolve application issues.
                </li>
                <li>
                  Develop and implement new feature requirements based on client
                  specifications, ensuring high-quality, scalable, and efficient
                  solutions.
                </li>
                <li>
                  Work across the stack when required, assisting with UI
                  enhancements and frontend integrations using modern frameworks
                  like React.js.
                </li>
                <li>
                  Manage both new features development and technical support
                  responsibilities, ensuring seamless integration of
                  enhancements while maintaining system stability and
                  performance.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Junior DotNet Developer
                  </h3>
                  <p className="text-gray-600">Marven Data Systems</p>
                </div>
                <p className="text-gray-500">2023/April - 2024/November</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Developed and maintained robust web applications using C#,
                  ASP.NET MVC Core, and SQL Server, enhancing user experience
                  and system performance.
                </li>
                <li>
                  Utilized JavaScript and jQuery for client-side validation and
                  enhanced user interface responsiveness.
                </li>
                <li>
                  Developed and maintained RESTful APIs using ASP.NET Core Web
                  API, integrating them with SQL Server databases to support
                  dynamic data exchange and enhance application functionality.
                </li>
                <li>
                  Optimized application security by implementing JWT for secure
                  data transmission.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  FaME - Payroll Management System
                </h3>
                <p className="text-gray-600 mb-4">
                  A robust Payroll Management Web Application designed for the
                  manpower industry, featuring automated workforce and payroll
                  processes, employee record management, and integrated
                  insurance handling.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Automated payroll processing and ESI/medical insurance
                    integration
                  </li>
                  <li>Employee record management system</li>
                  <li>Automated invoicing for outsourced employees</li>
                  <li>Real-time financial transaction tracking</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  ITAM - Asset Management System
                </h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive IT Asset Management system centralizing asset
                  tracking, integrating financial, contractual, and inventory
                  data for improved asset lifecycle visibility.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Management of 5000+ assets with real-time health monitoring
                  </li>
                  <li>Asset mapping and categorization system</li>
                  <li>Dynamic dashboard with interactive data visualization</li>
                  <li>End-of-warranty alerts and spending trend analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Certifications & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Certification 2 */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 mt-4">
              <h3 className="text-xl font-semibold mb-2">
                ReactJS for Beginners
              </h3>
              <p className="text-gray-600 mb-4">
                Earned from Simplilearn - Skillup.
              </p>
              <a
                href="https://simpli.app.link/syppEdEodRb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                View Certificate <FaExternalLinkAlt className="w-4 h-4 ml-2" />
              </a>
            </div>
            {/* Certification 1 */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Foundational C# with Microsoft
              </h3>
              <p className="text-gray-600 mb-4">
                Earned from Microsoft on December 31, 2023.
              </p>
              <a
                href="https://www.freecodecamp.org/certification/fcca8bdfc56-9f81-445e-ac6e-475921472fff/foundational-c-sharp-with-microsoft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                View Certificate <FaExternalLinkAlt className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Certification 2 */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                SQL (Basic) - HackerRank
              </h3>
              <p className="text-gray-600 mb-4">
                Certified by HackerRank in March 2023.
              </p>
              <a
                href="https://www.hackerrank.com/certificates/e345f66f68e9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                View Certificate <FaExternalLinkAlt className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get In Touch
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                autoComplete="off"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" // Modified class
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" // Modified class
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" // Modified class
                    placeholder="Your message"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Pallikonda Naveen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
