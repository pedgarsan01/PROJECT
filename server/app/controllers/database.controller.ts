import { NextFunction, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import { DatabaseService } from "../services/database.service";
import Types from "../types";
import * as pg from "pg";
import { Planrepas } from "@app/tables/Planrepas";



@injectable()
export class DatabaseController {
  public constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    @inject(Types.DatabaseService) private readonly databaseService: DatabaseService
  ) {}

  public get router(): Router {
    const router: Router = Router();


    // ======= PLANREPAS ROUTES que funciona =======
    router.get("/planrepas", (req: Request, res: Response, _: NextFunction) => {
        this.databaseService
        .getAllPlanRepas()
        .then((result: pg.QueryResult) => {
          res.json(result.rows);
        })
        .catch((e: Error) => {
          console.error(e.stack);
        });
      
    });

    router.post(
      "/planrepas/delete/:numeroplan",
      (req: Request, res: Response, _: NextFunction) => {
        const numeroplan: string = req.params.numeroplan;
        this.databaseService
          .deletePlanrepas(numeroplan)
          .then((result: pg.QueryResult) => {
            res.json(result.rowCount);
          })
          .catch((e: Error) => {
            console.error(e.stack);
          });
          
      } );

      router.put(
        "/planrepas/update",
        (req: Request, res: Response, _: NextFunction) => {

          const planrepas: Planrepas = {
                      numeroplan: req.body.numeroplan,
                      categorie: req.body.categorie     ? req.body.categorie : "",
                      frequence: req.body.frequence     ? req.body.frequence : "",
                      nbpersonnes: req.body.nbpersonnes ? req.body.nbpersonnes : "",
                      nbcalories: req.body.nbcalories   ? req.body.nbcalories : "",
                      prix: req.body.prix               ? req.body.prix : "",
                      numerofournisseur: req.body.numerofournisseur               ? req.body.numerofournisseur : "",
          
                    };

        
          this.databaseService
            .updatePlanrepas(planrepas)
            .then((result: pg.QueryResult) => {
              res.json(result.rowCount);
            })
            .catch((e: Error) => {
              console.error(e.stack);
            });
            
        } );



        router.post("/planrepas/insert",
      (req: Request, res: Response, _: NextFunction) => {
        const planrepas: Planrepas = {
          numeroplan: req.body.numeroplan,
          categorie: req.body.categorie,
          frequence: req.body.frequence,
          nbpersonnes: req.body.nbpersonnes,
          nbcalories: req.body.nbcalories,
          prix: req.body.prix,
          numerofournisseur: req.body.numerofournisseur,
        };

        this.databaseService
          .createPlanrepas(planrepas)
          .then((result: pg.QueryResult) => {
            res.json(result.rowCount);
          })
          .catch((e: Error) => {
            console.error(e.stack);
            res.json(-1);
          });
      }
    );


    return router;
  }
}
