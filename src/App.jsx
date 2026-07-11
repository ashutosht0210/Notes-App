import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [heading, setHeading] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState(() => {
    try {
      const saved = localStorage.getItem('notes');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error loading notes from localStorage:', e);
      return [];
    }
  })

  const submitHandler = (e) => {
    e.preventDefault()
    if (!heading.trim() && !details.trim()) return;

    const newTasks = [...task, { heading: heading.trim(), details: details.trim() }];
    setTask(newTasks)
    localStorage.setItem('notes', JSON.stringify(newTasks))
    setHeading('')
    setDetails('')
  }

  const deleteNote = (i) => {
    const copyTask = [...task]
    copyTask.splice(i, 1)
    setTask(copyTask)
    localStorage.setItem('notes', JSON.stringify(copyTask))
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col lg:flex-row antialiased font-sans">
      {/* Left side: Add Note Form */}
      <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-neutral-900 bg-neutral-950">
        <form 
          onSubmit={submitHandler}
          className="w-full max-w-md mx-auto flex flex-col gap-6"
        >
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Create Note
            </h1>
            <p className="text-neutral-500 text-sm">Capture your thoughts instantly</p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Title</label>
              <input 
                type="text" 
                placeholder="Enter note title..."
                className="px-4 py-3 w-full bg-neutral-900 border border-neutral-800 rounded-xl focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 outline-none text-neutral-100 placeholder-neutral-600 transition-all font-medium"
                value={heading}
                onChange={(e) => setHeading(e.target.value)} 
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Details</label>
              <textarea 
                placeholder="Write note details..."
                className="px-4 py-3 h-48 w-full bg-neutral-900 border border-neutral-800 rounded-xl focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 outline-none text-neutral-100 placeholder-neutral-600 transition-all font-medium resize-none leading-relaxed" 
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
          </div>

          <button className="active:scale-[0.98] bg-white hover:bg-neutral-200 text-black w-full font-bold px-5 py-3 rounded-xl transition-all shadow-lg hover:shadow-white/5 cursor-pointer">
            Add Note
          </button>
        </form>
      </div>

      {/* Right side: Recent Notes list */}
      <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col bg-neutral-950">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Recent Notes</h2>
          <p className="text-neutral-500 text-sm mt-1">Your stored thoughts and checklists</p>
        </div>
        
        <div className="flex gap-5 w-full flex-wrap items-start justify-start overflow-y-auto max-h-[calc(100vh-200px)] pb-10 pr-2">
          {task.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full py-20 text-neutral-500 text-center">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 text-2xl shadow-inner">
                ✍️
              </div>
              <p className="font-semibold text-lg text-neutral-300">No notes yet</p>
              <p className="text-sm text-neutral-500 mt-1 max-w-[260px] leading-relaxed">
                Fill in the form on the left to add your first note.
              </p>
            </div>
          ) : (
            task.map((elem, i) => {
              const accentBorders = [
                'border-l-rose-500',
                'border-l-amber-500',
                'border-l-emerald-500',
                'border-l-cyan-500',
                'border-l-indigo-500',
                'border-l-fuchsia-500',
              ];
              const accentClass = accentBorders[i % accentBorders.length];

              return (
                <div 
                  key={i} 
                  className={`relative p-6 bg-neutral-900/40 border border-neutral-900 ${accentClass} border-l-4 rounded-xl text-neutral-100 w-full sm:w-[calc(50%-10px)] min-h-[160px] flex flex-col justify-between group transition-all duration-300 hover:border-neutral-800 hover:-translate-y-0.5 shadow-md`}
                >
                  <div className="mb-4">
                    <h3 className="font-bold text-lg leading-snug break-words pr-6 text-white mb-2">
                      {elem.heading || 'Untitled Note'}
                    </h3>
                    <p className="text-neutral-400 text-sm font-normal leading-relaxed whitespace-pre-wrap break-words">
                      {elem.details}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => deleteNote(i)} 
                    className="absolute top-4 right-4 text-neutral-500 hover:text-red-400 active:scale-90 p-1.5 rounded-lg hover:bg-neutral-800 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                    aria-label="Delete note"
                  >
                    <X size={16} strokeWidth={2.5} />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default App

