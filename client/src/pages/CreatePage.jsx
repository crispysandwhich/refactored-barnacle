import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { useCreateBlogMutation, useUploadImgMutation } from '../redux/slices/blogApiSlice.js'
import { toast } from 'react-toastify'
import 'react-quill/dist/quill.snow.css'

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
    '----',
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
        image: filename
      }
  
      const res = await createBlog(data2).unwrap()
      
      navigate(`/blogDetails/${res._id}`)

    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }

  }


  return (
    <div id='CreateBlogPage'>

      <h2>Create Blog</h2>

      <form onSubmit={handleCreateBlog} encType='multipart/form-data'>
          <label htmlFor="title">
            <span>Title: </span>
            <input 
              type="text" 
              placeholder="title" 
              value={title}
              onChange={e => setTitle(e.target.value)}
              />
          </label>
          <label htmlFor="summary">
            <span>Summary: </span>
            <input 
              type="text" 
              placeholder="summary"
              value={summary}
              onChange={e => setSummary(e.target.value)}
              />
          </label>
          <label htmlFor="image">
            <span>Image: </span>
            <input 
              type="file"
              name="image"
              id="image"
              onChange={(e) => setImg(e.target.files[0])}  />
          </label>
          <label htmlFor="content">
            <span>Content: </span>
            <ReactQuill 
              modules={modules} 
              formats={formats}
              value={content}
              onChange={(value) => setContent(value)}
              />
          </label>
          <label htmlFor="category">
            <span>Category: </span>
            <select value={category} onChange={e => setCategory(e.target.value)}>
              {
                categories.map((category) => (
                  <option key={crypto.randomUUID()}>{category}</option>
                ))
              }
            </select>
          </label>


          <button>Create Blog</button>
        </form>

    </div>
  )
}
