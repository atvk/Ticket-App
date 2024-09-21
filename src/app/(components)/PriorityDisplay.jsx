import { BellSimple } from "@phosphor-icons/react/dist/ssr"
export default function PriorityDisplay({priority}) {
  return (
    <div className="flex justify-start align-baseline ">
      <BellSimple 
      size={32} 
      className={`pr-1 ${priority>0?"text-nav":"text-slate-400"}`}
      />
      <BellSimple 
      size={32} 
      className={`pr-1 ${priority>1?"text-nav":"text-slate-400"}`}
      />
      <BellSimple 
      size={32} 
      className={`pr-1 ${priority>2?"text-nav":"text-slate-400"}`}
      />
      <BellSimple 
      size={32} 
      className={`pr-1 ${priority>3?"text-nav":"text-slate-400"}`}
      />
      <BellSimple 
      size={32} 
      className={`pr-1 ${priority>4?"text-nav":"text-slate-400"}`}
      />
    </div>

  )
}