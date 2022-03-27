export default function StatisticCanvas({ cardId, iconBg, icon, title, text}: any) {
  return (
    <div className="card card-statistic-2">
      <div className="card-chart">
        <canvas id={ cardId } height="80"></canvas>
      </div>
      <div className={ `card-icon shadow-primary ${iconBg}` }>
        <i className={ icon }></i>
      </div>
      <div className="card-wrap">
        <div className="card-header">
          <h4> { title }</h4>
        </div>
        <div className="card-body"> { text }</div>
      </div>
    </div>
  )
}