import {decorate,observable,action} from "mobx"
 class AdminItem {
     id = '';
     name = '';
     email = '';

    constructor(id,name,email) {
       this.id = id;
       this.name = name;
       this.email = email;
    }
    setName = (name) => {
        this.name = name;
    }
    setEmail = (email) => {
        this.email = email;
    }
}
export default decorate(AdminItem,{
    id:observable,
    name:observable,
    email:observable,
    setName:action,
    setEmail:action
})

