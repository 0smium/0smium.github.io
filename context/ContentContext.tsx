import React, { createContext, useContext } from 'react';
import { 
  PERSONAL_INFO, 
  SKILLS, 
  PROJECTS, 
  EXPERIENCES, 
  BLOG_POSTS,
  LAST_UPDATED
} from '../data/content';
import { Project, Experience, BlogPost, Skill } from '../types';

interface ContentContextType {
  personalInfo: typeof PERSONAL_INFO;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  blogPosts: BlogPost[];
  lastUpdated: string;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Since we removed web editing, we simply pass the imported static data.
  // This data is generated at build time by scripts/generate-content.js
  
  return (
    <ContentContext.Provider value={{
      personalInfo: PERSONAL_INFO,
      skills: SKILLS,
      projects: PROJECTS,
      experiences: EXPERIENCES,
      blogPosts: BLOG_POSTS,
      lastUpdated: LAST_UPDATED
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};