import React from 'react';
import { ArrowRight, Beaker, BookOpen, CheckCircle2, Circle, Code2, Layers, Sparkles, Target, TrendingUp } from 'lucide-react';
import { CONCEPT_NODES, GOAL_LABELS } from '../../data/adaptiveLearning';
import { AdaptiveState, getNextConcept, getMasteryAverage } from '../../utils/adaptive';
import { UserProgress } from '../../types/quantum';
import { useLanguage } from '../../context/LanguageContext';

type AppTab = 'dashboard' | 'curriculum' | 'composer' | 'bloch' | 'sandbox' | 'quiz';
interface Props { progress: UserProgress; adaptive: AdaptiveState; onNavigate: (tab: AppTab) => void; onOpenTopic: (topicId: string) => void; }

export const LearnerDashboard: React.FC<Props> = ({ progress, adaptive, onNavigate, onOpenTopic }) => {
  const { isHindi } = useLanguage();
  const next = getNextConcept(adaptive);
  const average = getMasteryAverage(adaptive);
  const completed = CONCEPT_NODES.filter((node) => (adaptive.mastery[node.id] ?? 0) >= 80).length;
  const bestQuiz = Object.values(progress.quizScores).reduce((best, score) => Math.max(best, Number.isFinite(score) ? score : 0), 0);

  return (
    <div className="space-y-6 py-5">
      <section className="glass-panel rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-[.2em] text-zinc-500">
              {isHindi ? 'मेरा अधिगम तंत्र' : 'My learning system'}
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-100 mt-2">
              {isHindi ? 'प्रमाण से सीखें, केवल पूरा करने से नहीं।' : 'Learn from evidence, not completion.'}
            </h1>
            <p className="text-sm text-zinc-500 mt-2">
              {isHindi ? 'लक्ष्य: ' : 'Goal: '}
              <span className="text-zinc-300">
                {adaptive.profile ? GOAL_LABELS[adaptive.profile.goal] : (isHindi ? 'क्वांटम कंप्यूटिंग एक्सप्लोर करें' : 'Explore quantum computing')}
              </span>
            </p>
          </div>
          <div className="min-w-[220px]">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-500">{isHindi ? 'समग्र दक्षता' : 'Overall mastery'}</span>
              <span className="font-mono text-[#dfff3f]">{average}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-[#dfff3f]" style={{ width: `${average}%` }} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-7">
          <Stat label={isHindi ? "दक्षता" : "Mastery"} value={`${average}%`} />
          <Stat label={isHindi ? "सीखी गई अवधारणाएं" : "Concepts mastered"} value={`${completed}/${CONCEPT_NODES.length}`} />
          <Stat label={isHindi ? "अनुमान सटीकता" : "Prediction accuracy"} value={`${adaptive.predictionAccuracy}%`} />
          <Stat label={isHindi ? "दर्ज अनुमान" : "Recorded predictions"} value={`${adaptive.predictionCount}`} />
          <Stat label="XP" value={`${progress.xp}`} />
        </div>
      </section>

      <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-6">
        <section className="glass-section rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[#dfff3f]" />
            <h2 className="font-semibold text-zinc-100">
              {isHindi ? 'अनुशंसित अगला विषय' : 'Recommended next'}
            </h2>
          </div>
          <div className="mt-5 rounded-xl border border-[#dfff3f]/20 bg-[#dfff3f]/5 p-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[10px] font-mono text-[#dfff3f] uppercase">{next.category}</div>
                <h3 className="text-xl font-semibold text-zinc-100 mt-1">{next.title}</h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">
                {next.duration} {isHindi ? 'मिनट' : 'MIN'}
              </span>
            </div>
            <p className="text-sm leading-6 text-zinc-400 mt-3">{next.objective}</p>
            <button
              onClick={() => onOpenTopic(next.id)}
              className="template-button px-4 py-2.5 rounded-lg text-xs font-semibold mt-5 inline-flex items-center gap-2"
            >
              {isHindi ? 'विषय खोलें' : 'Open topic'} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        <section className="glass-section rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-300" />
            <h2 className="font-semibold text-zinc-100">
              {isHindi ? 'अधिगम संकेत' : 'Learning signals'}
            </h2>
          </div>
          <div className="space-y-3 mt-5">
            <Signal label={isHindi ? "अनुमान सटीकता" : "Prediction accuracy"} value={`${adaptive.predictionAccuracy}%`} />
            <Signal label={isHindi ? "दर्ज अनुमान" : "Recorded predictions"} value={`${adaptive.predictionCount}`} />
            <Signal label={isHindi ? "सर्वश्रेष्ठ क्विज स्कोर" : "Best quiz score"} value={`${bestQuiz}%`} />
          </div>
        </section>
      </div>

      <section className="glass-section rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[.2em] text-zinc-500">
              {isHindi ? 'कॉन्सेप्ट मैप' : 'Concept map'}
            </div>
            <h2 className="text-xl font-semibold text-zinc-100 mt-1">
              {isHindi ? 'आपकी प्रगति' : 'Where you stand'}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-zinc-500">
            {completed} {isHindi ? 'पूर्ण' : 'mastered'}
          </span>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 mt-5">
          {CONCEPT_NODES.map((node) => {
            const mastery = adaptive.mastery[node.id] ?? 0;
            const locked = node.prerequisites.some((id) => (adaptive.mastery[id] ?? 0) < 55);
            return (
              <button
                key={node.id}
                disabled={locked}
                onClick={() => onOpenTopic(node.id)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  locked
                    ? 'border-white/5 bg-black/15 opacity-45 cursor-not-allowed'
                    : 'border-white/10 bg-black/25 hover:border-white/25'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {mastery >= 80 ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : locked ? (
                      <Circle className="w-4 h-4 text-zinc-700" />
                    ) : (
                      <Beaker className="w-4 h-4 text-[#dfff3f]" />
                    )}
                    <span className="text-sm text-zinc-200">{node.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">{mastery}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full mt-3">
                  <div className="h-full bg-[#dfff3f]" style={{ width: `${mastery}%` }} />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-3">
        <Quick
          icon={BookOpen}
          title={isHindi ? "सीखें" : "Learn"}
          text={isHindi ? "पढ़ें और विज़ुअलाइज़ करें" : "Read and visualize"}
          onClick={() => onNavigate('curriculum')}
        />
        <Quick
          icon={Layers}
          title={isHindi ? "प्रयोग करें" : "Experiment"}
          text={isHindi ? "एक सर्किट बनाएं" : "Build a circuit"}
          onClick={() => onNavigate('composer')}
        />
        <Quick
          icon={Code2}
          title={isHindi ? "कोड" : "Code"}
          text={isHindi ? "पायथन कोड एक्सप्लोर करें" : "Explore representative Python"}
          onClick={() => onNavigate('sandbox')}
        />
      </section>

      <div className="text-[10px] font-mono text-zinc-600 flex items-center gap-2">
        <Sparkles className="w-3 h-3" />
        {isHindi
          ? 'सिफारिशें आपके लक्ष्य, पृष्ठभूमि, दक्षता, गलतफहमियों और अधिगम संकेतों का उपयोग करती हैं।'
          : 'Recommendations use your goal, background, mastery, misconceptions and learning signals.'}
      </div>
    </div>
  );
};

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/25 p-3">
      <div className="text-[10px] text-zinc-600">{label}</div>
      <div className="text-sm font-mono text-zinc-200 mt-1">{value}</div>
    </div>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between rounded-xl border border-white/5 bg-black/20 px-4 py-3 text-xs">
      <span className="text-zinc-500">{label}</span>
      <span className="font-mono text-zinc-200">{value}</span>
    </div>
  );
}

function Quick({
  icon: Icon,
  title,
  text,
  onClick,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="glass-card rounded-xl p-4 text-left flex items-center gap-3">
      <Icon className="w-5 h-5 text-[#dfff3f]" />
      <div>
        <div className="text-sm font-semibold text-zinc-100">{title}</div>
        <div className="text-xs text-zinc-500">{text}</div>
      </div>
    </button>
  );
}

