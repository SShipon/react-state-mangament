// user ={name ="something", age = 65, hobbies=["football", "gaming"] }

import { useState } from "react";

const UserInfoWithUserState = () => {
    const [user, setUser]= useState({name:'', age:'',  hobbies:[]})
    console.log(user)
    return (
        <form>
              <input onChange={(e)=>setUser({...user, name:e.target.value})} className="border border-purple-800 m-10" type="text" name="name" id="name" placeholder="Name"/>  
              <input  onChange={(e)=>setUser({...user, age:e.target.value})} className="border border-purple-800 m-10" type="number" name="age" id="age" placeholder="Age"/>  
              <input onBlur={(e)=>setUser({...user, hobbies:[...user.hobbies,e.target.value]})} className="border border-purple-800 m-10" type="text" name="hobbies" id="hobbies" placeholder="Hobbies"/>  
              <button className="btn btn-secondary" type="submit">Submit</button>
        </form>
    );
};

export default UserInfoWithUserState;