import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import  {addUser}  from './UserSlice';
import TableContents from './TableContents';

const Dashboard = () => {
    const [user,setUser]=useState('')
    const [users,setUsers]=useState([]);

    const dispatch = useDispatch();

    useEffect(()=>{
        getUser();
    },[])

    async function getUser(){
        const data=await fetch("https://jsonplaceholder.typicode.com/users")
        const json=await data.json();
        setUsers(json);
    }

    const handleChange = (event) => {
        let userdata=event.target.value
        setUser(userdata)
       
      };

      function adduser(user){
        dispatch(addUser(user))
        setUsers(users.filter((item)=>item!=user))
      }
    
  return !users?(<h1>Loading</h1>):(
    <div>
        <div className='form'>
            <Box sx={{ minWidth: 200, maxWidth: 400 }} style={{margin: '20px'}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Add User</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user}
                label="Select User"
                onChange={handleChange}
                >
                    {users.sort((a,b)=>a.id-b.id).map((item)=>(
                        <MenuItem value={item} key={item.id}>{`${item.id} ${item.name}`}</MenuItem>
                    ))}
                </Select>
                <Button variant="contained" disabled={user? false:true} onClick={()=>adduser(user)}  style={{ margin: '20px', backgroundColor: 'green', color: 'white' }}>Add</Button>
            </FormControl>
            </Box>
        </div>
        <TableContents users={users} setUsers={setUsers}/>
    </div>
    
  )
}

export default Dashboard