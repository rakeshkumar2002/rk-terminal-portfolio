import React, { useState } from 'react';
import { Code, Database, Server, Monitor, GitBranch, Shield } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const AnimatedProgressBar = ({ skill, index }: { skill: any; index: number }) => {
  const { ref, isVisible, progress } = useScrollProgress(0.3);

  const getProgressGradient = (level: number) => {
    if (level >= 90) return 'bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400';
    if (level >= 80) return 'bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-400';
    if (level >= 70) return 'bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-400';
    return 'bg-gradient-to-r from-red-500 via-pink-400 to-rose-400';
  };

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-5 border border-gray-700/50 transition-all duration-500 hover:border-green-400/50 hover:shadow-xl hover:shadow-green-400/10 hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      
      {/* Shimmer effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-400/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className="text-white font-semibold text-lg font-display group-hover:text-green-50 transition-colors duration-300">{skill.name}</span>
          <div className="text-right">
            <div className="text-green-400 font-bold text-lg font-mono group-hover:scale-110 transition-transform duration-300">{skill.level}%</div>
            <div className="text-gray-400 text-xs font-medium mt-1 group-hover:text-gray-300 transition-colors duration-300">{skill.years} years</div>
          </div>
        </div>
        
        {/* Enhanced Animated Progress Bar */}
        <div className="w-full bg-gray-700/80 rounded-full h-3 mb-3 overflow-hidden shadow-inner">
          <div
            className={`h-3 rounded-full transition-all duration-[2000ms] ease-out ${getProgressGradient(skill.level)} shadow-sm relative overflow-hidden group-hover:shadow-lg`}
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 150}ms`
            }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Pulsing effect when animating */}
            {isVisible && (
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Development',
      color: 'text-blue-400',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      skills: [
        { name: 'React.js', level: 90, years: 2 },
        { name: 'JavaScript', level: 88, years: 3 },
        { name: 'TypeScript', level: 85, years: 1 },
        { name: 'HTML/CSS', level: 92, years: 3 },
        { name: 'Bootstrap', level: 85, years: 2 },
        { name: 'Highcharts', level: 80, years: 1 },
        { name: 'Responsive Design', level: 88, years: 2 },
        { name: 'UI/UX Design', level: 75, years: 1 }
      ]
    },
    backend: {
      icon: Server,
      title: 'Backend Development',
      color: 'text-green-400',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      skills: [
        { name: 'ASP .NET', level: 92, years: 2 },
        { name: 'C#', level: 90, years: 2 },
        { name: '.NET Web API', level: 88, years: 2 },
        { name: 'Entity Framework', level: 85, years: 1 },
        { name: 'REST APIs', level: 90, years: 2 },
        { name: 'SPARQL Queries', level: 80, years: 1 },
        { name: 'Microservices', level: 75, years: 1 },
        { name: 'JWT Authentication', level: 85, years: 1 }
      ]
    },
    database: {
      icon: Database,
      title: 'Database & Storage',
      color: 'text-purple-400',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      skills: [
        { name: 'PostgreSQL', level: 88, years: 2 },
        { name: 'MySQL', level: 85, years: 2 },
        { name: 'Graph Database', level: 78, years: 1 },
        { name: 'SQL', level: 90, years: 3 },
        { name: 'Database Design', level: 82, years: 2 },
        { name: 'Minio', level: 75, years: 1 },
        { name: 'Firebase', level: 80, years: 1 },
        { name: 'Data Modeling', level: 78, years: 2 }
      ]
    },
    devops: {
      icon: Monitor,
      title: 'DevOps & Tools',
      color: 'text-yellow-400',
      bgGradient: 'from-yellow-500/20 to-orange-500/20',
      skills: [
        { name: 'Git', level: 92, years: 3 },
        { name: 'Docker', level: 80, years: 1 },
        { name: 'Jenkins', level: 78, years: 1 },
        { name: 'Postman', level: 90, years: 2 },
        { name: 'Performance Testing', level: 85, years: 1 },
        { name: 'DevOps Practices', level: 75, years: 1 },
        { name: 'CI/CD', level: 72, years: 1 },
        { name: 'Linux', level: 70, years: 1 }
      ]
    },
    programming: {
      icon: GitBranch,
      title: 'Programming Languages',
      color: 'text-red-400',
      bgGradient: 'from-red-500/20 to-rose-500/20',
      skills: [
        { name: 'C#', level: 90, years: 2 },
        { name: 'Java', level: 88, years: 3 },
        { name: 'C++', level: 85, years: 3 },
        { name: 'JavaScript', level: 88, years: 3 },
        { name: 'TypeScript', level: 85, years: 1 },
        { name: 'Python', level: 75, years: 1 },
        { name: 'Object Oriented Programming', level: 90, years: 3 },
        { name: 'Data Structures & Algorithms', level: 88, years: 3 }
      ]
    },
    testing: {
      icon: Shield,
      title: 'Testing & Quality',
      color: 'text-orange-400',
      bgGradient: 'from-orange-500/20 to-amber-500/20',
      skills: [
        { name: 'Unit Testing', level: 85, years: 1 },
        { name: 'Vitest', level: 82, years: 1 },
        { name: 'Cypress', level: 80, years: 1 },
        { name: 'SpecFlow', level: 78, years: 1 },
        { name: 'Performance Testing', level: 85, years: 1 },
        { name: 'Functional Testing', level: 80, years: 1 },
        { name: 'Test Automation', level: 75, years: 1 },
        { name: 'Quality Assurance', level: 82, years: 1 }
      ]
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 tracking-tight">
            <span className="text-green-400 font-mono">$</span> ./skills --list --verbose
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-green-400 mx-auto mb-3 rounded-full"></div>
          <p className="text-gray-300 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Technical expertise across the full development stack
          </p>
        </div>

        {/* Enhanced Category Navigation with Micro-interactions */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`group relative overflow-hidden flex items-center space-x-2 px-4 py-3 rounded-xl border-2 transition-all duration-300 font-semibold text-sm transform hover:scale-105 active:scale-95 ${
                  activeCategory === key
                    ? `border-green-400 bg-gradient-to-r ${category.bgGradient} backdrop-blur-sm text-white shadow-lg shadow-green-400/25 scale-105`
                    : `border-gray-600 bg-gray-800/70 backdrop-blur-sm text-gray-300 hover:border-green-400/60 hover:bg-gray-700/70 hover:text-white hover:shadow-md`
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <IconComponent className="w-5 h-5 relative z-10 transition-transform duration-200 group-hover:rotate-12 group-active:rotate-45" />
                <span className="relative z-10">{category.title}</span>
                
                {/* Ripple effect on click */}
                <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-150"></div>
              </button>
            );
          })}
        </div>

        {/* Enhanced Skills Display */}
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-green-400/30 rounded-2xl p-6 backdrop-blur-sm shadow-2xl">
          <div className="flex items-center space-x-3 mb-6">
            {React.createElement(skillCategories[activeCategory].icon, {
              className: `w-8 h-8 ${skillCategories[activeCategory].color} transition-transform duration-200 hover:scale-110`
            })}
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
              {skillCategories[activeCategory].title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <AnimatedProgressBar key={index} skill={skill} index={index} />
            ))}
          </div>

          {/* Enhanced Category Summary */}
          <div className="mt-6 p-5 bg-gradient-to-r from-gray-900/90 to-gray-800/90 rounded-xl border border-green-400/20 backdrop-blur-sm shadow-lg">
            <h4 className="text-green-400 font-semibold mb-4 font-mono text-base flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              $ echo "Category Analysis:"
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="text-2xl font-bold text-white font-display mb-1 group-hover:text-green-400 transition-colors duration-300">
                  {skillCategories[activeCategory].skills.length}
                </div>
                <div className="text-xs text-gray-400 font-medium">Technologies</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="text-2xl font-bold text-green-400 font-display mb-1 group-hover:scale-110 transition-transform duration-300">
                  {Math.round(
                    skillCategories[activeCategory].skills.reduce((acc, skill) => acc + skill.level, 0) /
                    skillCategories[activeCategory].skills.length
                  )}%
                </div>
                <div className="text-xs text-gray-400 font-medium">Avg Proficiency</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="text-2xl font-bold text-blue-400 font-display mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {Math.round(
                    skillCategories[activeCategory].skills.reduce((acc, skill) => acc + skill.years, 0) /
                    skillCategories[activeCategory].skills.length
                  )}
                </div>
                <div className="text-xs text-gray-400 font-medium">Avg Experience</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="text-2xl font-bold text-yellow-400 font-display mb-1 group-hover:text-amber-400 transition-colors duration-300">
                  {skillCategories[activeCategory].skills.filter(skill => skill.level >= 90).length}
                </div>
                <div className="text-xs text-gray-400 font-medium">Expert Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
