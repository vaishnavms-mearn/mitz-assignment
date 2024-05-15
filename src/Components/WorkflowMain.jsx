import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Workflow from './Workflow';
function WorkflowMain() {
    const [workflow, setWorkflow] = useState('')

    return (
        <div>
            <div className="worflow-heading text-center">
                <h1 className='mt-3 mb-4'>Workflow</h1>
            </div>
            <div className="worflow-buttons text-center">
                <Button onClick={() => setWorkflow('successfulDelivery')} variant="outline-dark" className='mx-2'>
                    Successful delivery
                </Button>
                <Button onClick={() => setWorkflow('orderCancellation')} variant="outline-dark" className='mx-2'>
                    Order cancellation
                </Button>
                <Button onClick={() => setWorkflow('orderReturn')} variant="outline-dark" className='mx-2 return-button'>
                    Order return
                </Button>
                <Workflow workflow={workflow} />
            </div>
        </div>
    )
}

export default WorkflowMain