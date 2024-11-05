import { useContext } from 'react'
import { myContext } from './context'

export default function Newcomp() {

    const newData = useContext(myContext)
    console.log("new", newData);
    return (
        <div>
            {
                newData.map(data=>
                    <h1>{data}</h1>
                )
            }
        </div>
    )
}
