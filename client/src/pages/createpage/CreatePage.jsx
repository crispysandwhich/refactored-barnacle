import {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import classes from './createpage.module.css'
import { Form } from 'react-router-dom'

export default function CreatePage() {

  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]


  return (
    <div className={classes.container}>
      <div className="classes wrapper">
        <h2 className={classes.title}>Craete Blog</h2>
        <Form>
          <input 
            type="text" 
            placeholder="title" 
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
          <input 
            type="text" 
            placeholder="summary"
            value={summary}
            onChange={e => setSummary(e.target.value)}
            />
          <input type="file"  />
          <ReactQuill 
            modules={modules} 
            formats={formats}
            value={content}
            onChange={(value) => setContent(value)}
            />
          <button>Create Blog</button>
        </Form>
      </div>
    </div>
  )
}
