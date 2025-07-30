import { useState } from 'react';

const COLORS = [
  "red", "green", "blue", "yellow", "orange", "purple",
  "pink", "teal", "cyan", "lime", "amber", "indigo"
];

function App() {
  const [color, setColor] = useState('olive');

  // Fallback class if color is not in allowed COLORS
  const bgClass = COLORS.includes(color)
    ? `bg-${color}-600`
    : "bg-olive";

  return (
    <div className={`h-screen flex flex-col items-center relative overflow-hidden transition-colors ${bgClass}`}>
      <div className="btn-box bg-slate-200 p-2 rounded-lg absolute bottom-2 inset-x-0 flex flex-wrap justify-center mx-32">
        {COLORS.map(c => (
          <button
            key={c}
            className={`rounded-3xl px-4 py-2 bg-${c}-600 text-white mx-3`}
            onClick={() => setColor(c)}
          >
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
