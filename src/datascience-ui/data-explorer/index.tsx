// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';
import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { IVsCodeApi } from '../react-common/postOffice';
import { MainPanel } from './mainPanel';

// This special function talks to vscode from a web panel
export declare function acquireVsCodeApi(): IVsCodeApi;

ReactDOM.render(
  <MainPanel skipDefault={typeof acquireVsCodeApi !== 'undefined'}/>,
  document.getElementById('root') as HTMLElement
);
