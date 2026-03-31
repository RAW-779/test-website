import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Plus, Minus } from 'lucide-react';
import Button from '../components/Button';

const faqs = [
  {
    question: 'What are the 23 mysterious flavors?',
    answer: 'That is a secret we have kept since 1885! While many have tried to guess, the exact blend remains a mystery known only to our master flavorists.'
  },
  {
    question: 'Is Crimson Spark gluten-free?',
    answer: 'Yes, all our standard beverage products are gluten-free and safe for those with celiac disease.'
  },
  {
    question: 'Where can I buy limited edition flavors?',
    answer: 'Limited edition flavors are available at select retailers and through our online store for rewards members. Use our Store Locator to find a shop near you.'
  },
  {
    question: 'How do I join the Spark Rewards program?',
    answer: 'You can sign up through our Promotions page or by downloading the Crimson Spark app. Membership is free and full of mysterious perks!'
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-20 bg-cream min-h-screen">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h1 className="text-6xl md:text-8xl text-burgundy mb-8">GET IN <span className="text-gold">TOUCH</span></h1>
              <p className="text-ink/60 mb-12 max-w-md">
                Have a question, a suggestion, or just want to share your spark? 
                We're all ears.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-burgundy/40">Full Name</label>
                    <input type="text" className="w-full bg-white border border-burgundy/10 px-6 py-4 rounded-sm focus:outline-none focus:border-burgundy transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-burgundy/40">Email Address</label>
                    <input type="email" className="w-full bg-white border border-burgundy/10 px-6 py-4 rounded-sm focus:outline-none focus:border-burgundy transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-burgundy/40">Subject</label>
                  <select className="w-full bg-white border border-burgundy/10 px-6 py-4 rounded-sm focus:outline-none focus:border-burgundy transition-colors appearance-none">
                    <option>General Inquiry</option>
                    <option>Product Feedback</option>
                    <option>Rewards Program</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-burgundy/40">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-burgundy/10 px-6 py-4 rounded-sm focus:outline-none focus:border-burgundy transition-colors"></textarea>
                </div>
                <Button size="lg" className="w-full md:w-auto">
                  Send Message <Send size={18} />
                </Button>
              </form>
            </div>

            {/* Info & FAQ */}
            <div className="space-y-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-gold font-display tracking-widest">Contact Info</h4>
                  <ul className="space-y-4 text-sm text-ink/60">
                    <li className="flex items-center gap-3"><Mail size={16} className="text-burgundy" /> hello@crimsonspark.com</li>
                    <li className="flex items-center gap-3"><Phone size={16} className="text-burgundy" /> 1-800-SPARK-IT</li>
                    <li className="flex items-center gap-3"><MapPin size={16} className="text-burgundy" /> Austin, Texas</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-gold font-display tracking-widest">Socials</h4>
                  <ul className="space-y-4 text-sm text-ink/60">
                    <li><a href="#" className="hover:text-burgundy transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-burgundy transition-colors">Twitter</a></li>
                    <li><a href="#" className="hover:text-burgundy transition-colors">Facebook</a></li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl text-burgundy">FREQUENTLY ASKED <span className="text-gold">QUESTIONS</span></h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-burgundy/10 pb-4">
                      <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between py-4 text-left group"
                      >
                        <span className="font-display text-burgundy group-hover:text-gold transition-colors">{faq.question}</span>
                        {openFaq === i ? <Minus size={18} className="text-gold" /> : <Plus size={18} className="text-burgundy" />}
                      </button>
                      {openFaq === i && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-ink/60 text-sm leading-relaxed pb-4"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
