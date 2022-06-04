class User{
    #password;
    constructor(name){
        this.name = name;
    }

    #validateUsername(userName){
        //validating username through if else
        return true;
    }

    #validatePassword(password){
        //validating password through if else
        return true;
    }

    signUp(userName,password){
        let isValidated = false;
        isValidated = this.#validateUsername(userName) && this.#validatePassword(password);
        
        if(isValidated){
            this.userName = userName;
            this.#password = password;
            console.log("user signed up sucessfully");
        }
        else{
            console.log("signup failed");
        }
    }
    login(username,password){
        if(username ===this.userName && password=== this.#password){
            console.log("login sucessfull");
        }
        else{
            console.log("login failed");
        }
    }
    // changePassword(newPassword){
    //     this.#password = newPassword;
    // }
    set password(newPassword){
        this.#password = newPassword;
    }
    get getName(){
        return this.name;
    }

}

class Author extends User{
    constructor(name){
        super(name);
    }
}

class Admin extends User{
    constructor(name){
        super(name);
    }
}
// let u1 = new User("pablo");
// console.log("u1:",u1);

// u1.signUp('pablo_007',"pablo123");
// u1.login('pablo_007',"pablo123");

// let a1 = new Author('Gaur Gopaldas');
// a1.signUp('young_monk_06','gopaldas_gaur')
// console.log("a1:",a1);

let admin = new Admin('Babu Bhaiyya');
admin.signUp('thuglife_babu','khopditod')

// admin.changePassword('utha_le_re_baba');
admin.password = 'utha_le_re_baba';
console.log("admin:",admin);

console.log(admin.getName);