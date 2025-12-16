import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Download, Database, Layers } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Home: React.FC = () => {
  const { personalInfo, projects } = useContent();
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 py-10 md:py-20">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            求职中 / 寻找实习机会
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
            你好, 我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light">
            {personalInfo.title}
          </p>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            {personalInfo.about}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/projects" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all shadow-lg shadow-primary/25 flex items-center">
              查看项目 <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/resume" className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg font-medium transition-all flex items-center shadow-sm">
              完整简历 <Download size={18} className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden group shadow-xl">
               {/* Decorative generic code/tech visual */}
               <div className="text-slate-400 dark:text-slate-600 font-mono text-xs p-4 opacity-50 select-none">
                 &lt;Firmware&gt;<br/>
                 &nbsp;&nbsp;void init_sys() &#123;<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;HAL_Init();<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;SystemClock_Config();<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;MX_GPIO_Init();<br/>
                 &nbsp;&nbsp;&#125;<br/>
                 &lt;/Firmware&gt;
               </div>
               <Cpu size={64} className="text-primary absolute" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Teaser */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-card p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition shadow-sm">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
            <Cpu className="text-blue-500" />
          </div>
          <h3 className="text-slate-900 dark:text-white text-lg font-semibold mb-2">Embedded C/C++</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">精通底层编程、内存管理和硬件抽象层 (HAL) 的开发。</p>
        </div>
        <div className="bg-white dark:bg-card p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition shadow-sm">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
            <Layers className="text-green-500" />
          </div>
          <h3 className="text-slate-900 dark:text-white text-lg font-semibold mb-2">RTOS & Linux</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">具有使用 FreeRTOS 进行任务调度和编写嵌入式 Linux 内核驱动程序的经验。</p>
        </div>
        <div className="bg-white dark:bg-card p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition shadow-sm">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
            <Database className="text-purple-500" />
          </div>
          <h3 className="text-slate-900 dark:text-white text-lg font-semibold mb-2">IoT Protocols</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">使用 MQTT、CoAP、BLE 构建互联设备，并设计高效的数据包结构。</p>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white">精选项目</h2>
             <p className="text-slate-500 dark:text-slate-400 mt-1">最近的一些硬件破解和开发项目。</p>
          </div>
          <Link to="/projects" className="text-primary text-sm hover:underline hidden md:block">查看所有项目</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map(project => (
            <div key={project.id} className="group bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-sm hover:shadow-md">
              <div className="h-48 overflow-hidden relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
         <div className="mt-6 md:hidden text-center">
            <Link to="/projects" className="text-primary text-sm hover:underline">查看所有项目</Link>
         </div>
      </section>
    </div>
  );
};

export default Home;