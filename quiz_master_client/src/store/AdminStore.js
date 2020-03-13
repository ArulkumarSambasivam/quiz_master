import {action,decorate,observable} from "mobx";
import AdminItemModel from "../model/AdminItemModel" 

class AdminStore {
 adminList:Array<AdminItemModel> = [{id:1,name:"arul",email:"arulkumarpmp@gmail.com"}];
    constructor(rootStore) {
        this.rootStore = rootStore;
    }
    
    addAdmin(admin){
        this.adminList.push(admin);
    }
}
export default decorate(AdminStore,{
    adminList:observable,
addAdmin:action
})