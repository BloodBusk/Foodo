class db{
    postUrl = "https://foodo-1a8f3-default-rtdb.europe-west1.firebasedatabase.app/posts/.json";
    userUrl = "https://foodo-1a8f3-default-rtdb.europe-west1.firebasedatabase.app/users/.json";
    loginUrl = "https://foodo-1a8f3-default-rtdb.europe-west1.firebasedatabase.app/login/.json";

    async fetchPost(){
       const response = await fetch(this.postUrl);
       const data = await response.json();
       console.log(data);
       return data;
    }

    async fetchUser(){
        const response = await fetch(this.userUrl);
        const data = await response.json();
        console.log(data);
        return data;
     }

     async fetchLogin(){
        const response = await fetch(this.loginUrl);
        const data = await response.json();
        console.log(data);
        return data;
     }

}
const dbT = new db();
export default dbT;

