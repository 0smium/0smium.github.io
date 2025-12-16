import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Projects: React.FC = () => {
  const { projects } = useContent();

  return (
    <div className="space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">项目展示</h1>
        <p className="text-slate-600 dark:text-slate-400">
          我构建的嵌入式系统、PCB 设计和软件工具的合集。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div className="h-48 overflow-hidden relative border-b border-slate-200 dark:border-slate-800">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
              <span className="absolute bottom-2 left-2 bg-white/90 dark:bg-dark/80 backdrop-blur px-2 py-1 rounded text-xs font-mono text-primary border border-primary/20">
                {project.category}
              </span>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {project.githubUrl && (
                  <a href={project.githubUrl} className="flex-1 flex items-center justify-center gap-2 py-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm transition font-medium">
                    <Github size={16} /> 代码
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} className="flex-1 flex items-center justify-center gap-2 py-2 rounded bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-sm transition font-medium">
                    <ExternalLink size={16} /> 演示
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;