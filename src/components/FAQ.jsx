import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-brand-black group-hover:text-brand-gold transition-colors">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Como pago?",
            answer: "Clique no botão, vá para a InfinitePay e pague R$ 20,00. É rápido e seguro."
        },
        {
            question: "Como envio o comprovante?",
            answer: "Depois de pagar, clique no botão de WhatsApp aqui ou mande mensagem para +55 11 95029-7772."
        },
        {
            question: "Quando recebo?",
            answer: "Assim que eu receber seu comprovante, te envio os links na hora."
        },
        {
            question: "Dá pra ler no celular?",
            answer: "Sim! Os PDFs são perfeitos para celular, tablet ou computador."
        },
        {
            question: "Substitui terapia?",
            answer: "Não. É um suporte emocional, mas não substitui acompanhamento profissional."
        },
        {
            question: "É seguro?",
            answer: "Totalmente. A InfinitePay é uma das plataformas mais seguras do Brasil."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-brand-white text-brand-black">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 tracking-tight">
                    Dúvidas <span className="text-brand-gold">Frequentes</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-brand-gold/30 transition-colors duration-300 shadow-sm">
                            <FAQItem question={faq.question} answer={faq.answer} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
