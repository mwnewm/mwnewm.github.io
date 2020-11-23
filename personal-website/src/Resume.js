import React from 'react';
import pdf from './assets/MaeveNewmanResumeF20.pdf';

export const Resume = () => (
    <body onLoad={window.open(pdf, '_self')}>
    </body>
)