import React, { useState } from 'react'

export default function ChatPage() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  async function query(data) {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/openchat/openchat_3.5',
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
        },
        method: 'POST',
        body: JSON.stringify(data),
      }
    )
    const result = await response.json()
    return result
  }

  const handleSubmit = async () => {
    const result = await query({ inputs: input })
    setResponse(JSON.stringify(result))
    setInput('') // Clear input field after sending
  }

  return (
    <div className='chat-container'>
      <div className='chat-box'>
        <div className='messages'>
          <div className='response'>{response && <p>{response}</p>}</div>
        </div>
        <div className='input-area'>
          <input
            type='text'
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='Schreiben Sie Ihre Nachricht...'
            className='chat-input'
          />
          <button onClick={handleSubmit} className='send-button'>
            Senden
          </button>
        </div>
      </div>
      <style jsx>{`
        .chat-container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
        }
        .chat-box {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 10px;
          background: #f9f9f9;
        }
        .messages {
          height: 300px;
          overflow-y: auto;
          margin-bottom: 10px;
        }
        .response p {
          background: #e0e0e0;
          padding: 10px;
          border-radius: 4px;
          margin: 5px 0;
        }
        .input-area {
          display: flex;
        }
        .chat-input {
          flex-grow: 1;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-right: 10px;
        }
        .send-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
        }
        .send-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  )
}
