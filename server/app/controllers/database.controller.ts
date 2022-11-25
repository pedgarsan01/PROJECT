import { NextFunction, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import { DatabaseService } from "../services/database.service";
import Types from "../types";
import * as pg from "pg";

// import { Planrepas } from "../../../common/tables/Planrepas";
//import { PlanrepasPK } from "../../../common/tables/PlanrepasPK";

@injectable()
export class DatabaseController {
  public constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    @inject(Types.DatabaseService) private readonly databaseService: DatabaseService
  ) {}

  public get router(): Router {
    const router: Router = Router();


    // ======= JARDINS ROUTES =======
    router.get("/planrepas", (req: Request, res: Response, _: NextFunction) => {
        this.databaseService
        .getAllPlanRepas()
        .then((result: pg.QueryResult) => {
          res.json(result);
        })
        .catch((e: Error) => {
          console.error(e.stack);
        });
      
    });

    return router;
  }
}
