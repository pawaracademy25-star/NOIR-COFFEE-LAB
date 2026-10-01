import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { X, ArrowLeft } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../../data/journal';
import type { Article } from '../../data/journal';

export function JournalModal() {
  const { currentView, setView } = useStore();
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  if (currentView !== 'journal') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: 'rgba(17, 16, 15, 0.96)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          pointerEvents: 'auto',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            height: '85vh',
            background: '#1C1A18',
            border: '1px solid #292521',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            color: '#E9E3D8',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => setView('cafe')}
            style={{ position: 'absolute', top: '2rem', right: '2rem', color: '#A39B92', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>

          {!activeArticle ? (
            /* Journal Articles List */
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#B35D38', textTransform: 'uppercase' }}>
                  THE NOIR JOURNAL
                </span>
                <h2 className="serif" style={{ fontSize: '2.5rem', marginTop: '0.3rem', fontWeight: 400 }}>
                  Essays & Observations
                </h2>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {JOURNAL_ARTICLES.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => setActiveArticle(art)}
                    style={{
                      padding: '1.8rem',
                      background: '#11100F',
                      border: '1px solid #292521',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'border-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B35D38')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#292521')}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#A39B92', marginBottom: '0.8rem' }}>
                        <span>{art.category}</span>
                        <span>{art.readTime}</span>
                      </div>
                      <h3 className="serif" style={{ fontSize: '1.35rem', marginBottom: '0.8rem', fontWeight: 500, lineHeight: '1.4' }}>
                        {art.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: '#A39B92', lineHeight: '1.6' }}>
                        {art.summary}
                      </p>
                    </div>

                    <span style={{ fontSize: '0.75rem', color: '#B35D38', marginTop: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Read Article →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Article Reader View */
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto', paddingRight: '1rem' }}>
              <button
                onClick={() => setActiveArticle(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#A39B92',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  marginBottom: '2rem',
                  cursor: 'pointer',
                }}
              >
                <ArrowLeft size={16} /> Back to Journal
              </button>

              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: '#B35D38', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                <span>{activeArticle.category}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
              </div>

              <h1 className="serif" style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 400, lineHeight: '1.2' }}>
                {activeArticle.title}
              </h1>

              <div style={{ borderTop: '1px solid #292521', paddingTop: '2rem' }}>
                {activeArticle.content.map((paragraph, index) => (
                  <p key={index} style={{ fontSize: '1rem', lineHeight: '1.8', color: '#A39B92', marginBottom: '1.5rem' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
