export default function ToolBadge({customClass, src, name}) {
  return (
    <div className={customClass ? customClass : 'pills d-flex align-items-center gap-1 border rounded-2 px-2 p-1'}>
      {src != '' ? (<img className="tech-icon" src={src}/>) : null}
      <span className='lh-1'> {name}</span>
    </div>
  );
}
