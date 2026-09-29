import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface ContactProps {
  profile: ProfileData;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.senderName || !formData.senderEmail || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ senderName: '', senderEmail: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/60 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-wide text-blue-700 uppercase">
                Get in Touch
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
                Let's Connect
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              I'm always interested in learning, building projects, participating in hackathons, and connecting with people interested in technology and AI.
            </p>

            {/* Direct Connect Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Email Address</p>
                    <p className="text-xs sm:text-sm font-mono font-medium text-slate-900 truncate">
                      {profile.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profile.email, 'email')}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">LinkedIn Profile</p>
                    <p className="text-xs sm:text-sm font-mono font-medium text-slate-900 truncate">
                      {profile.linkedinUrl}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profile.linkedinUrl, 'linkedin')}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                  title="Copy LinkedIn placeholder"
                >
                  {copiedType === 'linkedin' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub */}
              <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 bg-slate-100 text-slate-700 rounded-lg shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">GitHub Profile</p>
                    <p className="text-xs sm:text-sm font-mono font-medium text-slate-900 truncate">
                      {profile.githubUrl}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profile.githubUrl, 'github')}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                  title="Copy GitHub placeholder"
                >
                  {copiedType === 'github' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Opportunity notice */}
            <div className="p-3.5 bg-white border border-slate-200/80 rounded-lg text-xs text-slate-600 space-y-1">
              <span className="font-semibold text-slate-800">Open to:</span>
              <p>College projects · Hackathon teams · Ideathon collaborations · Student technical communities</p>
            </div>
          </div>

          {/* Right Column: Working Contact / Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-100">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Send a Direct Message
                </h3>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50/80 border border-emerald-200 rounded-xl text-center space-y-2 animate-in fade-in duration-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-emerald-900">Message Received</h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    Thank you for reaching out! Since this is a student portfolio, responses will be routed via standard university channels.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-3 py-1.5 text-xs font-medium text-emerald-800 bg-white border border-emerald-300 rounded hover:bg-emerald-50 transition-colors"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.senderName}
                        onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.senderEmail}
                        onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Hackathon collaboration / Project inquiry"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-600/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, feedback, or collaborative invitation here..."
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Note</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
