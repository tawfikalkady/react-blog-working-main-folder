import {useEffect,useState} from 'react'
import { BlogCards } from './BlogCards'
import Pagination from './Pagination'
import CategorySelection from './CategorySelection'
import SideBar from './SideBar'

export const BlogPage = () => {
  const [blogs,setBlogs]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const pageSize=12 //blogs per page
  const [selectedCategory,setSelectedCategory]=useState(null)
  const [activeCategory,setActiveCategory]=useState(null)

  useEffect(() => {
    async function fetchBlogs() {
      let url=`http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`

      //filter by category
      if(selectedCategory){
        url += `&category=${selectedCategory}`
      }
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setBlogs(data)
    }
    fetchBlogs()
  },[currentPage,pageSize,selectedCategory])

  //page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleCategoryChange=(category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setActiveCategory(category)
  }
  return (
    <div>
      {/* category section */}
      <div>BLOGE PAGE
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
      </div>

      {/* blogCards section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        {/* blog cards component */}
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>
        
        {/* sidebar component */}
        <div>
          <SideBar/>
        </div>
       
      </div>

      {/* pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} blogs={blogs} currentPage={currentPage} pageSize={pageSize}/>
      </div>
    </div>
  )
}
