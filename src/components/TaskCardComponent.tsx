// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// This component renders the card for a group of tasks
// The rendered structure looks like this:
//
// <message>
// <task_1>
// ...
// <task_n>

import React from 'react'
import { TaskCard } from '../models/Types';
import TaskComponent from './TaskComponent';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
// import { Alert } from "@fluentui/react-components/unstable";
// import Alert from 'react-bootstrap/Alert';

type AlertColor = 'success' | 'info' | 'warning' | 'error';

interface TaskCardProps {
  card: TaskCard,
  isHighContrast: boolean
}

function severityMapping(severity: string): AlertColor{
  return severity as AlertColor
}

const TaskCardComponent: React.FunctionComponent<TaskCardProps> = ({ card, isHighContrast }) => {
  const hasMessage = card.message != null && card.message.length > 0;
  return (
    <div className="normal-text">
      { hasMessage ? <div className="my-3" dangerouslySetInnerHTML={{ __html: card.message }} /> : null}
      { card.tasks.length !== 0 ? 
        <>
          {card.tasks.map(task => (
            <TaskComponent task={task} isHighContrast={isHighContrast}/>
          ))}
        </> : null 
      }
      { card.tasks.length !== 0 ? 
        <>
          {card.tasks.map(task => (
            <Alert severity={severityMapping(task.name)}>
                <AlertTitle>{task.name}</AlertTitle>
              {task.details}
            </Alert>
          ))}
        </> : null 
      }
    </div>
  )
}


export default TaskCardComponent;