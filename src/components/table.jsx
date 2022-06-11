import react, {useState, useEffect} from 'react'
import { categoryAction } from '../actions/categoryActions'
import { useDispatch, useSelector } from 'react-redux'


const Table = () => {
    const [data, setData] = useState([
        {_id:"32",email:"femitpatel0@gmail.com",typeVaccine:"Moderna",status:"Yes","__v":0},
        {_id:"604",email:"aemit.2009@outlook.com",typeVaccine:"Asternzcana",status:"No","__v":0},
        {_id:"1",email:"semitpatel@computer4u.com",typeVaccine:"Phizer",status:"Yes","__v":0},
        {_id:"354",email:"blahbro96@gmail.com",typeVaccine:"none",status:"No","__v":0},
        {_id:"91",email:"vimal4282@yahoo.co.in",typeVaccine:"Moderna",status:"Yes","__v":0}
    ])

    const dispatch = useDispatch()
    const categoryList = useSelector(state => state.categoryList)
    console.log("categoryList", categoryList)
    useEffect(() => {
        dispatch(categoryAction())
    }, [dispatch])

    const [sortingType, setSortingType] = useState("")

        const sortByID = () => {
            data.sort((a,b) => (parseInt(a._id) > parseInt(b._id)) ? 1 : ((parseInt(b._id) > parseInt(a._id)) ? -1 : 0));
        }

        const sortByEmail = () => {
            data.sort((a,b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0))  
        }
        const sortByVaccine = () => {
            data.sort((a,b) => (a.typeVaccine > b.typeVaccine) ? 1 : ((b.typeVaccine > a.typeVaccine) ? -1 : 0))
        }

    return (
        <div>
            <h1>TABLE SORTING</h1>
            <div style={{display:'flex', justifyContent: "space-between", width: "600px"}}>
                <p  style={{cursor: "pointer", fontSize: '17px', fontWeight: 'bold'}} onClick={() => {setSortingType('id'); sortByID()}}>ID</p>
                <p  style={{cursor: "pointer", fontSize: '17px', fontWeight: 'bold'}} onClick={() => {setSortingType('e'); sortByEmail()}}>Email</p>
                <p  style={{cursor: "pointer", fontSize: '17px', fontWeight: 'bold'}} onClick={() => {setSortingType('v'); sortByVaccine()}}>Vaccine</p>
            </div>
            {
                        data && data.map((item,index) => (
                            <div key={index}  style={{display:'flex', justifyContent: "space-between", width: "600px"}}>
                                <p>{item._id}</p>
                                <p>{item.email}</p>
                                <p>{item.typeVaccine}</p>
                            </div>
                        ))
                    }
        </div>
    )
}
  
  export default Table;
  