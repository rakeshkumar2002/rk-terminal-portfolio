
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "Lovely Professional University",
      location: "Punjab, India",
      period: "2019 - 2023",
      gpa: "7.75/10.0",
      coursework: ["Data Structures & Algorithms", "Object Oriented Programming", "Web Development", "Database Management Systems", "Software Engineering", "Computer Networks"],
      achievements: ["Data Science Minor", "DevOps Minor", "100+ DSA Problems Solved"],
      minors: ["Data Science", "DevOps"]
    },
    {
      degree: "Higher Secondary Education",
      school: "Kendriya Vidyalaya Rayagada",
      location: "Rayagada, India", 
      period: "2017 - 2019",
      gpa: "75%",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      achievements: ["House Captain in Class 11th", "Academic Excellence"]
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-green-400">$</span> cat education.json
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-black" />
                  </div>
                  {index < education.length - 1 && (
                    <div className="w-1 h-32 bg-green-400/30 mt-4"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-800 border border-green-400/30 rounded-lg p-6 card-hover-effect">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-green-400">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.school}, {edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="text-gray-300">
                          <strong>Score:</strong> {edu.gpa}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-green-400 font-semibold mb-2">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-green-400 font-semibold mb-2">Achievements:</h4>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-center space-x-2 text-gray-300">
                                <Award className="w-4 h-4 text-green-400" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {edu.minors && (
                          <div>
                            <h4 className="text-green-400 font-semibold mb-2">Minors:</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.minors.map((minor, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                                >
                                  {minor}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <div className="bg-gray-900 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-400">{edu.gpa}</div>
                          <div className="text-sm text-gray-400">Academic Score</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
