import React from 'react-bootstrap';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const DownloadButton = ({
    variant,
    children
}) => (
        <Link to='/resume'>
        <Button variant={variant}>
            {children}
        </Button>
        </Link>
    )
