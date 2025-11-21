import React, { useState } from 'react';
import { Sparkles, Loader2, Eye, ArrowRight } from 'lucide-react';
import { BrandScript } from '../types';

// Mock function to simulate AI generation (replace with your preferred API)
const generateBrandScript = async (company: string, product: string, audience: string): Promise<BrandScript> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Return mock data based on inputs
  return {
    character: `${audience} who want to achieve more with ${product.toLowerCase()}.`,
    problem: `They struggle to get the results they need because existing solutions are complicated, expensive, or unreliable.`,
    guide: `${company} understands these challenges and offers a proven solution that's simple and effective.`,
    plan: `1. Schedule a consultation. 2. Implement our system. 3. See measurable results.`,
    callToAction: `Get Started with ${company} Today`,
    failure: `Continuing to waste time and money on solutions that don't work, falling behind competitors.`,
    success: `Clear, measurable results that transform your business and give you peace of mind.`
  };
};

export const AIBrandScript: React.FC = () => {
  const [step, setStep] = useState<'input' | 'loading' | 'result'>('input');
  const [formData, setFormData] = useState({ company: '', product: '', audience: '' });
  const [result, setResult] = useState<BrandScript | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company || !formData.product || !formData.audience) return;

    setStep('loading');
    setError('');

    try {
      const data = await generateBrandScript(formData.company, formData.product, formData.audience);
      setResult(data);
      setStep('result');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setStep('input');
    }
  };

  const loadExample = () => {
    const exampleData: BrandScript = {
      character: "Business owners who are tired of wasting money on marketing.",
      problem: "They know their product is great, but they struggle to explain it clearly, leading to confusion and lost sales.",
      guide: "StoryBrand offers a proven communication framework (The SB7 Framework) to filter out the noise.",
      plan: "1. Watch the Course. 2. Clarify Your Message. 3. Grow Your Business.",
      callToAction: "Get Access to the Course",
      failure: "Continuing to be ignored by customers and losing market share to inferior competitors.",
      success: "A clear message that connects with customers, doubles revenue, and builds a dominant brand."
    };
    setResult(exampleData);
    setStep('result');
  };

  return (
    <div className="w-[86%] mx-auto mb-12 rounded-card overflow-hidden">
        <section id="ai-tool" className="py-24 md:py-32 bg-brand-dark text-white relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-red rounded-full blur-[100px]"></div>
        </div>

        <div className="w-full px-8 mx-auto relative z-10">
            <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider border border-brand-red/30 font-sans">
                <Sparkles size={14} /> AI Powered
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white uppercase">
                Build Your BrandScript
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-[80%] mx-auto leading-relaxed font-sans">
                Experience the power of the 7-Part Framework instantly. Enter your business details below and our AI will draft your marketing message.
            </p>
            </div>

            {step === 'input' && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8 font-sans">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">Company Name</label>
                    <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-black/30 border border-white/20 rounded-lg px-5 py-4 text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                        placeholder="e.g. Acme Co."
                        required
                    />
                    </div>
                    <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">Target Audience</label>
                    <input 
                        type="text" 
                        value={formData.audience}
                        onChange={(e) => setFormData({...formData, audience: e.target.value})}
                        className="w-full bg-black/30 border border-white/20 rounded-lg px-5 py-4 text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                        placeholder="e.g. Busy moms, Small business owners"
                        required
                    />
                    </div>
                </div>
                <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">What Product/Service do you sell?</label>
                    <textarea 
                        value={formData.product}
                        onChange={(e) => setFormData({...formData, product: e.target.value})}
                        className="w-full bg-black/30 border border-white/20 rounded-lg px-5 py-4 text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors h-32 resize-none"
                        placeholder="Describe your main offering..."
                        required
                    />
                </div>
                
                {error && <p className="text-red-400 text-sm">{error}</p>}

                <div className="flex flex-col gap-4">
                    <button type="submit" className="w-full bg-brand-red text-white font-bold text-base md:text-lg py-4 md:py-5 rounded-full hover:bg-red-700 transition-colors shadow-lg uppercase tracking-wide flex items-center justify-center gap-2">
                    Generate My BrandScript <Sparkles size={20} />
                    </button>
                    
                    <button 
                    type="button" 
                    onClick={loadExample}
                    className="w-full bg-transparent border border-white/20 text-gray-300 font-bold text-base md:text-lg py-3 md:py-4 rounded-full hover:bg-white/5 hover:text-white transition-colors uppercase tracking-wide flex items-center justify-center gap-2"
                    >
                    <Eye size={20} /> See Example Result
                    </button>
                </div>
                </form>
            </div>
            )}

            {step === 'loading' && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-16 flex flex-col items-center justify-center text-center min-h-[400px] max-w-4xl mx-auto">
                <Loader2 className="w-16 h-16 text-brand-red animate-spin mb-6" />
                <h3 className="text-2xl font-heading font-bold mb-2 uppercase">Consulting the Framework...</h3>
                <p className="text-gray-400 font-sans">Our AI is clarifying your message following the 7-part structure.</p>
            </div>
            )}

            {step === 'result' && result && (
            <div className="space-y-8 animate-fade-in font-sans">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card title="1. A Character" content={result.character} number="01" />
                    <Card title="2. Has a Problem" content={result.problem} number="02" />
                    <Card title="3. Meets a Guide" content={result.guide} number="03" />
                    <Card title="4. Who Gives Them a Plan" content={result.plan} number="04" />
                    <Card title="5. Calls Them to Action" content={result.callToAction} number="05" />
                    <Card title="6. Helps Avoid Failure" content={result.failure} number="06" />
                    <Card title="7. And Ends in Success" content={result.success} number="07" highlight />
                </div>
                <div className="text-center pt-12 flex flex-col md:flex-row justify-center gap-6">
                    <button 
                        onClick={() => {
                        setResult(null);
                        setStep('input');
                        }}
                        className="px-8 py-4 rounded-full bg-white text-brand-dark font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                    >
                        Create Another
                    </button>
                </div>
            </div>
            )}
        </div>
        </section>
    </div>
  );
};

const Card: React.FC<{ title: string; content: string; number: string; highlight?: boolean }> = ({ title, content, number, highlight }) => (
    <div className={`rounded-xl p-8 relative border transition-transform hover:scale-[1.02] ${highlight ? 'bg-brand-red text-white border-brand-red' : 'bg-white/5 border-white/10 text-white'}`}>
        <span className={`absolute top-4 right-4 text-5xl font-heading font-bold opacity-10 ${highlight ? 'text-white' : 'text-white'}`}>{number}</span>
        <h4 className="text-xl font-bold mb-4 relative z-10 uppercase font-heading">{title}</h4>
        <p className={`text-sm leading-loose relative z-10 ${highlight ? 'text-white' : 'text-gray-300'}`}>{content}</p>
    </div>
);