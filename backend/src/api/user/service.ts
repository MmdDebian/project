export default new class UserService {
    read():string {
        return 'this route for users'
    }

    update(id:number):string{
        return `yes ! this id : ${id}`;
    }
}
