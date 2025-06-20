
import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Full Stack Web Development Cohort",
      issuer: "100xDevs",
      date: "2023",
      credentialId: "100X-FSWD-2023-001",
      description: "Comprehensive full-stack web development program covering modern web technologies, system design, and software engineering best practices.",
      skills: ["React.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Docker", "System Design", "DSA"],
      badge: "💻",
      level: "Professional",
      verified: true
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Professional': return 'text-yellow-400 border-yellow-400';
      case 'Administrator': return 'text-blue-400 border-blue-400';
      case 'Associate': return 'text-green-400 border-green-400';
      case 'Developer': return 'text-purple-400 border-purple-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-green-400">$</span> ls -la /certifications/
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gray-800 border border-green-400/30 rounded-lg">
            <div className="text-3xl font-bold text-green-400">1</div>
            <div className="text-gray-300 text-sm">Certification</div>
          </div>
          <div className="text-center p-6 bg-gray-800 border border-green-400/30 rounded-lg">
            <div className="text-3xl font-bold text-yellow-400">1</div>
            <div className="text-gray-300 text-sm">Professional Level</div>
          </div>
          <div className="text-center p-6 bg-gray-800 border border-green-400/30 rounded-lg">
            <div className="text-3xl font-bold text-blue-400">8</div>
            <div className="text-gray-300 text-sm">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gray-800 border border-green-400/30 rounded-lg">
            <div className="text-3xl font-bold text-green-400">100%</div>
            <div className="text-gray-300 text-sm">Verified</div>
          </div>
        </div>

        {/* Certification Card - Centered */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-green-400/30 rounded-lg p-8 card-hover-effect"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{cert.badge}</div>
                    <div>
                      <div className={`inline-block px-3 py-1 rounded text-sm border ${getLevelColor(cert.level)}`}>
                        {cert.level}
                      </div>
                    </div>
                  </div>
                  {cert.verified && (
                    <div className="flex items-center space-x-2 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Verified</span>
                    </div>
                  )}
                </div>

                {/* Certification Info */}
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {cert.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-green-400">
                    <Award className="w-5 h-5" />
                    <span className="text-base">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Calendar className="w-5 h-5" />
                    <span className="text-base">{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-green-400 font-semibold mb-3 text-base">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm hover:bg-green-400 hover:text-black transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                  <div className="text-sm text-gray-400 font-mono">
                    ID: {cert.credentialId}
                  </div>
                  <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
                    <span className="text-sm">Verify</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
