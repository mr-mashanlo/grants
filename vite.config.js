import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig( {
  base: './',
  build: {
    rolldownOptions: {
      input: {
        index: resolve( import.meta.dirname, 'index.html' ),
        grants: resolve( import.meta.dirname, 'grants.html' ),
        programs: resolve( import.meta.dirname, 'programs.html' ),
        blog: resolve( import.meta.dirname, 'blog.html' ),
        faq: resolve( import.meta.dirname, 'faq.html' ),
        signup: resolve( import.meta.dirname, 'signup.html' )
      }
    }
  },
  plugins: [
    ViteImageOptimizer( {
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 }
    } )
  ]
} );