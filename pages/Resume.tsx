import React from 'react';
import { Mail, MapPin, Github, Linkedin, Briefcase, GraduationCap, Code, Calendar } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Resume: React.FC = () => {
  const { personalInfo, skills, experiences } = useContent();

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 border-b border-slate-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-primary font-medium">{personalInfo.title}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <MapPin size={14} /> {personalInfo.location}
              </div>
              <div className="flex items-center gap-1">
                <Mail size={14} /> {personalInfo.email}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-slate-700 dark:text-white transition">
                <Github size={20} />
             </a>
             <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-slate-700 dark:text-white transition">
                <Linkedin size={20} />
             </a>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12 space-y-12">
        
        {/* About */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span> 个人简介
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {personalInfo.about}
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
             <Code size={24} className="text-primary" /> 技术技能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-200 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
             <Briefcase size={24} className="text-primary" /> 工作经历
          </h2>
          
          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-card border-4 border-primary shadow-sm"></div>
                
                {/* Content Card */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white order-1">{exp.role}</h3>
                   <div className="order-2 sm:order-3 flex items-center text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      <Calendar size={12} className="mr-2"/> {exp.period}
                   </div>
                </div>
                
                <div className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-4 flex items-center">
                   {exp.company}
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education (Static for demo) */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
             <GraduationCap size={24} className="text-primary" /> 教育背景
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
               <GraduationCap size={100} />
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">计算机工程理学学士</h3>
                    <p className="text-slate-500 dark:text-slate-400">科技大学</p>
                </div>
                <span className="text-sm font-mono text-slate-500">2022 - 2026 (预计)</span>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-primary">相关课程:</span> 嵌入式系统, 数字逻辑设计, 计算机体系结构, 数据结构与算法, 电路分析.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;