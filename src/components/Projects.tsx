import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Code, Database, Server } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: "Restaurant Management App",
      category: "fullstack",
      period: "Apr 2023 - May 2023",
      description: "A comprehensive restaurant management system with intuitive UI and robust backend API for handling orders, menu management, and customer data.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      technologies: ["React.js", "Bootstrap", ".NET", "Entity Framework", "MySQL", "JWT", "Highcharts"],
      features: [
        "Responsive UI with React.js and Bootstrap",
        "Data visualization with Highcharts",
        "Robust .NET Web API backend",
        "JWT token authentication",
        "MySQL database management",
        "Order and menu management system"
      ],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "E-Commerce Mobile App",
      category: "mobile",
      period: "Jun 2021 - Jul 2021",
      description: "Full-featured e-commerce mobile application with Firebase backend, featuring user authentication, shopping cart, order management, and real-time updates.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Java", "Android", "Firebase", "REST APIs", "Material Design"],
      features: [
        "User authentication and registration",
        "Shopping cart and order management",
        "Firebase real-time database",
        "Persistent user sessions",
        "Material Design UI components",
        "Third-party API integrations"
      ],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Energy Dashboard - Metasys",
      category: "professional",
      period: "Oct 2023 - Present",
      description: "Advanced energy monitoring dashboard for building automation systems using React.js and Highcharts, with backend APIs for data visualization and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React.js", "Highcharts", ".NET C#", "SPARQL", "Graph Database", "TypeScript"],
      features: [
        "Real-time energy data visualization",
        "Interactive charts and graphs",
        "SPARQL queries for graph database",
        "RESTful API integration",
        "Responsive dashboard design",
        "Data export and reporting"
      ],
      github: "#",
      demo: "#",
      status: "In Progress"
    },
    {
      title: "Verasys SCI Feature",
      category: "professional", 
      period: "Jan 2023 - Sep 2023",
      description: "Customer interface feature development for Verasys platform including PostgreSQL integration, SendGrid email service, and Minio image upload service.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["ASP .NET", "C#", "PostgreSQL", "SendGrid", "Minio", "REST APIs"],
      features: [
        "Customer interface development",
        "PostgreSQL database integration",
        "Email notifications with SendGrid",
        "Image upload with Minio service",
        "API development and optimization",
        "Performance testing and optimization"
      ],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Portfolio Terminal",
      category: "personal",
      period: "Dec 2024",
      description: "Interactive terminal-style portfolio website built with React.js, featuring command-line interface, smooth animations, and responsive design.",
      image: "https://images.unsplash.com/photo-1629654291663-b91ad427bcc0?w=600&h=400&fit=crop",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      features: [
        "Terminal-style command interface",
        "Smooth scroll animations",
        "Responsive design",
        "Interactive UI components",
        "Modern CSS styling",
        "Cross-browser compatibility"
      ],
      github: "https://github.com/rakeshkumar2002",
      demo: "#",
      status: "Completed"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'professional', label: 'Professional', count: projects.filter(p => p.category === 'professional').length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'personal', label: 'Personal', count: projects.filter(p => p.category === 'personal').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-400';
      case 'In Progress': return 'text-yellow-400';
      case 'Planning': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-green-400">$</span> ls -la /projects/
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">
            A showcase of my development journey and technical expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'border-green-400 bg-green-400 text-black'
                  : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-green-400'
              }`}
            >
              <span className="font-semibold">{category.label}</span>
              <span className="ml-2 text-sm">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-green-400/30 rounded-lg overflow-hidden card-hover-effect"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)} bg-gray-900/80`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-green-400 font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-green-400 font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-300 text-sm">
                        <span className="text-green-400 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-green-400 text-black rounded-lg hover:bg-green-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Summary */}
        <div className="mt-16 bg-gray-800 border border-green-400 rounded-lg p-6 font-mono">
          <div className="text-green-400 mb-4">$ cat project_summary.log</div>
          <div className="space-y-2 text-gray-300 text-sm">
            <div>┌─ Project Portfolio Summary</div>
            <div>├─ Total Projects: {projects.length}</div>
            <div>├─ Professional Projects: {projects.filter(p => p.category === 'professional').length}</div>
            <div>├─ Personal Projects: {projects.filter(p => p.category === 'personal').length + projects.filter(p => p.category === 'fullstack').length + projects.filter(p => p.category === 'mobile').length}</div>
            <div>├─ Technologies Used: React.js, .NET, Java, Firebase, PostgreSQL</div>
            <div>├─ Current Status: Actively developing and learning</div>
            <div>└─ Next Goal: Contributing to open source projects ✓</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
