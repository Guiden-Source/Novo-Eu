import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-brand-black text-brand-white overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-brand-gold/10 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-brand-gold/5 rounded-full blur-[150px]"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            </div>

            <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-10 relative z-10">
                {/* Headline */}
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-white via-brand-gold-light to-brand-white drop-shadow-sm px-2">
                    Recomece sem <span className="text-brand-gold">culpa</span>.
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
                    O caminho para a <span className="text-brand-white font-medium">calma interna</span> começa aqui.
                    <br className="hidden md:block" />
                    3 Ebooks Transformadores. <span className="text-brand-gold font-bold border-b border-brand-gold/50 pb-1">Apenas R$ 20,00</span>.
                </p>

                {/* Visual / Mockup Placeholder - Enhanced with Real Images */}
                <div className="relative w-full max-w-lg mx-auto my-8 md:my-12">
                    <div className="relative z-10 flex justify-center items-end -space-x-4 md:-space-x-8">
                        {/* Book 1 - Left */}
                        <div className="w-28 md:w-40 transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
                            <img
                                src="/images/WhatsApp Image 2025-12-03 at 21.48.30 (1).jpeg"
                                alt="Capa Ebook 1"
                                className="w-full h-auto rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-brand-gold/20"
                            />
                        </div>

                        {/* Book 2 - Center (Main) */}
                        <div className="w-32 md:w-48 transform -translate-y-4 hover:-translate-y-6 transition-transform duration-500 z-20">
                            <img
                                src="/images/WhatsApp Image 2025-12-03 at 21.48.30 (2).jpeg"
                                alt="Capa Ebook 2"
                                className="w-full h-auto rounded-lg shadow-[0_20px_40px_rgba(212,175,55,0.2)] border-2 border-brand-gold/40"
                            />
                        </div>

                        {/* Book 3 - Right */}
                        <div className="w-28 md:w-40 transform rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
                            <img
                                src="/images/WhatsApp Image 2025-12-03 at 21.48.30.jpeg"
                                alt="Capa Ebook 3"
                                className="w-full h-auto rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-brand-gold/20"
                            />
                        </div>
                    </div>

                    {/* Glow Effect behind books */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 blur-[60px] -z-10 rounded-full pointer-events-none"></div>
                </div>
                {/* CTA - High Conversion */}
                <div className="flex flex-col items-center gap-6">
                    <a
                        href="https://loja.infinitepay.io/maylon-moreira-773/inu0367-tricologia-o-comeco-do-meu-novo-eu-3-e-boo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-brand-black transition-all duration-200 bg-brand-gold font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold hover:bg-white hover:text-brand-black shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform hover:-translate-y-1"
                    >
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative">QUERO RECOMEÇAR POR R$ 20</span>
                        <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>

                    <div className="flex flex-col md:flex-row items-center gap-3 text-sm text-gray-400 opacity-80">
                        <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Compra Segura
                        </span>
                        <span className="hidden md:block">•</span>
                        <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Acesso Imediato
                        </span>
                        <span className="hidden md:block">•</span>
                        <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            Bônus Incluso
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
