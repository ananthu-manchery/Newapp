import {useContext} from 'react'
import { myContext } from './context'

export default function Newcomp1() {
   const {userData,userDetails ,Newdata}=useContext(myContext)

   console.log(userData,userDetails,Newdata)

   return(
    <div>
        {userDetails.map(data=>
        <div>
            <h1>{data.name}</h1>

            {Newdata.map(fruit=>
        <div>
            <p>
            <h1>name:{fruit}</h1>
            </p>
        </div>
        )}
        </div>
        )}
       

        
    </div>
   )
}
//     const {ObjData,student}=useContext(myContext)

//     console.log("new1",ObjData,student);
//   return (
//     <div>

//       {
//         student.map(item=>
//             <>
//             {/* <h2>Student Name: {item.name}</h2>
//             <h3>Course Opted: {item.course}</h3>
//             <p>Institution: {item.Institution}</p> */}
//             </>
//         )
//       }
//     </div>
//   )

// const {userDetails,userData}=useContext(myContext)
// console.log("print",userDetails,userData);
// return(
//     <div>{
        
//         userData.map(std=>
//         <div>
//             <h1>{std.Institution}</h1>
      
//         {userDetails.map(det=>
//           <div>
//             <p>{det.name}</p>
//           </div>
//           )}
//           </div>
//     )
//         }
//     </div>

// )