
import { Link } from 'react-router-dom'

export default function SpecialOffer() {

    
    
  return (
    
   <div className="container" id='offers'>
      <div className="my-5 text-center">
        <h1>Special Offers</h1>
        <hr className='m-auto w-25 h-35 text-white mb-2' style={{ color : 'white' }} />
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos perferendis ipsum neque id culpa.</p>
      </div>
    

      <Link className='text-decoration-none' to='/products'>

 <img className="img-fluid w-100 " style={{ height :'200px'}}
         src="https://t3.ftcdn.net/jpg/01/21/85/42/360_F_121854204_KW4GVjxCj0RecPZgFPNEhsLSZ9J9LfVW.jpg"
          
          
        />
         <h2  style={{ position: 'relative',  top: '-100px', left: '350px'}}>UP TO 75% OFF SUMMERSALE!</h2>
     
     </Link> 

     

   
      </div>
  )
}
