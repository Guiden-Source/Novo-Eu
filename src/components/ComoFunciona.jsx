import React from 'react';

const ComoFunciona = () => {
    const steps = [
        {
            title: "Pagamento Rápido",
            desc: "Clique no botão e pague R$ 20,00 pela InfinitePay.",
        },
        {
            title: "Confirmação",
            desc: "Você recebe a confirmação no seu e-mail.",
        },
        {
            title: "Envie o Comprovante",
            desc: "Clique no botão de WhatsApp e mande o comprovante.",
        },
        {
            title: "Receba Tudo",
            desc: "Eu libero os 3 ebooks + bônus na hora.",
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-brand-white text-brand-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-20 tracking-tight">
                    Como funciona <span className="text-brand-gold">na prática</span>
                </h2>

                <div className="grid md:grid-cols-4 gap-8 md:gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-gold/20 flex items-center justify-center text-2xl font-bold text-brand-gold mb-8 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold group-hover:scale-110 transition-all duration-300 shadow-lg shadow-brand-gold/5">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-gold transition-colors">{step.title}</h3>
                            <p className="text-gray-600 text-base leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a
                        href="https://wa.me/5511950297772?text=Oi%2C%20acabei%20de%20fazer%20o%20pagamento%20dos%203%20ebooks%20por%24%2020%2C00%20e%20quero%20enviar%20meu%20comprovante%20%F0%9F%99%82"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-brand-black text-white rounded-full font-bold hover:bg-brand-gold hover:text-black transition-all duration-300 shadow-lg hover:shadow-brand-gold/20 transform hover:-translate-y-1"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                        Enviar comprovante agora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ComoFunciona;
