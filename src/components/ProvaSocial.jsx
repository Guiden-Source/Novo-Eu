
import React from 'react';

const ProvaSocial = () => {
    return (
        <section className="py-16 md:py-24 bg-brand-black text-brand-white border-t border-brand-gray relative">
            <div className="max-w-2xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 tracking-tight">
                    Conversas <span className="text-brand-gold">Reais</span>
                </h2>

                <div className="space-y-8">
                    {/* Message 1 (User) */}
                    <div className="flex justify-start">
                        <div className="bg-brand-gray p-6 rounded-3xl rounded-tl-none border border-gray-800 max-w-[85%] shadow-lg">
                            <p className="text-gray-300 text-base leading-relaxed">
                                "Oi, vi o anúncio. Eu ando muito ansiosa e me cobrando demais. Esse material ajuda mesmo?"
                            </p>
                        </div>
                    </div>

                    {/* Message 2 (Response) */}
                    <div className="flex justify-end">
                        <div className="bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 p-6 rounded-3xl rounded-tr-none border border-brand-gold/30 max-w-[85%] shadow-lg shadow-brand-gold/5">
                            <p className="text-brand-gold-light text-base leading-relaxed font-medium">
                                "Oi! Ajuda sim. O foco é trazer leveza e calma. É pra você recomeçar sem tanta culpa. ❤️"
                            </p>
                        </div>
                    </div>

                    {/* Message 3 (User) */}
                    <div className="flex justify-start">
                        <div className="bg-brand-gray p-6 rounded-3xl rounded-tl-none border border-gray-800 max-w-[85%] shadow-lg">
                            <p className="text-gray-300 text-base leading-relaxed">
                                "Preciso disso. Vou querer. Como pago?"
                            </p>
                        </div>
                    </div>

                    {/* Message 4 (Response) */}
                    <div className="flex justify-end">
                        <div className="bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 p-6 rounded-3xl rounded-tr-none border border-brand-gold/30 max-w-[85%] shadow-lg shadow-brand-gold/5">
                            <p className="text-brand-gold-light text-base leading-relaxed font-medium">
                                "Simples! Clica no link, paga os R$ 20,00 e me manda o comprovante aqui. Já te envio tudo!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProvaSocial;
