import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useContent } from '../context/ContentContext';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { blogPosts } = useContent();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-slate-900 dark:text-white font-bold">未找到文章</h2>
        <Link to="/blog" className="text-primary mt-4 inline-block hover:underline">返回博客</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> 返回笔记
      </Link>

      <header className="mb-10 text-center">
        <div className="flex items-center justify-center gap-4 text-sm text-slate-500 font-mono mb-4">
          <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">{post.title}</h1>
        <div className="flex justify-center flex-wrap gap-2">
           {post.tags.map(tag => (
             <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs border border-slate-200 dark:border-slate-700">
               #{tag}
             </span>
           ))}
        </div>
      </header>

      {post.coverImage && (
        <div className="rounded-2xl overflow-hidden mb-10 border border-slate-200 dark:border-slate-800 shadow-md">
          <img src={post.coverImage} alt={post.title} className="w-full h-auto max-h-[400px] object-cover" />
        </div>
      )}

      <div className="prose prose-slate dark:prose-invert max-w-none prose-pre:bg-slate-900 prose-pre:text-slate-50 dark:prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-slate-700">
        <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
                code(props) {
                    const {children, className, node, ...rest} = props
                    return (
                        <code {...rest} className={`${className} text-primary font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded`}>
                            {children}
                        </code>
                    )
                }
            }}
        >
            {post.content}
        </ReactMarkdown>
      </div>
      
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-400 italic">感谢阅读！有相关问题随时问 AI 助手。</p>
      </div>
    </article>
  );
};

export default BlogPost;