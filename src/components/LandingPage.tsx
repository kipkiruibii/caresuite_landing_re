'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, FileText, Users, DollarSign, CheckCircle, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{name?: string, email?: string, country?: string}>({});

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos",
    "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
    "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
    "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen", "Zambia", "Zimbabwe"
  ];

  const validateForm = () => {
    const newErrors: {name?: string, email?: string, country?: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.country) {
      newErrors.country = 'Please select your country';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const apiBase =  'https://api.caresuite.care/api';

      const response = await fetch(`${apiBase}/v1/website/waiting-list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          location: formData.country,
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', country: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Stop Losing Clients Due to Poor Scheduling
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Improve reliability, compliance, and operational efficiency for your care agency with our comprehensive scheduling platform.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    size="lg" 
                    className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:from-indigo-600 hover:to-cyan-600 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40"
                    onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Join the Pilot Program
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 transition-all backdrop-blur-sm bg-slate-900/20 shadow-lg hover:shadow-xl hover:shadow-slate-500/10"
                    onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Dashboard Images */}
            <motion.div
              className="relative mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Dark Dashboard (Background) */}
              <motion.div
                className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:rotate-[-4deg]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div
                  className="w-full h-48 sm:h-64 md:h-80 bg-cover bg-center rounded-2xl shadow-2xl border border-slate-700/50"
                  style={{ backgroundImage: 'url(https://caresuite-landing-assets.s3.eu-central-1.amazonaws.com/admin-dashboard-dark.png)' }}
                  aria-label="CareSuite admin dashboard showing comprehensive care agency management tools"
                  role="img"
                />
              </motion.div>

              {/* Light Dashboard (Foreground) */}
              <motion.div
                className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:rotate-[3deg]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div
                  className="w-full h-48 sm:h-64 md:h-80 bg-cover bg-center rounded-2xl shadow-xl border border-slate-600/50"
                  style={{ backgroundImage: 'url(https://caresuite-landing-assets.s3.eu-central-1.amazonaws.com/dashboard-light.png)' }}
                  aria-label="CareSuite dashboard interface showing scheduling and management features"
                  role="img"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Problems Section */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center text-slate-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Common Challenges Care Agencies Face
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="text-center rounded-2xl bg-slate-900/50 border border-slate-800/50 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all backdrop-blur-sm min-h-[200px] flex flex-col">
                <CardHeader className="flex-1">
                  <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <CardTitle className="text-lg text-slate-100">Missed or Late Visits</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-400">Poor scheduling leads to missed visits and dissatisfied clients.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="text-center rounded-2xl bg-slate-900/50 border border-slate-800/50 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all backdrop-blur-sm min-h-[200px] flex flex-col">
                <CardHeader className="flex-1">
                  <FileText className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <CardTitle className="text-lg text-slate-100">Paper-Based Forms</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-400">Lost documents and inefficient paperwork processes.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="text-center rounded-2xl bg-slate-900/50 border border-slate-800/50 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all backdrop-blur-sm min-h-[200px] flex flex-col">
                <CardHeader className="flex-1">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-lg text-slate-100">Staff Burnout</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-400">Overtime mismanagement and lack of work-life balance.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="text-center rounded-2xl bg-slate-900/50 border border-slate-800/50 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all backdrop-blur-sm min-h-[200px] flex flex-col">
                <CardHeader className="flex-1">
                  <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-lg text-slate-100">Financial Visibility</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-400">No clear view of expenses, budgets, and reimbursements.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center text-slate-100 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive Care Agency Management
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Smart Scheduling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="rounded-2xl bg-slate-900/50 border border-slate-800/50 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all backdrop-blur-sm min-h-[300px] flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    <Calendar className="w-6 h-6 text-indigo-400" />
                    Smart Scheduling
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Handles complex scheduling scenarios with intelligent recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Optimal staff assignments based on availability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Hours worked and compliance limits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Reduces missed visits and last-minute changes</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">AI-Powered</Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">Compliance</Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">Reliability</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Digital Document Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="rounded-2xl bg-slate-900/50 border border-slate-800/50 shadow-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all backdrop-blur-sm min-h-[300px] flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    <FileText className="w-6 h-6 text-teal-400" />
                    Digital Document Management
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Secure storage and retrieval of all operational and management documents
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Generate digital forms inside the app</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Staff can fill forms digitally</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Full audit trail for compliance</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">Secure</Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">Auditable</Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">Efficient</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* HR & Workforce Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="rounded-2xl bg-slate-900/50 border border-slate-800/50 shadow-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all backdrop-blur-sm min-h-[300px] flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    <Users className="w-6 h-6 text-purple-400" />
                    HR & Workforce Management
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Complete employee lifecycle management
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Employee records and contracts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Leave management and payroll</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Performance reviews and compliance</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">Payroll</Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">Compliance</Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">Performance</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Finance Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="rounded-2xl bg-slate-900/50 border border-slate-800/50 shadow-sm hover:shadow-lg hover:shadow-emerald-500/10 transition-all backdrop-blur-sm min-h-[300px] flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    <DollarSign className="w-6 h-6 text-emerald-400" />
                    Finance Management
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Budget planning and comprehensive financial tracking
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Record expenses, transactions, and payments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Vendor management and staff reimbursements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Budget planning and spend tracking</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">Budgeting</Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">Tracking</Badge>
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-700">Reimbursements</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Demo Video Section */}
      <motion.section
        id="demo-section"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See CareSuite in Action
          </motion.h2>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <video
              className="w-full h-auto"
              controls
              muted
              preload="metadata"
              poster="https://caresuite-landing-assets.s3.eu-central-1.amazonaws.com/dashboard-light.png"
            >
              <source src="https://caresuite-landing-assets.s3.eu-central-1.amazonaws.com/demo-vide.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center text-slate-100 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-100">Set Up Your Agency</h3>
              <p className="text-slate-400">Add your staff, clients, and operational details to get started.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-100">Digitize Workflows</h3>
              <p className="text-slate-400">Move schedules, documents, and processes to digital format.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-100">Optimize Operations</h3>
              <p className="text-slate-400">Let AI suggest schedules while you monitor everything in one dashboard.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust & Compliance Section */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Shield className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Built for Regulated Care Environments
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our platform emphasizes reliability, accountability, and auditability to meet the highest standards of care compliance.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-2 text-slate-100">Full Audit Trails</h3>
              <p className="text-slate-400">Every action is logged for complete transparency and compliance reporting.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-2 text-slate-100">Secure Data Handling</h3>
              <p className="text-slate-400">Enterprise-grade security ensures sensitive care data remains protected.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-2 text-slate-100">Regulatory Compliance</h3>
              <p className="text-slate-400">Designed to meet healthcare regulations and care standards.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call To Action Section */}
      <motion.section
        id="cta-section"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join the Pilot Program
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-blue-50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Be among the first care agencies shaping the future of scheduling and operations.
          </motion.p>
          
          {/* Pilot Signup Form */}
          <motion.div
            className="max-w-sm sm:max-w-md mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-slate-600/50 shadow-xl">
              <CardContent className="p-4 sm:p-6">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Welcome to the Pilot!</h3>
                    <p className="text-blue-50">We&apos;ll be in touch soon with next steps.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-white/90">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="bg-white/20 border-slate-500/50 text-white placeholder:text-white/60 focus:border-cyan-400"
                      />
                      {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-white/90">Work Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@agency.com"
                        value={formData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="bg-white/20 border-slate-500/50 text-white placeholder:text-white/60 focus:border-cyan-400"
                      />
                      {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="country" className="text-white/90">Country</Label>
                      <Select value={formData.country} onValueChange={(value: string) => setFormData(prev => ({ ...prev, country: value }))}>
                        <SelectTrigger className="bg-white/20 border-slate-500/50 text-white focus:border-cyan-400">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          {countries.map((country) => (
                            <SelectItem key={country} value={country} className="text-white hover:bg-slate-700">
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.country && <p className="text-red-300 text-sm mt-1">{errors.country}</p>}
                    </div>
                    
                    {submitStatus === 'error' && (
                      <p className="text-red-300 text-sm text-center">Something went wrong. Please try again.</p>
                    )}
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:from-indigo-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
                    >
                      {isSubmitting ? 'Joining...' : 'Join the Pilot'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-100">CareSuite</h3>
              <p className="text-slate-400 mb-4">
                Comprehensive care agency operations platform for scheduling, documents, HR, and finance management.
              </p>
            </div>
            <div className="md:text-right">
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Features</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Support</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="mailto:info@caresuite.care" className="block text-slate-400 hover:text-white transition-colors">info@caresuite.care</a>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <div className="text-center text-slate-400">
            <p>&copy; 2024 CareSuite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}