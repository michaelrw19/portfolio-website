export default function ExperienceCard({role, company, period, onClick, isSelected}) {
  return (
    <button className={`bg-white p-3 d-flex flex-column align-items-start border gray-border shadow-sm rounded-2 ${isSelected && 'gray-subtle-bg'}`} onClick={onClick}>
      <span className='blue-text lh-1 mb-1' style={{fontWeight: "500"}}>{role}</span>
      <span className='fs-sm-7'>{company}</span>
      <span className='fs-sm-7 gray-text lh-1'>{period}</span>
    </button>
  );
}
