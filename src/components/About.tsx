
import React from 'react';
import { User, MapPin, Calendar, Heart, Code, Coffee } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-green-400">$</span> whoami
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="bg-gray-800 border border-green-400 rounded-lg p-6 profile-card-hover">
              <img
                src="/lovable-uploads/fcbec8fa-013c-4382-a386-745955d79738.png"
                alt="Rakesh Kumar Jani"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="mt-4 space-y-2 font-mono text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Gurugram, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">1+ years experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Vibe Coding & Bike Touring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="bg-gray-800 border border-green-400/30 rounded-lg p-6 card-hover-effect">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 font-mono">
                {'>'} About Me
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm Rakesh Kumar Jani, an enthusiastic and driven Full Stack Developer 
                  with expertise in ASP .NET, C#, React.js, and modern web technologies. 
                  Currently working as Software Engineer 1 at Johnson Controls India Pvt. Ltd.
                </p>
                <p>
                  I specialize in building robust web applications with React.js frontends 
                  and .NET backends, creating energy dashboards and reporting systems for 
                  building automation. My passion lies in solving complex problems and 
                  creating efficient, scalable solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies through 
                  "vibe coding", going on bike tours, or creating video content. I believe 
                  in continuous learning and recently completed the 100x Dev Full Stack Cohort.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 border border-green-400/30 rounded-lg p-6 card-hover-effect">
              <h3 className="text-xl font-semibold text-green-400 mb-4 font-mono">
                {'>'} Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-sm text-gray-400">DSA Problems Solved</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-white">7.75</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-white">1+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-green-400/30 rounded-lg p-6 card-hover-effect">
              <h3 className="text-xl font-semibold text-green-400 mb-4 font-mono">
                {'>'} Current Focus
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span>Building Energy Dashboards with React.js & Highcharts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span>Backend APIs with .NET C# & SPARQL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span>Full Stack Development & Testing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span>Problem Solving & DSA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
