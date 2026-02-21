import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react';
import { CONTENT, Language } from '../content';

export default function BlogPost({ lang }: { lang: Language }) {
    const { slug } = useParams();
    const t = CONTENT[lang];
    const post = t.blog.items.find(p => p.slug === slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-24">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Artigo não encontrado</h1>
                    <Link to="/" className="text-white/50 hover:text-white transition-colors flex items-center gap-2 justify-center">
                        <ArrowLeft size={16} /> Voltar ao início
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="pt-24 pb-20 fade-in">
            {/* Article Hero */}
            <header className="relative w-full min-h-[60vh] flex flex-col justify-end pt-32 pb-16 lg:pb-20 border-b border-white/5">
                <div className="absolute inset-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent opacity-80" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 w-full text-center sm:text-left">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-8 sm:mb-12 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        {lang === 'pt' ? 'Voltar' : 'Back'}
                    </Link>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif leading-tight mb-6 drop-shadow-xl">{post.title}</h1>

                    <p className="text-lg sm:text-xl text-white/70 font-light max-w-3xl drop-shadow-md leading-relaxed mb-8">{post.excerpt}</p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs uppercase tracking-widest text-white/50 font-medium pb-4">
                        <span className="text-amber-400 font-semibold bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">{post.category}</span>
                        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/20"></span>
                        <span className="flex items-center gap-1.5"><Calendar size={13} className="text-white/30" /> {post.date}</span>
                        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/20"></span>
                        <span className="flex items-center gap-1.5"><Clock size={13} className="text-white/30" /> {post.readTime}</span>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <div className="max-w-3xl mx-auto px-6">
                <div className="prose prose-invert prose-lg prose-p:text-white/60 prose-p:font-light prose-p:leading-relaxed prose-headings:font-serif prose-headings:font-normal prose-a:text-amber-400 mx-auto">
                    {post.fullContent?.map((block, i) => {
                        switch (block.type) {
                            case 'p': return <p key={i} className="mb-6">{block.text}</p>;
                            case 'h3': return <h3 key={i} className="text-2xl mt-12 mb-4 text-white/90">{block.text}</h3>;
                            case 'blockquote': return (
                                <blockquote key={i} className="border-l-2 border-amber-400/50 pl-6 my-10 italic text-xl sm:text-2xl text-white/80 font-serif leading-relaxed bg-white/[0.02] py-4 rounded-r-2xl">
                                    "{block.text}"
                                </blockquote>
                            );
                            case 'image': return (
                                <figure key={i} className="my-12">
                                    <img src={block.url} alt={block.text || 'Douro Valley'} className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
                                    {block.text && <figcaption className="text-center text-sm text-white/40 mt-4 font-light italic">{block.text}</figcaption>}
                                </figure>
                            );
                            default: return null;
                        }
                    })}
                </div>

                {/* CTA */}
                <div className="mt-20 pt-16 border-t border-white/10 text-center">
                    <h3 className="text-2xl sm:text-3xl font-serif mb-4">{lang === 'pt' ? 'Gostou deste artigo?' : 'Enjoyed this article?'}</h3>
                    <p className="text-white/50 mb-8 max-w-md mx-auto">{lang === 'pt' ? 'Descubra estas paisagens ao vivo connosco, numa experiência totalmente exclusiva e desenhada à sua medida.' : 'Discover these landscapes live with us, in a fully exclusive and tailor-made experience.'}</p>
                    <Link to="/" onClick={() => setTimeout(() => document.getElementById('tour-douro')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="cta-glow border-beam btn-press inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:bg-white/90">
                        {lang === 'pt' ? 'Ver Experiências' : 'View Experiences'} <ChevronRight size={18} />
                    </Link>
                </div>
            </div>
        </article>
    );
}
