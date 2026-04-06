import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div style={{maxWidth:'900px',margin:'0 auto',padding:'2rem'}}>
      <h1 style={{fontSize:'1.5rem',fontWeight:700,marginBottom:'1.5rem'}}>記事一覧</h1>
      {posts.length === 0 ? (
        <p style={{color:'#888'}}>まだ記事がありません。</p>
      ) : (
        <div style={{display:'grid',gap:'1rem'}}>
          {posts.map((post: any) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              style={{display:'block',padding:'1rem',border:'1px solid #e5e7eb',borderRadius:'8px',textDecoration:'none',color:'inherit'}}>
              <h2 style={{fontSize:'1rem',fontWeight:600,marginBottom:'0.5rem'}}>{post.title}</h2>
              <p style={{fontSize:'0.875rem',color:'#6b7280'}}>
                {post.date ? String(post.date).slice(0,10) : ''}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
