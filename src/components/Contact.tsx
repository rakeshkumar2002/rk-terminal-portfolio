
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();

  const copyEmailToClipboard = async () => {
    const email = 'janirakeshkumar2002@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      toast({
        title: "Email Copied!",
        description: "Email address has been copied to clipboard",
      });
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'janirakeshkumar2002@gmail.com',
      link: 'mailto:janirakeshkumar2002@gmail.com',
      copyable: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8847802646',
      link: 'tel:+918847802646'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurugram, India',
      link: '#'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'rakesh-kumar-jani',
      link: 'https://www.linkedin.com/in/rakesh-kumar-jani-01b209191'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'rakeshkumar2002',
      link: 'https://github.com/rakeshkumar2002'
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            <span className="text-green-400">$</span> ./contact
          </h2>
          <p className="text-gray-400 text-sm">Let's connect and build something amazing together</p>
        </div>

        {/* Compact Contact Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-800/40 border border-green-400/20 rounded-lg hover:bg-gray-700/40 hover:border-green-400/40 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-4 h-4 text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-green-400 font-medium text-sm">{item.label}</div>
                    <div className="text-gray-300 text-xs truncate">{item.value}</div>
                  </div>
                  {item.copyable ? (
                    <button
                      onClick={copyEmailToClipboard}
                      className="p-1 hover:bg-green-400/10 rounded transition-colors"
                    >
                      {emailCopied ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400 hover:text-green-400" />
                      )}
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-green-400 hover:text-green-300 transition-colors text-sm"
                    >
                      →
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Compact Status */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Response within 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
