export default function BasicCard({title, children}: any) {
  return (
    <div className="card">
      <div className="card-header">
        <h4> { title } </h4>
      </div>
      <div className="card-body">
        { children }
      </div>
    </div>
  )
}