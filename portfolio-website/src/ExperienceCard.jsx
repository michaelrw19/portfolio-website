export default function ExperienceCard({role, company, period, onClick, isSelected}) {
  return (
    <button className={`d-flex flex-column border rounded-2 p-3 bg-white align-items-start ${isSelected && 'border-info bg-info-subtle'}`} onClick={onClick}>
      <span className='fw-bold lh-1 mb-1'>{role}</span>
      <span>{company}</span>
      <span className='text-secondary lh-1'>{period}</span>
    </button>
  );
}
