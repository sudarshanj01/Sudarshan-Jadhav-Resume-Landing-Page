"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, ChevronRight, Github, Linkedin, Mail, FileDown, Terminal, Database, Cloud, Settings, BarChart } from 'lucide-react';
import Link from 'next/link';

// Custom components inspired by shadcn UI but with unique styling
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const Button = ({ children, active = false, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center cursor-pointer gap-2 ${active
      ? 'bg-blue-500 text-white shadow-md'
      : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
      } ${className}`}
  >
    {children}
  </button>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
    {children}
  </span>
);

const TabContent = ({ active, children }) => (
  <div className={`${active ? 'block' : 'hidden'}`}>
    {children}
  </div>
);

// Pre-defined positions to prevent hydration mismatch
const codeElementPositions = [
  { top: "10%", left: "15%", rotate: "10deg", opacity: 0.5 },
  { top: "20%", left: "80%", rotate: "-15deg", opacity: 0.7 },
  { top: "35%", left: "25%", rotate: "25deg", opacity: 0.6 },
  { top: "45%", left: "70%", rotate: "-5deg", opacity: 0.4 },
  { top: "60%", left: "10%", rotate: "15deg", opacity: 0.7 },
  { top: "70%", left: "60%", rotate: "-20deg", opacity: 0.5 },
  { top: "80%", left: "30%", rotate: "5deg", opacity: 0.6 },
  { top: "15%", left: "45%", rotate: "-10deg", opacity: 0.5 },
  { top: "55%", left: "85%", rotate: "20deg", opacity: 0.7 },
  { top: "75%", left: "50%", rotate: "-15deg", opacity: 0.6 },
  { top: "25%", left: "5%", rotate: "10deg", opacity: 0.4 },
  { top: "40%", left: "95%", rotate: "-25deg", opacity: 0.7 },
  { top: "65%", left: "35%", rotate: "15deg", opacity: 0.5 },
  { top: "85%", left: "75%", rotate: "-5deg", opacity: 0.6 },
  { top: "5%", left: "65%", rotate: "20deg", opacity: 0.4 },
  { top: "30%", left: "55%", rotate: "-10deg", opacity: 0.7 },
  { top: "50%", left: "20%", rotate: "5deg", opacity: 0.5 },
  { top: "90%", left: "40%", rotate: "-20deg", opacity: 0.6 },
  { top: "95%", left: "90%", rotate: "15deg", opacity: 0.7 },
  { top: "12%", left: "28%", rotate: "-5deg", opacity: 0.5 }
];

const downloadResume = () => {
  // Create a link element
  const link = document.createElement('a');
  // Set the href to your PDF file in the public folder
  link.href = '/Sudarshan Java Full Stack.docx';  // Assuming your file is named resume.pdf in the public folder
  link.download = 'Sudarshan_Jadhav_Resume.docx';
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DigitalResume = () => {
  const [activeTab, setActiveTab] = useState('dev');
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleObserver = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    dev: [
      { name: 'Java', icon: <Terminal size={20} /> },
      { name: 'Spring Boot', icon: <Settings size={20} /> },
      { name: 'JavaScript', icon: <Code size={20} /> },
      { name: 'React', icon: <Code size={20} /> },
      { name: 'Next.js', icon: <Code size={20} /> },
      { name: 'HTML5/CSS3', icon: <Code size={20} /> },
      { name: 'MySQL', icon: <Database size={20} /> },
      { name: 'MongoDB', icon: <Database size={20} /> },
      { name: 'PostgreSQL', icon: <Database size={20} /> },

    ],
    ops: [
      { name: 'AWS', icon: <Cloud size={20} /> },
      { name: 'Docker', icon: <Server size={20} /> },
      { name: 'Kubernetes', icon: <Server size={20} /> },
      { name: 'CI/CD', icon: <Settings size={20} /> },
      { name: 'Jenkins', icon: <Settings size={20} /> },
      { name: 'Terraform', icon: <Cloud size={20} /> },
      { name: 'Ansible', icon: <Settings size={20} /> },
      { name: 'Git', icon: <Github size={20} /> },
      { name: 'CloudWatch', icon: <BarChart size={20} /> },
    ]
  };

  const codeStrings = ['<div>', '</>', '{code}', '[]', 'const', 'function', '()', '&&', '||'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-blue-900">
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? 'bg-blue-100/80 shadow-md py-3' : 'bg-transparent py-6'
        }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-blue-500 text-white p-2 rounded-lg"><Code size={24} /></span>
            <span>SudarshanDev</span>
          </h1>

          <div className="flex items-center gap-4">
            <a href="https://github.com/sudarshanj01" target='blank' className="p-2 rounded-full hover:bg-blue-200 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sudarshan-jadhav-8a3982199/" target='blank' className="p-2 rounded-full hover:bg-blue-200 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sudarshan08062001@gmail.com" target='blank' className="p-2 rounded-full hover:bg-blue-200 transition-colors">
              <Mail size={20} />
            </a>
            <Button
              onClick={downloadResume}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <FileDown size={18} />
              <span>Resume</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge>2+ Years Experience</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
                  Full Stack SDE <span className="text-blue-500">+</span> DevOps Engineer
                </h1>
                <p className="text-xl mt-6 text-blue-800">
                  Building scalable web applications with Java, Spring Boot, React - Next JS and AWS cloud infrastructure
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-4 mt-8"
              >
                <Button
                  active={activeTab === 'dev'}
                  onClick={() => setActiveTab('dev')}
                >
                  <Code size={20} /> Development
                </Button>
                <Button
                  active={activeTab === 'ops'}
                  onClick={() => setActiveTab('ops')}
                >
                  <Server size={20} /> Operations
                </Button>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10">
                    {codeElementPositions.map((pos, i) => (
                      <div
                        key={i}
                        className="absolute text-2xl font-mono"
                        style={{
                          top: pos.top,
                          left: pos.left,
                          transform: `rotate(${pos.rotate})`,
                          opacity: pos.opacity
                        }}
                      >
                        {codeStrings[i % codeStrings.length]}
                      </div>
                    ))}
                  </div>

                  <div className="text-center z-10">
                    <div className="bg-black/80 backdrop-blur-md text-blue-400 py-4 px-8 rounded-xl shadow-lg font-mono">
                      <span className="block">$ whoami</span>
                      <span className="text-3xl font-bold block mt-2">Sudarshan</span>
                      <span className="block mt-4">crafting_digital_experiences.exe</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <TabContent active={activeTab === 'dev'}>
            <div
              id="dev-content"
              className="animate-on-scroll space-y-12"
              style={{
                transform: isVisible['dev-content'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible['dev-content'] ? 1 : 0,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
              }}
            >
              <h2 className="text-3xl font-bold border-b-2 border-blue-300 pb-2 inline-block">
                Development Expertise
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                    <span className="bg-blue-200 p-2 rounded-lg"><Code size={20} /></span>
                    Backend Development
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Proficient in developing robust backend systems using Java and Spring Boot ecosystem
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      Spring MVC &amp; Spring Security
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      RESTful APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      Spring Data JPA
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                    <span className="bg-blue-200 p-2 rounded-lg"><Code size={20} /></span>
                    Frontend Development
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Creating responsive and interactive user interfaces with modern JavaScript frameworks
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      React &amp; Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      HTML5, CSS3, Tailwind CSS
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      Cross-browser compatibility
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                    <span className="bg-blue-200 p-2 rounded-lg"><Database size={20} /></span>
                    Database Management
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Designing and optimizing database schemas for efficient data storage and retrieval
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      MySQL, PostgreSQL  &amp; MongoDB
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      Query optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      Data modeling
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Key Development Projects</h3>
                <div className="space-y-8">
                  <Card className="p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all">
                    <div className="w-full md:w-2/3">
                      <h4 className="text-xl font-bold">Cloud-based SaaS Application</h4>
                      <p className="text-blue-800 mt-2">
                        Developed and maintained a scalable cloud-based SaaS application using Java, Spring Boot,
                        React, and Next.js, ensuring robust performance and integration with AWS services.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge>Java</Badge>
                        <Badge>Spring Boot</Badge>
                        <Badge>React</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>AWS</Badge>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-center">
                      <div className="h-32 w-32 bg-blue-200 rounded-full flex items-center justify-center">
                        <Cloud size={60} className="text-blue-600" />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all">
                    <div className="w-full md:w-2/3">
                      <h4 className="text-xl font-bold">Media Tracking System</h4>
                      <p className="text-blue-800 mt-2">
                        Created a robust system using JavaScript event trackers to monitor user interactions with
                        various media, including videos, PDFs, and websites, with Apache Kafka for real-time processing.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge>JavaScript</Badge>
                        <Badge>Event Tracking</Badge>
                        <Badge>Apache Kafka</Badge>
                        <Badge>Real-time Analytics</Badge>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-center">
                      <div className="h-32 w-32 bg-blue-200 rounded-full flex items-center justify-center">
                        <BarChart size={60} className="text-blue-600" />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all">
                    <div className="w-full md:w-2/3">
                      <h4 className="text-xl font-bold">Task-Saver Application</h4>
                      <p className="text-blue-800 mt-2">
                        Developed a productivity web application with React, Spring Boot, and AWS services,
                        designed to enhance task management and facilitate project collaboration.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge>React</Badge>
                        <Badge>Spring Boot</Badge>
                        <Badge>AWS S3</Badge>
                        <Badge>Task Management</Badge>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-center">
                      <div className="h-32 w-32 bg-blue-200 rounded-full flex items-center justify-center">
                        <Settings size={60} className="text-blue-600" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </TabContent>

          <TabContent active={activeTab === 'ops'}>
            <div
              id="ops-content"
              className="animate-on-scroll space-y-12"
              style={{
                transform: isVisible['ops-content'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible['ops-content'] ? 1 : 0,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
              }}
            >
              <h2 className="text-3xl font-bold border-b-2 border-blue-300 pb-2 inline-block">
                DevOps Expertise
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                    <span className="bg-blue-200 p-2 rounded-lg"><Cloud size={20} /></span>
                    Cloud Infrastructure
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Managing AWS cloud resources for scalable and reliable application hosting
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      AWS EC2, S3, RDS
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      ECS, EKS
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      CloudWatch Monitoring
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                    <span className="bg-blue-200 p-2 rounded-lg"><Settings size={20} /></span>
                    CI/CD Pipelines
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Building and maintaining automated deployment pipelines for seamless delivery
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      AWS CodePipeline
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      Jenkins
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      Automated Testing
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                    <span className="bg-blue-200 p-2 rounded-lg"><Server size={20} /></span>
                    Containerization
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Deploying applications in containerized environments for consistency and isolation
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      Docker
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      Kubernetes
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-blue-500" />
                      Container Orchestration
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Key DevOps Achievements</h3>
                <div className="space-y-8">
                  <Card className="p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all">
                    <div className="w-full md:w-2/3">
                      <h4 className="text-xl font-bold">Infrastructure as Code</h4>
                      <p className="text-blue-800 mt-2">
                        Created Terraform templates for infrastructure-as-code provisioning, enabling consistent
                        and scalable infrastructure management across development and production environments.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge>Terraform</Badge>
                        <Badge>AWS</Badge>
                        <Badge>IaC</Badge>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-center">
                      <div className="h-32 w-32 bg-blue-200 rounded-full flex items-center justify-center">
                        <Cloud size={60} className="text-blue-600" />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all">
                    <div className="w-full md:w-2/3">
                      <h4 className="text-xl font-bold">CI/CD Implementation</h4>
                      <p className="text-blue-800 mt-2">
                        Contributed to CI/CD processes with AWS Code Pipeline and Docker, facilitating automated
                        builds, testing, and deployments to streamline development workflows.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge>AWS CodePipeline</Badge>
                        <Badge>CodeBuild</Badge>
                        <Badge>CodeDeploy</Badge>
                        <Badge>Docker</Badge>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-center">
                      <div className="h-32 w-32 bg-blue-200 rounded-full flex items-center justify-center">
                        <Settings size={60} className="text-blue-600" />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all">
                    <div className="w-full md:w-2/3">
                      <h4 className="text-xl font-bold">Application Monitoring</h4>
                      <p className="text-blue-800 mt-2">
                        Developed dashboards using Amazon CloudWatch metrics for effective application monitoring,
                        enhancing operational oversight and performance analysis.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge>CloudWatch</Badge>
                        <Badge>Metrics</Badge>
                        <Badge>Dashboards</Badge>
                        <Badge>Alerting</Badge>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-center">
                      <div className="h-32 w-32 bg-blue-200 rounded-full flex items-center justify-center">
                        <BarChart size={60} className="text-blue-600" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </TabContent>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Arsenal</h2>

          <div className="flex flex-col md:flex-row gap-10">
            <div
              id="dev-skills"
              className="w-full md:w-1/2 animate-on-scroll"
              style={{
                transform: isVisible['dev-skills'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible['dev-skills'] ? 1 : 0,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
              }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code size={24} /> Development Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.dev.map((skill, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all text-center">
                    <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="ops-skills"
              className="w-full md:w-1/2 animate-on-scroll"
              style={{
                transform: isVisible['ops-skills'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible['ops-skills'] ? 1 : 0,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
              }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Server size={24} /> Operations Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.ops.map((skill, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all text-center">
                    <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Education & Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Education & Certifications</h2>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2">
              <Card className="p-6 h-full">
                <h3 className="text-xl font-bold mb-6">Education</h3>
                <div className="space-y-2">
                  <h4 className="font-bold">Bachelor of Information Technology</h4>
                  <p className="text-blue-800">University of Mumbai, Dombivli, India</p>
                  <p>2019 - 2022</p>
                  <p className="font-medium">GPA: 9.5 CGPA</p>
                </div>
              </Card>
            </div>

            <div className="w-full md:w-1/2">
              <Card className="p-6 h-full">
                <h3 className="text-xl font-bold mb-6">Certifications</h3>
                <div className="space-y-2">
                  <h4 className="font-bold">Java Full Stack Development</h4>
                  <p className="text-blue-800">Code-Kul Software Training Institute, Pune</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Lets Build Something Amazing Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Looking for a developer who can handle both front-end elegance and back-end robustness,
            while ensuring your infrastructure scales seamlessly?
          </p>
          <a
            href="https://www.linkedin.com/in/sudarshan-jadhav-8a3982199/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 mx-auto rounded-md bg-white text-blue-500 hover:bg-blue-100 transition-colors duration-200 shadow-sm border border-gray-200"
          >
            Get In Touch
            <ChevronRight size={20} className="ml-1" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default DigitalResume;
