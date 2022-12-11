// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import surveyData from '../data/test/survey.json';
import contentData from '../data/test/content.json';

test('renders learn react link', () => {
  render(<App surveyData={surveyData} contentData={contentData}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
