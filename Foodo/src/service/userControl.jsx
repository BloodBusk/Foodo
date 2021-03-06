
import { isEmpty } from "@firebase/util";
import dbT from "./service.jsx";

class userControl{
    loggedUser;

    async login(mail, pass){
        console.log('login is running');
        const data = await dbT.getUser();

            // map object into an array with objects
            const users = Object.keys(data).map((key) => ({
              key: key,
              ...data[key],
            }));

        console.log(users);
        for(const user of users){
            if(user.username == mail && user.password == pass){
                this.loggedUser = user;
               
                console.log('succes:', this.loggedUser);
                const userT = JSON.stringify(this.loggedUser);
                localStorage.setItem("user", userT);
                return this.loggedUser;
                
            }else{
                console.log('failure');
            }
        }
        

    }

    logout(){
        localStorage.clear();
        console.log("user is logged out");
    }

    async getLoggedUser(){
        
        const user = await JSON.parse(localStorage.getItem("user"));        
        return user;
    }

    async getUserKey(){
        const user = await JSON.parse(localStorage.getItem("user"));
        console.log(user.key);
        
        return user.key;
    }

    checkUserLoggedIn(){
        let check = false;
        const loggedUser = localStorage.getItem("user");
        if(loggedUser != null){
            check = true;
        }
        console.log(loggedUser);
        console.log(check);
        return check;
    }

}

const uc = new userControl();
export default uc;