import './category-item.styles.scss'

const CategoryItem = ({catetory:{title,imageUrl,size}})=>{
    return(
        <div className={`${size} category-container`}>
        <div className=" background-image "
        style={{
          backgroundImage:`url(${imageUrl})`
        }}
        />
        <div className="category-body-container">
          <h1> {title.toUpperCase()}</h1>
          <p>SHOP NOW</p>
        </div>
      </div>
    )
}

export default CategoryItem