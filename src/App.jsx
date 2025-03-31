import { useState } from 'react'

export default function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false

  })

  function handleFormData(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value
    }))
  }

  return (

    <>

      <div className="container mt-4">

        <form class="row g-3">

          <div>
            <label htmlFor="">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleFormData}
            />
          </div>

          <div>
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleFormData}
            />
          </div>

          <div>
            <label htmlFor="">Body</label>
            <input
              type="text"
              name="body"
              value={formData.body}
              onChange={handleFormData}
            />
          </div>

          <div>
            <label htmlFor="">Checkbox</label>
            <input
              type="checkbox"
              name="public"
              value={formData.public}
              onChange={handleFormData}
            />
          </div>

        </form>

      </div>



    </>


  )

}