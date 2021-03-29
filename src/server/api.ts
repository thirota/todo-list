import express from "express";
import { Repository } from "src/model/task/repository";

/**
 * API設定
 */
export interface IConfig {
    ListenHost: string;
    WebRoot: string;
}

/**
 * API
 */
export class API {
    private app: express.Express;
    private repository: Repository;
    private conf: IConfig;

    constructor(conf: IConfig) {
        this.repository = new Repository();
        this.app = express();
        this.conf = conf;
        this.routing();
    }

    /**
     * サーバーの起動
     */
    public Run = () => {
        this.app.listen(this.conf.ListenHost);
    }

}