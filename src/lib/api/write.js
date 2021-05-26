import client from './client';
import axios from 'axios';

export const write = () => {
    return client.post('/plans');
};
