import React, { useState } from 'react';
import { X, Play, Copy, Check, Terminal, Code2, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectCodeModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectCodeModal: React.FC<ProjectCodeModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');
  const [copiedCode, setCopiedCode] = useState(false);

  // Demo States
  // 1. Voter Demo
  const [voterName, setVoterName] = useState('Jordan');
  const [voterAge, setVoterAge] = useState<number | string>(18);
  const [voterOutput, setVoterOutput] = useState<string | null>(null);

  // 2. Calculator Demo
  const [calcNum1, setCalcNum1] = useState<number>(25);
  const [calcNum2, setCalcNum2] = useState<number>(5);
  const [calcOp, setCalcOp] = useState<'+' | '-' | '*' | '/'>('+');
  const [calcOutput, setCalcOutput] = useState<string | null>(null);

  // 3. ATM Demo
  const [atmBalance, setAtmBalance] = useState<number>(1000.0);
  const [atmAmount, setAtmAmount] = useState<number>(150);
  const [atmLogs, setAtmLogs] = useState<string[]>([
    'ATM System initialized.',
    'PIN verified (1234).',
    'Initial balance: $1,000.00',
  ]);

  // 4. Grade Demo
  const [gradeName, setGradeName] = useState('Taylor');
  const [marks, setMarks] = useState<number[]>([85, 92, 78, 88]);
  const [gradeResult, setGradeResult] = useState<string | null>(null);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.pythonCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Run Voter Checker
  const handleRunVoter = () => {
    const ageNum = Number(voterAge);
    if (isNaN(ageNum) || voterAge === '') {
      setVoterOutput('Error: Please enter a valid numerical age.');
      return;
    }
    if (ageNum < 0) {
      setVoterOutput('Error: Age cannot be a negative number.');
    } else if (ageNum >= 18) {
      setVoterOutput(`Congratulations, ${voterName}! You are eligible to vote. (Age: ${ageNum} >= 18)`);
    } else {
      const left = 18 - ageNum;
      setVoterOutput(`Sorry, ${voterName}. You are not eligible to vote yet. You will be eligible in ${left} year(s).`);
    }
  };

  // Run Calculator
  const handleRunCalculator = () => {
    let res: number | string = 0;
    if (calcOp === '+') res = calcNum1 + calcNum2;
    else if (calcOp === '-') res = calcNum1 - calcNum2;
    else if (calcOp === '*') res = calcNum1 * calcNum2;
    else if (calcOp === '/') {
      if (calcNum2 === 0) {
        setCalcOutput('Error: Division by zero is undefined.');
        return;
      }
      res = (calcNum1 / calcNum2).toFixed(2);
    }
    setCalcOutput(`Result: ${calcNum1} ${calcOp} ${calcNum2} = ${res}`);
  };

  // Run ATM Actions
  const handleAtmCheckBalance = () => {
    setAtmLogs((prev) => [...prev, `[Action: Inquiry] Current balance: $${atmBalance.toFixed(2)}`]);
  };

  const handleAtmDeposit = () => {
    if (atmAmount <= 0) {
      setAtmLogs((prev) => [...prev, `[Action: Deposit Failed] Deposit amount must be positive.`]);
      return;
    }
    const newBal = atmBalance + atmAmount;
    setAtmBalance(newBal);
    setAtmLogs((prev) => [
      ...prev,
      `[Action: Deposit] Added $${atmAmount.toFixed(2)}. New balance: $${newBal.toFixed(2)}`,
    ]);
  };

  const handleAtmWithdraw = () => {
    if (atmAmount <= 0) {
      setAtmLogs((prev) => [...prev, `[Action: Withdrawal Failed] Amount must be positive.`]);
      return;
    }
    if (atmAmount > atmBalance) {
      setAtmLogs((prev) => [
        ...prev,
        `[Action: Withdrawal Denied] Insufficient funds! Attempted: $${atmAmount.toFixed(2)}, Available: $${atmBalance.toFixed(2)}`,
      ]);
      return;
    }
    const newBal = atmBalance - atmAmount;
    setAtmBalance(newBal);
    setAtmLogs((prev) => [
      ...prev,
      `[Action: Withdrawal] Dispensed $${atmAmount.toFixed(2)}. Remaining balance: $${newBal.toFixed(2)}`,
    ]);
  };

  // Run Grade Calculator
  const handleRunGradeCalc = () => {
    const total = marks.reduce((acc, m) => acc + m, 0);
    const avg = total / marks.length;
    let letter = 'F (Needs Improvement)';
    if (avg >= 90) letter = 'A+ (Outstanding)';
    else if (avg >= 80) letter = 'A (Excellent)';
    else if (avg >= 70) letter = 'B (Good)';
    else if (avg >= 60) letter = 'C (Satisfactory)';
    else if (avg >= 50) letter = 'D (Pass)';

    setGradeResult(`Student: ${gradeName} | Total: ${total}/${marks.length * 100} | Average: ${avg.toFixed(2)}% | Grade: ${letter}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900">{project.name}</h3>
              <span className="text-xs text-slate-500 font-mono">({project.category})</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{project.description}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-800 rounded-md hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-between px-6 pt-3 pb-2 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'demo'
                  ? 'bg-blue-50 text-blue-700 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive Simulator</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-blue-50 text-blue-700 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Python Source Code</span>
            </button>
          </div>

          {activeTab === 'code' && (
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'code' ? (
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>Authentic first-year Python implementation</span>
                <span>Language: Python 3</span>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-100 rounded-lg text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
                <code>{project.pythonCode}</code>
              </pre>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Simulator based on project type */}
              {project.demoType === 'voter' && (
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-lg text-xs text-blue-900 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span>
                      This simulator executes the exact conditional branching logic (<code>if user_age &gt;= 18</code>) from the Python script.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={voterName}
                        onChange={(e) => setVoterName(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Age (Years)
                      </label>
                      <input
                        type="number"
                        value={voterAge}
                        onChange={(e) => setVoterAge(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleRunVoter}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Execute Python Logic</span>
                  </button>

                  {voterOutput && (
                    <div className="p-3.5 bg-slate-900 text-emerald-400 font-mono text-xs rounded-lg border border-slate-800">
                      <span className="text-slate-400">&gt; python voter_eligibility.py</span>
                      <p className="mt-1">{voterOutput}</p>
                    </div>
                  )}
                </div>
              )}

              {project.demoType === 'calculator' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Number 1
                      </label>
                      <input
                        type="number"
                        value={calcNum1}
                        onChange={(e) => setCalcNum1(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Operation
                      </label>
                      <select
                        value={calcOp}
                        onChange={(e) => setCalcOp(e.target.value as any)}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md bg-white"
                      >
                        <option value="+">Addition (+)</option>
                        <option value="-">Subtraction (-)</option>
                        <option value="*">Multiplication (*)</option>
                        <option value="/">Division (/)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Number 2
                      </label>
                      <input
                        type="number"
                        value={calcNum2}
                        onChange={(e) => setCalcNum2(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleRunCalculator}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Calculate Result</span>
                  </button>

                  {calcOutput && (
                    <div className="p-3.5 bg-slate-900 text-emerald-400 font-mono text-xs rounded-lg border border-slate-800">
                      <span className="text-slate-400">&gt; python calculator.py</span>
                      <p className="mt-1">{calcOutput}</p>
                    </div>
                  )}
                </div>
              )}

              {project.demoType === 'atm' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg">
                    <span className="text-xs text-slate-600">Simulated Account Balance:</span>
                    <span className="text-sm font-mono font-bold text-slate-900">
                      ${atmBalance.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Transaction Amount ($)
                      </label>
                      <input
                        type="number"
                        value={atmAmount}
                        onChange={(e) => setAtmAmount(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md"
                      />
                    </div>
                    <div className="flex items-end gap-2 pt-5">
                      <button
                        onClick={handleAtmDeposit}
                        className="px-3 py-2 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                      >
                        Deposit
                      </button>
                      <button
                        onClick={handleAtmWithdraw}
                        className="px-3 py-2 text-xs font-medium text-white bg-slate-800 hover:bg-slate-900 rounded-md transition-colors"
                      >
                        Withdraw
                      </button>
                      <button
                        onClick={handleAtmCheckBalance}
                        className="px-3 py-2 text-xs font-medium text-slate-700 bg-slate-200 hover:bg-slate-300 rounded-md transition-colors"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>

                  {/* Terminal Log */}
                  <div className="p-3 bg-slate-900 text-slate-200 font-mono text-xs rounded-lg max-h-40 overflow-y-auto space-y-1 border border-slate-800">
                    <div className="text-slate-500 pb-1 border-b border-slate-800">
                      &gt; Python ATM Console Log
                    </div>
                    {atmLogs.map((log, i) => (
                      <div key={i} className="text-emerald-400">
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.demoType === 'grade' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Student Name
                    </label>
                    <input
                      type="text"
                      value={gradeName}
                      onChange={(e) => setGradeName(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Marks (out of 100 for 4 subjects)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {marks.map((m, idx) => (
                        <div key={idx}>
                          <span className="text-[10px] text-slate-500">Sub {idx + 1}</span>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={m}
                            onChange={(e) => {
                              const newMarks = [...marks];
                              newMarks[idx] = Number(e.target.value);
                              setMarks(newMarks);
                            }}
                            className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded-md"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleRunGradeCalc}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Calculate Average & Grade</span>
                  </button>

                  {gradeResult && (
                    <div className="p-3.5 bg-slate-900 text-emerald-400 font-mono text-xs rounded-lg border border-slate-800">
                      <span className="text-slate-400">&gt; python student_grade_calculator.py</span>
                      <p className="mt-1">{gradeResult}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Demonstrating foundational logic and procedural code</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
