import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer 1",
      company: "Johnson Controls India Pvt. Ltd",
      location: "Gurugram, India",
      period: "Oct 2023 - Present",
      type: "Full-time",
      description: "Developing energy dashboard and reporting web applications for Metasys building automation systems using modern web technologies.",
      achievements: [
        "Developed Energy Dashboard using React.js and Highcharts for enhanced data visualization",
        "Created backend APIs using .NET C# with SPARQL queries for graph database operations",
        "Implemented comprehensive testing with Vitest, Cypress, and SpecFlow for reliability",
        "Enhanced user interaction and data visualization for building automation systems"
      ],
      technologies: ["React.js", ".NET C#", "Highcharts", "SPARQL", "Graph DB", "Vitest", "Cypress", "SpecFlow"],
      projects: [
        "Energy Dashboard Development",
        "Metasys Reporting System",
        "Backend API Integration"
      ]
    },
    {
      title: "Graduate Engineer Trainee Intern",
      company: "Johnson Controls India Pvt. Ltd", 
      location: "Gurugram, India",
      period: "Jan 2023 - Sep 2023",
      type: "Internship",
      description: "Comprehensive training program covering full-stack development, testing, and DevOps practices with hands-on project experience.",
      achievements: [
        "Completed intensive training in ASP .NET, C#, React.js, SQL, and DevOps",
        "Contributed to SCI feature development in Verasys with PostgreSQL integration",
        "Implemented SendGrid integration and Minio service for image uploads",
        "Conducted performance testing on Web and iOS applications"
      ],
      technologies: ["ASP .NET", "C#", "React.js", "PostgreSQL", "SendGrid", "Minio", "Postman", "Git"],
      projects: [
        "Verasys SCI Feature Development",
        "Performance Testing Suite",
        "API Development & Optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-green-400">$</span> grep -r "experience" /career
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-black" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-1 h-40 bg-green-400/30 mt-4"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-800 border border-green-400/30 rounded-lg p-6 card-hover-effect">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-green-400 text-lg">
                        <span>{exp.company}</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-gray-300 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-green-400 font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2 text-gray-300">
                            <span className="text-green-400 mt-1">▶</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="text-green-400 font-semibold mb-3">Notable Projects:</h4>
                      <ul className="space-y-2">
                        {exp.projects.map((project, i) => (
                          <li key={i} className="flex items-center space-x-2 text-gray-300">
                            <span className="text-green-400">•</span>
                            <span className="text-sm">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6">
                    <h4 className="text-green-400 font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-green-400 hover:text-black transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-800 border border-green-400/30 rounded-lg">
            <div className="text-3xl font-bold text-green-400">1+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gray-800 border border-green-400/30 rounded-lg">
            <div className="text-3xl font-bold text-green-400">5+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-gray-800 border border-green-400/30 rounded-lg">
            <div className="text-3xl font-bold text-green-400">2</div>
            <div className="text-gray-300">Companies</div>
          </div>
          <div className="text-center p-6 bg-gray-800 border border-green-400/30 rounded-lg">
            <div className="text-3xl font-bold text-green-400">10+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
