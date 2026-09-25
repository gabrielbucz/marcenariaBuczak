import Database from "../databases/Database";
import MainScreen from "../view/MainScreen";

export default class MainController {
    public database: Database = new Database();

    constructor() {
        new MainScreen(this);
    }

    public showAllOrcamentos(): void {
        console.log(this.database.orcamentos);
    }
}