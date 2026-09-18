import { supabase, hasSupabaseConfig } from '../lib/supabase';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

const LOCAL_USER_KEY = 'qubitlab_local_auth_user';

const getLocalUser = (): AuthUser | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(LOCAL_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const setLocalUser = (user: AuthUser | null) => {
  if (typeof window === 'undefined') return;
  try {
    if (user) {
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(LOCAL_USER_KEY);
    }
  } catch {
    // Local storage is optional
  }
};

const mapUser = (user: { id: string; email?: string | null; created_at?: string; user_metadata?: Record<string, unknown> }): AuthUser => ({
  id: user.id,
  email: user.email || '',
  name: typeof user.user_metadata?.name === 'string' && user.user_metadata.name.trim()
    ? user.user_metadata.name.trim()
    : user.email?.split('@')[0] || 'Learner',
  createdAt: user.created_at || new Date().toISOString(),
});

export const getCurrentUser = async (): Promise<AuthUser | null> => {
  if (hasSupabaseConfig && supabase) {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (!error && data?.user) {
        const u = mapUser(data.user);
        setLocalUser(u);
        return u;
      }
    } catch {
      // Fallback to local session
    }
  }
  return getLocalUser();
};

export const login = async (email: string, password: string): Promise<AuthUser> => {
  if (hasSupabaseConfig && supabase) {
    const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error || !data.user) throw new Error(error?.message || 'Unable to sign in.');
    const u = mapUser(data.user);
    setLocalUser(u);
    return u;
  }

  // Local fallback authentication
  const trimmed = email.trim();
  if (!trimmed || !trimmed.includes('@')) {
    throw new Error('Please enter a valid email address.');
  }
  if (!password || password.length < 6) {
    throw new Error('Password must be at least 6 characters long.');
  }
  const local = getLocalUser();
  const u: AuthUser = {
    id: local?.email === trimmed ? local.id : 'local-' + Math.random().toString(36).slice(2, 9),
    email: trimmed,
    name: local?.email === trimmed ? local.name : trimmed.split('@')[0],
    createdAt: local?.email === trimmed ? local.createdAt : new Date().toISOString(),
  };
  setLocalUser(u);
  return u;
};

export const signup = async (name: string, email: string, password: string): Promise<AuthUser> => {
  if (hasSupabaseConfig && supabase) {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { data: { name: name.trim() } },
    });

    if (error) throw new Error(error.message);
    if (!data.user) throw new Error('Unable to create your account.');

    if (!data.session) {
      throw new Error('Account created. Check your email to confirm your account, then sign in.');
    }

    const u = mapUser(data.user);
    setLocalUser(u);
    return u;
  }

  // Local fallback sign-up
  const trimmedEmail = email.trim();
  const trimmedName = name.trim() || trimmedEmail.split('@')[0] || 'Learner';
  if (!trimmedEmail || !trimmedEmail.includes('@')) {
    throw new Error('Please enter a valid email address.');
  }
  if (!password || password.length < 6) {
    throw new Error('Password must be at least 6 characters long.');
  }
  const u: AuthUser = {
    id: 'local-' + Math.random().toString(36).slice(2, 9),
    email: trimmedEmail,
    name: trimmedName,
    createdAt: new Date().toISOString(),
  };
  setLocalUser(u);
  return u;
};

export const logout = async () => {
  if (hasSupabaseConfig && supabase) {
    try {
      await supabase.auth.signOut();
    } catch {
      // ignore
    }
  }
  setLocalUser(null);
};

export const loginWithGoogle = async (): Promise<AuthUser | void> => {
  if (hasSupabaseConfig && supabase) {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    });
    if (error) throw new Error(error.message || 'Unable to start Google sign-in.');
    return;
  }

  // Local fallback Google sign-in
  const u: AuthUser = {
    id: 'google-learner-' + Math.random().toString(36).slice(2, 7),
    email: 'quantum.learner@gmail.com',
    name: 'Quantum Explorer',
    createdAt: new Date().toISOString(),
  };
  setLocalUser(u);
  return u;
};

