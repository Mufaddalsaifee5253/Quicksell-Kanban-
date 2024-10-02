import React, { useState, useEffect } from "react";
import Controls from "./Controls/Controls";
import TicketContainer from "./TicketContainer/TicketContainer";
import "./App.css";

const App = () => {
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  const [groupedTickets, setGroupedTickets] = useState({});
  const [data, setData] = useState({ tickets: [], users: [] });

  // Fetch data from the API
  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to group tickets based on the selected grouping criteria
  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  useEffect(() => {
    let tickets = [...data.tickets];

    // Apply ordering within the groups
    if (ordering === "priority") {
      tickets = tickets.sort((a, b) => a.priority - b.priority);
    } else if (ordering === "title") {
      tickets = tickets.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Apply grouping
    if (grouping === "user") {
      setGroupedTickets(groupBy(tickets, "userId"));
    } else if (grouping === "status") {
      setGroupedTickets(groupBy(tickets, "status"));
    } else if (grouping === "priority") {
      setGroupedTickets(groupBy(tickets, "priority"));
    }
  }, [grouping, ordering, data]);

  return (
    <div>
      <Controls
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <TicketContainer
        groupedTickets={groupedTickets}
        data={data}
        grouping={grouping}
      />
    </div>
  );
};

export default App;
