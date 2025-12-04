
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-black text-white py-16 md:py-24 border-t border-brand-gray relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter">
                    Recomece <span className="text-brand-gold">hoje</span>.
                </h2>
                <p className="text-lg md:text-2xl text-gray-400 mb-12 md:mb-16 font-light max-w-2xl mx-auto">
                    3 ebooks transformadores. <br />
                    <span className="text-brand-white font-medium">Apenas R$ 20,00</span>.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
                    {/* Primary Button */}
                    <a
                        href="https://loja.infinitepay.io/maylon-moreira-773/inu0367-tricologia-o-comeco-do-meu-novo-eu-3-e-boo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto bg-brand-gold hover:bg-white hover:text-brand-black text-brand-black font-bold py-5 px-12 rounded-full text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform transition hover:-translate-y-1 duration-300"
                    >
                        QUERO RECOMEÇAR AGORA
                    </a>

                    {/* Secondary Button */}
                    <a
                        href="https://wa.me/5511950297772?text=Oi%2C%20acabei%20de%20fazer%20o%20pagamento%20dos%203%20ebooks%20por%20R%24%2020%2C00%20e%20quero%20enviar%20meu%20comprovante%20%F0%9F%99%82"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto bg-transparent border border-brand-gray hover:border-brand-gold text-gray-400 hover:text-brand-gold font-bold py-5 px-12 rounded-full text-lg transition duration-300"
                    >
                        Já paguei / Enviar comprovante
                    </a>
                </div>

                <div className="border-t border-brand-gray pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
                    <p>
                        &copy; {new Date().getFullYear()} Projeto Novo Eu. Todos os direitos reservados.
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Site Seguro
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

