export default function ToolPill({src, name, show_anim = true}) {
  return (
    <div className={`border rounded-4 px-2 py-1 lh-1 ${show_anim ? 'pill-anim' : ''}`} style={{fontSize: "13px"}}>
      {src ? (<img className="tech-icon" src={src}/>) : null}
      <span className='lh-1'> {name}</span>
    </div>
  );
}
