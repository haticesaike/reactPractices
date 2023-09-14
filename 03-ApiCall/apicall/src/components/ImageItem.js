function ImageItem({image}) {
    console.log(image);
    return  <div>
        <img className="imgItem" src={image.urls.regular} alt={image.alt_description}/>
    </div> 
}

export default ImageItem;