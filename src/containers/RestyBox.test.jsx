global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import RestyBox from './RestyBox';


describe('RestyBox container',  () => {
  it('', () => {
    render(<RestyBox />);
    const urlInput = screen.getByPlaceholderText('Place URL here...');
    const getInput = screen.getByLabelText('GET');
    const submitButton = screen.getByText('Kick it!');
    user.type(urlInput, 'https://jsonplaceholder.typicode.com/todos/1');
    user.click(getInput);
    user.click(submitButton);

    return waitFor(() => {
      expect(screen.getByTestId('display')).not.toBeEmptyDOMElement();

    }); 
  });

});
