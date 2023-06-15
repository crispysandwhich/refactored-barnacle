import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCreateBlogMutation, useUploadImgMutation } from '../../redux/blogApiSlice.js'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import classes from './createpage.module.css'
import { toast } from 'react-toastify'




export default function CreatePage() {

  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [img, setImg] = useState('')
  const [category, setCategory] = useState('')

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

  const categories = [
    'crypto',
    'coding',
    'programming',
    'fun',
    'hacking',
    'modding'
  ]

  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.auth)

  const [createBlog] = useCreateBlogMutation()
  const [uploadImg] = useUploadImgMutation()

  useEffect(() => {
    if(!userInfo || userInfo === null){
      navigate('/')
    }
  },[userInfo, navigate])


  const handleCreateBlog = async (e) => {
    e.preventDefault()

    try {
      const data = new FormData()
      let filename = null

      if(img){
        filename = crypto.randomUUID() + img.name
        data.append('filename', filename)
        data.append('image', img)
        await uploadImg(data)
      } else {
        return toast.error('There is no image hoe')
      }

      const data2 = {
        title,
        summary,
        content,
        category,
        photo: filename
      }
  
      const res = await createBlog(data2).unwrap()
      
      navigate(`/blogDetails/${res._id}`)

    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }

  }



  return (
    <div className={classes.container}>
      <div className="classes wrapper">
        <h2 className={classes.title}>Craete Blog</h2>
        <form onSubmit={handleCreateBlog} encType='multipart/form-data'>
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
          <input 
            type="file" 
            onChange={(e) => setImg(e.target.files[0])}  />
          <ReactQuill 
            modules={modules} 
            formats={formats}
            value={content}
            onChange={(value) => setContent(value)}
            />

            <select value={category} onChange={e => setCategory(e.target.value)}>
              {
                categories.map((category) => (
                  <option key={crypto.randomUUID()} selected>{category}</option>
                ))
              }
            </select>

          <button>Create Blog</button>
        </form>
      </div>
    </div>
  )
}
