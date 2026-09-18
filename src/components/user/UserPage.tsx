import React, { FormEvent, useState } from 'react';
import { ArrowRight, Atom, Check, LogOut, Mail, Lock, UserRound, Chrome, Database, ShieldCheck, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { AuthUser, login, loginWithGoogle, logout, signup } from '../../utils/auth';
import { useLanguage } from '../../context/LanguageContext';
import { hasSupabaseConfig } from '../../lib/supabase';

interface UserPageProps {
  user: AuthUser | null;
  onAuthenticated: (user: AuthUser) => void;
  onLoggedOut: () => void;
}

export const UserPage: React.FC<UserPageProps> = ({ user, onAuthenticated, onLoggedOut }) => {
  const { isHindi } = useLanguage();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSqlGuide, setShowSqlGuide] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  const supabaseSqlSchema = `-- Run this in your Supabase SQL Editor:
create table if not exists public.learning_state (
  user_id text primary key,
  progress jsonb not null default '{}'::jsonb,
  adaptive jsonb not null default '{}'::jsonb,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.learning_state enable row level security;

-- Policy: Authenticated users can manage their own records
create policy "Allow users access to their own learning state"
  on public.learning_state
  for all
  using (auth.uid()::text = user_id)
  with check (auth.uid()::text = user_id);`;

  const copySqlToClipboard = () => {
    navigator.clipboard.writeText(supabaseSqlSchema);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  if (user) {
    return (
      <section className="max-w-3xl mx-auto py-10">
        <div className="glass-section rounded-3xl overflow-hidden">
          <div className="p-6 sm:p-10 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl border border-[#dfff3f]/30 bg-[#dfff3f]/10 flex items-center justify-center">
                  <UserRound className="w-7 h-7 text-[#dfff3f]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-[.22em] text-zinc-500">
                    {isHindi ? 'QubitLab खाता' : 'QubitLab account'}
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-white mt-1">{user.name}</h1>
                </div>
              </div>
              <button
                onClick={async () => {
                  try {
                    await logout();
                    onLoggedOut();
                  } catch (e) {
                    setError(e instanceof Error ? e.message : (isHindi ? 'लॉग आउट करने में असमर्थ।' : 'Unable to log out.'));
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <LogOut className="w-4 h-4" /> {isHindi ? 'साइन आउट' : 'Sign out'}
              </button>
            </div>
          </div>
          <div className="p-6 sm:p-10 grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase tracking-wider">
                <Mail className="w-4 h-4" /> {isHindi ? 'ईमेल' : 'Email'}
              </div>
              <p className="mt-3 text-white break-all text-sm font-medium">{user.email}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase tracking-wider">
                <Check className="w-4 h-4" /> {isHindi ? 'खाते की स्थिति' : 'Account status'}
              </div>
              <p className="mt-3 text-white text-sm font-medium">{isHindi ? 'सक्रिय' : 'Active'}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase tracking-wider">
                <Database className="w-4 h-4" /> {isHindi ? 'डेटा सिंक' : 'Data Sync'}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${hasSupabaseConfig ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-amber-400'}`} />
                <span className="text-sm font-medium text-white">
                  {hasSupabaseConfig ? 'Supabase Cloud' : 'Local Storage'}
                </span>
              </div>
            </div>
          </div>

          <div className="px-6 sm:px-10 pb-8">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className={`w-5 h-5 mt-0.5 ${hasSupabaseConfig ? 'text-emerald-400' : 'text-amber-400'}`} />
                <div>
                  <h4 className="text-sm font-medium text-white">
                    {hasSupabaseConfig ? (isHindi ? 'Supabase क्लाउड सिंक सक्रिय है' : 'Supabase Cloud Sync Active') : (isHindi ? 'स्थानीय सत्र मोड' : 'Local Storage Mode')}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    {hasSupabaseConfig
                      ? (isHindi ? 'आपकी प्रगति, क्विज़ परिणाम और व्यक्तिगत ट्यूटर नोट्स आपके Supabase प्रोजेक्ट में सुरक्षित हैं।' : 'Your curriculum progress, quiz scores, and adaptive learning state sync automatically.')
                      : (isHindi ? 'आपकी प्रगति इस ब्राउज़र में सुरक्षित है। Supabase जोड़ने के लिए Settings में VITE_SUPABASE_URL दर्ज करें।' : 'Progress is preserved in this browser. To sync across devices, provide your Supabase URL & Key in Settings.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {error && <p className="px-6 sm:px-10 pb-8 text-sm text-red-300">{error}</p>}
        </div>
      </section>
    );
  }

  const submit = async (event: FormEvent) => {
    event.preventDefault(); setError(''); setLoading(true);
    try {
      const authenticatedUser = mode === 'login' ? await login(email, password) : await signup(name, email, password);
      onAuthenticated(authenticatedUser); setPassword('');
    } catch (e) {
      setError(e instanceof Error ? e.message : (isHindi ? 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।' : 'Something went wrong. Please try again.'));
    }
    finally { setLoading(false); }
  };

  const featurePills = isHindi
    ? ['व्यक्तिगत शिक्षार्थी प्रोफ़ाइल', 'सत्र निरंतरता', 'प्रगति ट्रैकिंग', 'सुरक्षित प्रमाणीकरण']
    : ['Personal learner profile', 'Persistent Supabase session', 'Progress-ready backend', 'Managed authentication'];

  return (
    <section className="max-w-5xl mx-auto py-8 sm:py-14">
      <div className="grid lg:grid-cols-[1fr_460px] gap-6 items-stretch">
        <div className="glass-section rounded-3xl p-7 sm:p-10 flex flex-col justify-between min-h-[520px]">
          <div>
            <div className="flex items-center justify-between mb-7">
              <div className="w-12 h-12 rounded-2xl border border-[#dfff3f]/30 bg-[#dfff3f]/10 flex items-center justify-center">
                <Atom className="w-6 h-6 text-[#dfff3f]" />
              </div>
              <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono border ${hasSupabaseConfig ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/30 bg-amber-500/10 text-amber-300'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${hasSupabaseConfig ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                {hasSupabaseConfig ? 'Supabase Live' : 'Supabase Config Needed'}
              </div>
            </div>
            <p className="text-xs font-mono uppercase tracking-[.28em] text-[#dfff3f]">
              {isHindi ? 'व्यक्तिगत क्वांटम वर्कस्पेस' : 'Personal quantum workspace'}
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              {isHindi
                ? 'अपनी क्वांटम कंप्यूटिंग सीखने की प्रगति को एक ही स्थान पर रखें।'
                : 'Learn quantum computing with your progress in one place.'}
            </h1>
            <p className="mt-5 max-w-xl text-zinc-400 leading-7">
              {isHindi
                ? 'सत्रों में अपनी QubitLab शिक्षण पहचान को सुरक्षित रखने के लिए एक खाता बनाएं। आपका ट्यूटर और इंटरएक्टिव टूल्स एक ही वर्कस्पेस में उपलब्ध रहेंगे।'
                : 'Create an account to keep your QubitLab learning identity connected across sessions. Your tutor and interactive tools stay inside the same workspace.'}
            </p>
          </div>

          <div className="space-y-4 my-6">
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-300">
              {featurePills.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                  <Check className="w-4 h-4 text-[#dfff3f]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <button
                type="button"
                onClick={() => setShowSqlGuide(!showSqlGuide)}
                className="w-full flex items-center justify-between text-xs font-mono text-zinc-400 hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-[#dfff3f]" />
                  {isHindi ? 'Supabase डेटाबेस सेटअप गाइड (वैकल्पिक)' : 'Supabase Database Schema Setup (Optional)'}
                </span>
                {showSqlGuide ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showSqlGuide && (
                <div className="mt-3 pt-3 border-t border-white/10 text-xs text-zinc-400">
                  <p className="mb-2">
                    {isHindi
                      ? 'क्लाउड सिंक के लिए अपने Supabase SQL Editor में यह स्क्रिप्ट चलाएं:'
                      : 'To enable full cloud state persistence across sessions, execute this in your Supabase SQL Editor:'}
                  </p>
                  <div className="relative">
                    <pre className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-zinc-300 overflow-x-auto">
                      {supabaseSqlSchema}
                    </pre>
                    <button
                      type="button"
                      onClick={copySqlToClipboard}
                      className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-md bg-white/10 hover:bg-white/20 px-2 py-1 text-[10px] text-zinc-300"
                    >
                      <Copy className="w-3 h-3" />
                      {copiedSql ? (isHindi ? 'कॉपी किया गया!' : 'Copied!') : (isHindi ? 'कॉपी करें' : 'Copy SQL')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="glass-section rounded-3xl p-6 sm:p-8 self-center">
          <div className="flex gap-1 rounded-xl bg-black/35 border border-white/10 p-1 mb-7">
            <button
              type="button"
              onClick={() => { setMode('login'); setError(''); }}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm transition-colors ${mode === 'login' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              {isHindi ? 'लॉग इन' : 'Log in'}
            </button>
            <button
              type="button"
              onClick={() => { setMode('signup'); setError(''); }}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm transition-colors ${mode === 'signup' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              {isHindi ? 'साइन अप' : 'Sign up'}
            </button>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">
              {mode === 'login'
                ? (isHindi ? 'वापसी पर स्वागत है' : 'Welcome back')
                : (isHindi ? 'अपना खाता बनाएं' : 'Create your account')}
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              {mode === 'login'
                ? (isHindi ? 'अपने क्वांटम शिक्षण वर्कस्पेस को जारी रखें।' : 'Continue your quantum learning workspace.')
                : (isHindi ? 'मुफ्त QubitLab शिक्षार्थी खाते से शुरुआत करें।' : 'Start with a free QubitLab learner account.')}
            </p>
          </div>
          <button
            type="button"
            onClick={async () => {
              setError('');
              setLoading(true);
              try {
                const res = await loginWithGoogle();
                if (res) onAuthenticated(res);
              } catch (e) {
                setError(e instanceof Error ? e.message : (isHindi ? 'Google साइन-इन शुरू करने में असमर्थ।' : 'Unable to start Google sign-in.'));
              } finally {
                setLoading(false);
              }
            }}
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-zinc-200 hover:bg-white/10 disabled:opacity-50"
          >
            <Chrome className="w-4 h-4" /> {isHindi ? 'Google के साथ जारी रखें' : 'Continue with Google'}
          </button>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-zinc-600 my-4">
            <span className="h-px flex-1 bg-white/10" />
            {isHindi ? 'या ईमेल से जारी रखें' : 'or continue with email'}
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <form onSubmit={submit} className="space-y-4">
            {mode === 'signup' && (
              <label className="block">
                <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  {isHindi ? 'नाम' : 'Name'}
                </span>
                <div className="relative">
                  <UserRound className="absolute left-3 top-3.5 w-4 h-4 text-zinc-600" />
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-black/35 pl-10 pr-4 py-3 text-sm text-white outline-none focus:border-[#dfff3f]/50"
                    placeholder={isHindi ? "आपका नाम" : "Your name"}
                  />
                </div>
              </label>
            )}
            <label className="block">
              <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                {isHindi ? 'ईमेल' : 'Email'}
              </span>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-zinc-600" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-black/35 pl-10 pr-4 py-3 text-sm text-white outline-none focus:border-[#dfff3f]/50"
                  placeholder={isHindi ? "yourname@example.com" : "you@example.com"}
                />
              </div>
            </label>
            <label className="block">
              <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                {isHindi ? 'पासवर्ड' : 'Password'}
              </span>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-4 h-4 text-zinc-600" />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  maxLength={128}
                  type="password"
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  className="w-full rounded-xl border border-white/10 bg-black/35 pl-10 pr-4 py-3 text-sm text-white outline-none focus:border-[#dfff3f]/50"
                  placeholder={isHindi ? "कम से कम 8 वर्ण" : "At least 8 characters"}
                />
              </div>
            </label>
            {error && <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300">{error}</div>}
            <button
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl template-button px-4 py-3.5 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? (isHindi ? 'कृपया प्रतीक्षा करें…' : 'Please wait…') : mode === 'login' ? (isHindi ? 'लॉग इन करें' : 'Log in') : (isHindi ? 'खाता बनाएं' : 'Create account')}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
          <p className="mt-5 text-center text-[11px] text-zinc-500">
            {hasSupabaseConfig
              ? (isHindi
                ? 'प्रमाणीकरण आपके Supabase Auth प्रोजेक्ट द्वारा सुरक्षित रूप से संचालित है।'
                : 'Live Supabase Auth & Cloud Database connected.')
              : (isHindi
                ? 'स्थानीय सत्र सक्रिय है। Supabase जोड़ने के लिए Settings में VITE_SUPABASE_URL और VITE_SUPABASE_ANON_KEY जोड़ें।'
                : 'Local mode active. To connect Supabase, configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Settings.')}
          </p>
        </div>
      </div>
    </section>
  );
};

