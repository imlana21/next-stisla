export default function StatisticCard({header, text, icon, iconBg}: any): JSX.Element {
  return (
    <div className="card card-statistic-1">
      <div className={`card-icon ${iconBg}`}>
        <i className={icon}></i>
      </div>
      <div className="card-wrap">
        <div className="card-header">
          <h4> {header} </h4>
        </div>
        <div className="card-body"> {text} </div>
      </div>
    </div>
  )
}