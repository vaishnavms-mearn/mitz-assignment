import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { orderCancellation, orderReturn } from './json';

function Workflow({ workflow }) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      let response;
      if (workflow === 'successfulDelivery') {
        // Fetch data for successful delivery workflow
        const fetchDatas = await axios.get('https://d2b83f18-f85b-41e1-95fd-a175ef150e62.mock.pstmn.io/delivered');
        const eventData = fetchDatas.data;
        const fetchedData = eventData.map(entry => entry.event);
        response = { data: { steps: fetchedData } };
      } else if (workflow === 'orderCancellation') {
        // Logic for order cancellation workflow
        const steps = [];
        let currentEvent = orderCancellation.find(event => event.event === 'cancelled');
        while (currentEvent) {
          steps.unshift(currentEvent.event);
          currentEvent = orderCancellation.find(event => currentEvent.parent_events_id?.includes(event.events_id));
        }
        response = { data: { steps } };
      } else if (workflow === 'orderReturn') {
        // Logic for order return workflow
        const steps = [];
        let currentEvent = orderReturn.find(event => event.event === 'return');
        while (currentEvent) {
          steps.unshift(currentEvent.event);
          currentEvent = orderReturn.find(event => currentEvent.parent_events_id?.includes(event.events_id));
        }
        response = { data: { steps } };
      }
      setData(response?.data);
    } catch (error) {
      console.error('Error fetching the workflow data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [workflow]);

  return (
    <div className="container mt-5">
      <h2 className='mb-5 workflow-heading'>{workflow.charAt(0).toUpperCase() + workflow.slice(1)}</h2>
      <div className="workflow-steps">
        {data?.steps?.map((step, index) => (
          <div key={index} className="workflow-step ">
            <div className="step-content">
              <span className='step-names'>{step}</span>
            </div>
            {index < data.steps.length - 1 && (
              <div className="step-arrow-section my-4">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workflow;
