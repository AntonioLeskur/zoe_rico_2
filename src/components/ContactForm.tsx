import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_4gw1vn2', // Service ID
        'template_rnq03tv', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'matea@zoerico.com'
        },
        'zqGnsD6xgwCxgc1Gr' // Public Key
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div>
        <input
          type="text"
          placeholder="Vaše ime"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          className="w-full px-4 py-2 sm:py-3 border border-neutral rounded-lg text-sm sm:text-base focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email adresa"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          className="w-full px-4 py-2 sm:py-3 border border-neutral rounded-lg text-sm sm:text-base focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none"
        />
      </div>
      <div>
        <textarea
          placeholder="Vaša poruka"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          required
          className="w-full px-4 py-2 sm:py-3 border border-neutral rounded-lg text-sm sm:text-base focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-primary/90 transition text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {status === 'sending' ? 'Slanje...' : 'Pošalji Poruku'}
      </button>
      
      {status === 'success' && (
        <p className="text-green-600 text-sm text-center">Poruka je uspješno poslana!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">Došlo je do greške. Molimo pokušajte ponovno.</p>
      )}
    </form>
  );
}