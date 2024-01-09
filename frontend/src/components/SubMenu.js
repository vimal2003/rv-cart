import React,{useEffect,useState} from 'react'

const SubMenu = ({images}) => {
 
    const image=images;
    const intervalTime=3000
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
        }, intervalTime);
    
        return () => clearInterval(interval);
      }, [image?.length, intervalTime]);
      if(!image)
      return;
  return (
    <div className='mt-20 cursor-pointer border-2 rounded-xl border-black m-1'>
        <img className='h-52 w-full rounded-xl' src={image[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
    </div>
  )
}

export default SubMenu