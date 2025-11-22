export default function ToolBadge({src, name}) {
  return (
    <div className='tools d-flex align-items-center gap-1 border rounded-2 px-2 p-1'>
      <img className="tech-icon" src={src}/>
      <span className='lh-1'>{name}</span>
    </div>
  );
}
