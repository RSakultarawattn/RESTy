import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ url, method, body, onSubmit, onChange }) => {
  return (  

    <div>
      <form onSubmit={onSubmit} className={styles.Form}>
        <input type="text" className={styles.url} name="url" 
          placeholder="Place URL here..." value={url} onChange={onChange} />
        <div>
          <section>
            <input type="radio" className="get" name="method" value="GET" 
              checked={method === 'GET'} onChange={onChange} />
            <label htmlFor="get">GET</label>
            <input type="radio" className="post" name="method" value="POST" 
              checked={method === 'POST'} onChange={onChange} />
            <label htmlFor="post">POST</label>
            <input type="radio" className="put" name="method" value="PUT" 
              checked={method === 'PUT'} onChange={onChange} />
            <label htmlFor="put">PUT</label>
            <input type="radio" className="patch" name="method" value="patch" 
              checked={method === 'PATCH'} onChange={onChange} />
            <label htmlFor="patch">PATCH</label>
            <input type="radio" className="delete" name="method" value="DELETE"
              checked={method === 'DELETE'} onChange={onChange} />
            <label htmlFor="delete">DELETE</label>
          </section>
          <button>Kick it!</button>

        </div>
        <textarea placeholder="JSON in the raw" name="body" 
          value={body} onChange={onChange}></textarea>
      </form>
            
    </div>
  );
};

Form.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired

};

export default Form;

