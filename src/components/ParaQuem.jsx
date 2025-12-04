import React from 'react';

const ParaQuem = () => {
    const items = [
        "Vive se culpando por tudo.",
        "Carrega pesos que não são seus.",
        "Quer calma prática, sem enrolação.",
        "Tem dificuldade de dizer 'não'.",
        "Quer recomeçar com consciência."
    ];

    return (
        <section className="py-24 bg-brand-white text-brand-black relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
                    Para quem é <span className="text-brand-gold">este recomeço</span>?
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="group flex items-center gap-5 p-8 bg-white border border-gray-100 rounded-2xl hover:border-brand-gold transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transform hover:-translate-y-1">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                                <svg className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <p className="text-xl font-medium text-gray-800 group-hover:text-black transition-colors">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ParaQuem;
