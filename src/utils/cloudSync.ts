import { supabase } from '../lib/supabase';
import { UserProgress } from '../types/quantum';
import { AdaptiveState } from './adaptive';

export interface LearningRow {
  user_id: string;
  progress: UserProgress;
  adaptive: AdaptiveState;
  updated_at: string;
}

export async function loadLearningState(userId: string): Promise<LearningRow | null> {
  if (!supabase || !userId) return null;
  try {
    const { data, error } = await supabase
      .from('learning_state')
      .select('user_id, progress, adaptive, updated_at')
      .eq('user_id', userId)
      .maybeSingle<LearningRow>();

    if (error) {
      console.warn('Supabase learning_state load note:', error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.warn('Unable to load learning state from Supabase:', err);
    return null;
  }
}

export async function saveLearningState(
  userId: string,
  progress: UserProgress,
  adaptive: AdaptiveState
): Promise<boolean> {
  if (!supabase || !userId) return false;
  try {
    const { error } = await supabase
      .from('learning_state')
      .upsert(
        {
          user_id: userId,
          progress,
          adaptive,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id' }
      );

    if (error) {
      console.warn('Supabase learning_state upsert note:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Unable to save learning state to Supabase:', err);
    return false;
  }
}

