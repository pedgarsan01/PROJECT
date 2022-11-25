import { NextFunction, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import { DatabaseService } from "../services/database.service";
import Types from "../types";
import * as pg from "pg";

import { Planrepas } from "../../../common/tables/Planrepas";
//import { PlanrepasPK } from "../../../common/tables/PlanrepasPK";

@injectable()
export class DatabaseController {
  public constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    @inject(Types.DatabaseService) private readonly databaseService: DatabaseService
  ) {}

  public get router(): Router {
    const router: Router = Router();


    router.get("/planrepas", (req: Request, res: Response, _: NextFunction) => {
      var numeroplan = req.params.numeroplan ? req.params.numeroplan : "";
      var categorie = req.params.categorie ? req.params.categorie : "";
      var frequence = req.params.frequence ? req.params.frequence : "";
      var nbpersonnes = req.params.nbpersonnes ? req.params.nbpersonnes : "";
      var nbcalories = req.params.nbcalories ? req.params.nbcalories : "";
      var prix = req.params.prix ? req.params.prix : "";


      this.databaseService
        .filterPlanrepas(numeroplan, categorie, frequence,nbpersonnes,nbcalories,prix)
        .then((result: pg.QueryResult) => {
          const planrepas: Planrepas[] = result.rows.map((planrepas: Planrepas) => ({
            numeroplan: planrepas.numeroplan,
            categorie: planrepas.categorie,
            frequence: planrepas.frequence,
            nbpersonnes: planrepas.nbpersonnes,
            nbcalories: planrepas.nbcalories,
            prix: planrepas.prix,
          }));
          res.json(planrepas);
        })
        .catch((e: Error) => {
          console.error(e.stack);
        });
        
    });
/*
    router.get("/planrepas/numeroplan",
    (req: Request, res: Response, _: NextFunction) => {
      this.databaseService
        .getHotelNamesByNos()
        .then((result: pg.QueryResult) => {
          const hotelsNbsNames = result.rows.map((hotel: HotelPK) => ({
            hotelnb: hotel.hotelnb,
            name: hotel.name,
          }));
          res.json(hotelsNbsNames);
        })

        .catch((e: Error) => {
          console.error(e.stack);
        });
    }
);*/



    return router;
  }
}
