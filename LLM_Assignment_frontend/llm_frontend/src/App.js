import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setSummary('');
      setError('');
    }
  };

 
  const handleFileUpload = async () => {
    if (!file) {
      setError('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setError('');
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Failed to upload file.');
    }
  };

  
  const handleSummarize = async () => {
    if (!fileName) {
      setError('Please upload a file first.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/summarize', { file_name: fileName });
      setSummary(response.data.summary);
      setError('');
    } catch (error) {
      console.error('Error summarizing file:', error);
      setError('Failed to summarize file.');
    }
  };

  return (
    <div className="App">
      <div className='documentHeading'>Document Summarize</div>
      <input className='inputData' type="file" onChange={handleFileChange} />
      <button className='uploadData' onClick={handleFileUpload}>Upload File</button>
      <button className='summarizeData' onClick={handleSummarize}>Summarize Document</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {summary && (
        <div className='summary'>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
