export default function CardStislaComponent({ header, body, footer}: any): JSX.Element {
  const cardFooter = () => {
    if(footer) {

    }
  }

  return (
    <div className="card">
      <div className="card-header">
        { header }
        <h4>Budget vs Sales</h4>
      </div>
      <div className="card-body">
        { body }
        <canvas id="myChart" height="158"></canvas>
      </div>
      {
        
      }
    </div>
  );
}