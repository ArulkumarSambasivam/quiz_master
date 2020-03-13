import AdminStore from "./AdminStore"
class RootStore {
    constructor() {
        this.adminStore = new AdminStore(this)
    }
}
export default RootStore;
