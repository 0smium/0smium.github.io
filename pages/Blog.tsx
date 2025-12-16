import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, Tag } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Blog: React.FC = () => {
  const { blogPosts } = useContent();

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">工程笔记</h1>
        <p className="text-slate-600 dark:text-slate-400">
          记录我在嵌入式系统方面的学习过程，从裸机 C 语言到 Linux 内核驱动程序。
        </p>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="group relative bg-white dark:bg-card/50 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-card">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    <span className="absolute inset-0"></span>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-secondary border border-slate-200 dark:border-slate-700">
                      <Tag size={10} className="mr-1" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {post.coverImage && (
                <div className="md:w-48 h-32 md:h-auto flex-shrink-0 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;