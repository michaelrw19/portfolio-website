export default function PortfolioCard({src, title, tags, description, buttons}) {
  return (
    <div className="col">
      <div className="card h-100 shadow-md">
        <img src={src} className="card-img-top"/>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-0">{title}</h5>
          <div className="py-2">
            {tags.map((tag, _) => (
              <span className='rounded-4 px-2 py-1 lh-1 gray-bg gray-text' style={{fontSize: '13px'}} key={_}>{tag}</span>
            ))}
          </div>
          {description}
          <div className="mt-auto">
            {buttons}
          </div>
        </div>
      </div>
    </div>
  );
}
