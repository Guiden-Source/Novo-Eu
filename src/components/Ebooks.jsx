import React from 'react';

const Ebooks = () => {
    const ebooks = [
        {
            title: "Calma na Prática",
            subtitle: "Desacelere agora",
            benefits: [
                "Técnicas imediatas",
                "Pare a mente acelerada",
                "Respiração simples"
            ],
            border: "border-brand-white"
        },
        {
            title: "Liberte-se da Culpa",
            subtitle: "Proteja sua energia",
            benefits: [
                "Entenda a raiz",
                "Aprenda a se perdoar",
                "Limites saudáveis"
            ],
            border: "border-brand-gold"
        },
        {
            title: "O Efeito Mínimo",
            subtitle: "Pequenos passos",
            benefits: [
                "Recomece devagar",
                "Hábitos sem pressão",
                "O poder do 1%"
            ],
            border: "border-brand-white"
        }
    ];

    return (
        <section className="py-24 bg-brand-black text-brand-white relative">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        O que você <span className="text-brand-gold">recebe</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Um kit completo de ferramentas emocionais. <br />
                        <span className="text-brand-white font-medium">Valor total real: R$ 97,00</span>. <span className="text-brand-gold font-bold">Hoje: R$ 20,00</span>.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
                    {ebooks.map((ebook, index) => (
                        <div key={index} className={`relative group bg-brand-gray rounded-3xl p-6 md:p-8 border ${ebook.border} hover:border-brand-gold transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] transform hover:-translate-y-2`}>
                            <div className="absolute top-0 right-0 p-4 md:p-6 opacity-10 font-bold text-6xl md:text-8xl text-brand-gold font-serif leading-none select-none">
                                {index + 1}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{ebook.title}</h3>
                                <p className="text-xs md:text-sm text-brand-gold mb-6 md:mb-8 uppercase tracking-widest font-semibold">{ebook.subtitle}</p>

                                <div className="w-12 h-1 bg-brand-gold/30 mb-6 md:mb-8 rounded-full group-hover:w-24 transition-all duration-500"></div>

                                <ul className="space-y-3 md:space-y-4">
                                    {ebook.benefits.map((benefit, idx) => (
                                        <li key={idx} className="text-gray-300 text-base flex items-center gap-3 group-hover:text-white transition-colors">
                                            <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bonus Section - Premium Card */}
                <div className="relative bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-3xl p-1 overflow-hidden shadow-[0_20px_50px_rgba(218,165,32,0.3)] transform hover:scale-[1.01] transition-transform duration-500">
                    <div className="bg-black/10 backdrop-blur-sm h-full w-full rounded-[20px] p-6 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
                        <div className="flex-1 text-center md:text-left">
                            <span className="inline-block bg-black text-brand-gold text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 tracking-[0.2em] uppercase shadow-lg border border-brand-gold/20">
                                Bônus Exclusivo
                            </span>
                            <h3 className="text-2xl md:text-5xl font-bold text-brand-black mb-3 md:mb-4 drop-shadow-sm">
                                +1 Ebook Surpresa
                            </h3>
                            <p className="text-brand-black/80 text-base md:text-xl font-medium max-w-xl">
                                Pagando agora pela InfinitePay, você desbloqueia um presente especial para complementar sua jornada.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <a
                                href="https://loja.infinitepay.io/maylon-moreira-773/inu0367-tricologia-o-comeco-do-meu-novo-eu-3-e-boo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-200 bg-brand-black font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                            >
                                GARANTIR MEU BÔNUS
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ebooks;
