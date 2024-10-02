import React from "react";
import "./TicketContainer.css";

// Destructure props to make the component cleaner
const TicketContainer = ({ groupedTickets, grouping, data }) => {
  return (
    <div className="ticket-container" style={{ display: "flex" }}>
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="ticket-group">
          <p>
            {grouping === "user"
              ? data.users.find((u) => u.id === group)?.name
              : group}
          </p>
          {groupedTickets[group].map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <h4>{ticket.id}</h4>
              <p>{ticket.title}</p>
              <p>{ticket.tag[0]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TicketContainer;
