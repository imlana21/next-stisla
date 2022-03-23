import Link from "next/link";
import { customerTicket } from "../../../../pages/stisla/dashboard/_data";

export default function TicketCard() {
  const ticket_list = customerTicket.map( (ticket, i:number) => {
    return (
      <a href={ticket.url} className="ticket-item" key={`ticket${i}`}>
        <div className="ticket-title">
          <h4> { ticket.title } </h4>
        </div>
        <div className="ticket-info">
          <div> { ticket.info.name } </div>
          <div className="bullet"></div>
          <div className="text-primary"> { ticket.info.time } </div>
        </div>
      </a>
    );
  });

  return (
    <div className="card card-hero">
      <div className="card-header">
        <div className="card-icon">
          <i className="far fa-question-circle"></i>
        </div>
        <h4> { customerTicket.length }</h4>
        <div className="card-description">Customers need help</div>
      </div>
      <div className="card-body p-0">
        <div className="tickets-list">
          { ticket_list }
          <Link href="/">
            <a className="ticket-item ticket-more">
              View All <i className="fas fa-chevron-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}