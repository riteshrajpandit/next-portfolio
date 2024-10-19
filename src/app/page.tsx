import Image from "next/image";
import profilePic from '../app/assets/images/me.jpg'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">About</a></li>
              <li><a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contact</a></li>
              
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section id="hero" className="text-center mb-20">
          <Image
            src={profilePic}
            alt="John Doe"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6"
          />
          <h2 className="text-4xl font-bold mb-4">Full-Stack Developer</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating beautiful and functional web applications. 
            Experienced in React, Node.js, and cloud technologies.
          </p>
        </section>

        <section id="about" className="mb-20">
          <h3 className="text-2xl font-bold mb-6">About Me</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            With over 5 years of experience in web development, I specialize in 
            building scalable and performant applications. My expertise includes 
            front-end technologies like React and Next.js, as well as back-end 
            technologies such as Node.js and PostgreSQL.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I&apos;m not coding, you can find me hiking in the mountains or 
            experimenting with new cooking recipes.
          </p>
        </section>

        <section id="projects" className="mb-20">
          <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold mb-2">E-commerce Platform</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A full-stack e-commerce solution built with Next.js, Stripe, and MongoDB.
              </p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
            </div>
            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold mb-2">Task Management App</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A React-based task manager with real-time updates using Firebase.
              </p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center">
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/johndoe" className="text-3xl hover:text-gray-600 dark:hover:text-gray-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/johndoe" className="text-3xl hover:text-gray-600 dark:hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="mailto:john@example.com" className="text-3xl hover:text-gray-600 dark:hover:text-gray-300">
              <FaEnvelope />
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-500 dark:text-gray-400">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}