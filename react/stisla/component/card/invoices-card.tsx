import { ReactChild, ReactFragment, ReactPortal } from "react";

export default function InvoicesCard({ invoices }:any) {
  const invoicesTableRow = invoices.map( 
    (
      invoice: { 
        id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; 
        customer: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; 
        status: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; 
        due_date: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; 
      }, i: any
    ) => {
      return (
        <tr key={`invoice-${i}`}>
          <td>
            <a href="#"> { invoice.id } </a>
          </td>
          <td className="font-weight-600"> { invoice.customer } </td>
          <td>
            <div className="badge badge-warning"> { invoice.status } </div>
          </td>
          <td> { invoice.due_date } </td>
          <td>
            <a href="#" className="btn btn-primary" onClick={ (e) => e.preventDefault() }>
              Detail
            </a>
          </td>
        </tr>
      )
    }
  );

  return (
    <div className="card">
      <div className="card-header">
        <h4> Invoices </h4>
        <div className="card-header-action">
          <a href="#" className="btn btn-danger">
            View More <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive table-invoice">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Invoice ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Action</th>
              </tr>
              { invoicesTableRow }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}