import Contact from "./componenets/Contact";
import Navbar from "./componenets/Navbar";
import Product from "./componenets/Product";

function App() {


  const element = <p>bonjour</p>;


  const contacts = [
    { name:"john wick 1", email:"john@gmail.com" },
    { name:"john wick 2", email:"john@gmail.com" },
    { name:"john wick 3", email:"john@gmail.com" },
    { name:"john wick 4", email:"john@gmail.com" },
    { name:"john wick 5", email:"john@gmail.com" },
    
  ];


  const products = [
    { id: 1 , title:"iphone x", price:1000  },
    { id: 2 , title:"samsung s22", price:3000  },
    
  ]





  return (
    <div>
      <h1>Welcome to my app</h1>

      {
        /*
         { element }

      <Navbar ></Navbar>



      <Contact contactname="john wick" contactemail="test@gmail.com" />

      <Contact contactname="john wick 2" contactemail="test@gmail.com 2" />


      {
        contacts.map(  (c)=>{

            return <Contact contactname={ c.name } contactemail={ c.email } />

        }  )
      }

        */
      }
     



     <div className="row">
     {
      products.map( (p)=>{
        return 
        <div className="col-md-4">
          <Product title={ p.title }    price={ p.price }   />
        </div>
      } )
     }
     </div>



     
      
      





    </div>

  );
}

export default App;



/**
 * 
 * int function(){
 *  // 
 *  return 5 9;
 * 
 * }
 * 
 * 
 */