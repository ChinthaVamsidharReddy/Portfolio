import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const SERVICE_ID = 'service_cwfhgl4';
const TEMPLATE_ID = 'template_lypcvic';
const PUBLIC_KEY = 'wTTjvTb1mRhclu_AW';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reason: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reasons = [
    'Job Opportunity',
    'Internship Opportunity',
    'General Query',
    'Portfolio Feedback',
    'Collaboration'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.reason.trim()) newErrors.reason = 'Please select a reason for contact';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide a bit more detail';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        reason: '',
        message: ''
      });
    } catch (err) {
      console.error('Failed to send message:', err);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
          Message Sent!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out! I’ll get back to you within 24–48 hours.
        </p>
        <Button
          variant="outline"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
          Contact Me
        </h3>
        <p className="text-muted-foreground">
          Whether it’s a job opportunity or a quick query, feel free to reach out
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Your Name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <Input
        label="Company / Organization (Optional)"
        name="company"
        type="text"
        placeholder="Company or team name"
        value={formData.company}
        onChange={handleChange}
      />

      <div className="space-y-2">
        <label htmlFor="reason" className="block text-sm font-medium text-foreground">
          Reason for Contact *
        </label>
        <select
          name="reason"
          id="reason"
          value={formData.reason}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">-- Select a reason --</option>
          {reasons.map((reason, i) => (
            <option key={i} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {errors.reason && (
          <p className="text-sm text-error">{errors.reason}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
        />
        {errors.message && (
          <p className="text-sm text-error">{errors.message}</p>
        )}
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        <p className="text-xs text-muted-foreground text-center mt-3">
          I’ll reply within 24–48 hours • Your details are safe
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
