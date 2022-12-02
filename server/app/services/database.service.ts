import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";
import { Planrepas } from "../../../server/app/tables/Planrepas";

@injectable()
export class DatabaseService {
  public connectionConfig: pg.ConnectionConfig = {
    user: "admin2",
    database: "TP4",
    password: "admin2",
    port: 5432,          // Attention ! Peut aussi être 5433 pour certains utilisateurs
    host: "127.0.0.1",
    keepAlive: true
  };

  public pool: pg.Pool = new pg.Pool(this.connectionConfig);

  
 // ======= DEBUG =======
  public async getAllPlanRepas(): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const res = await client.query(`SELECT * FROM planrepas;`);
    client.release();
    return res;
  }



  public async deletePlanrepas(numeroplan: string): Promise<pg.QueryResult> {
    if (numeroplan.length === 0) throw new Error("Invalid delete query, length of numeroplan=0");

    const client = await this.pool.connect();
    const query = `DELETE FROM planrepas WHERE numeroplan = '${numeroplan}';`;

    const res = await client.query(query);
    client.release();
    return res;
  }

  // public async getPlanrepasByNos(): Promise<pg.QueryResult> {
  //   const client = await this.pool.connect();
  //   const res = await client.query("SELECT numeroplan, categorie FROM TP4.Planrepas;");
  //   client.release();
  //   return res;
  // }



  public async updatePlanrepas(planrepas: Planrepas): Promise<pg.QueryResult> {
    const client = await this.pool.connect();


    let toUpdateValues = [];

    if (planrepas.categorie.length > 0) toUpdateValues.push(`categorie = '${planrepas.categorie}'`);
    if (planrepas.frequence.length > 0) toUpdateValues.push(`frequence = '${planrepas.frequence}'`);
    if (planrepas.nbpersonnes.length > 0) toUpdateValues.push(`nbpersonnes = '${planrepas.nbpersonnes}'`);
    if (planrepas.nbcalories.length > 0) toUpdateValues.push(`nbcalories = '${planrepas.nbcalories}'`);
    if (planrepas.prix.length > 0) toUpdateValues.push(`prix = '${planrepas.prix}'`);
    if (planrepas.numerofournisseur.length > 0) toUpdateValues.push(`numerofournisseur = '${planrepas.numerofournisseur}'`);

    if (
      !planrepas.numeroplan ||
      planrepas.numeroplan.length === 0 ||
      toUpdateValues.length === 0
    )
      throw new Error("Invalid planrepas update query");
    
    const query = `UPDATE planrepas SET ${toUpdateValues.join(
      ", "
    )} WHERE numeroplan = '${planrepas.numeroplan}';`;
    const res = await client.query(query);
    client.release();
    return res;
  }


  public async createPlanrepas(planrepas: Planrepas): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    if (!planrepas.numeroplan || !planrepas.categorie || !planrepas.frequence || !planrepas.nbpersonnes || !planrepas.nbcalories || !planrepas.prix || !planrepas.numerofournisseur  )
      throw new Error("Invalid create planrepas values");
    

    const values: string[] = [planrepas.numeroplan, planrepas.categorie, planrepas.frequence, planrepas.nbpersonnes, planrepas.nbcalories, planrepas.prix];
    const queryText: string = `INSERT INTO planrepas VALUES($1, $2, $3, $4, $5, $6, $7);`;

    const res = await client.query(queryText, values);
    client.release();
    return res;
  }



/*
// get hotels that correspond to certain caracteristics
public async filterPlanrepas(
  numeroplan: string,
  categorie: string,
  frequence: string,
  nbpersonnes: string,
  nbcalories: string,
  prix: string,
): Promise<pg.QueryResult> {
  const client = await this.pool.connect();

  const searchTerms: string[] = [];
  if (numeroplan.length > 0) searchTerms.push(`numeroplan = '${numeroplan}'`);
  if (categorie.length > 0) searchTerms.push(`categorie = '${categorie}'`);
  if (frequence.length > 0) searchTerms.push(`frequence = '${frequence}'`);
  if (nbpersonnes.length > 0) searchTerms.push(`nbpersonnes = '${nbpersonnes}'`);
  if (nbcalories.length > 0) searchTerms.push(`nbcalories = '${nbcalories}'`);
  if (prix.length > 0) searchTerms.push(`prix = '${prix}'`);


  let queryText = "SELECT * FROM TP4.planrepas";
  if (searchTerms.length > 0)
    queryText += " WHERE " + searchTerms.join(" AND ");
  queryText += ";";

  const res = await client.query(queryText);
  client.release();
  return res;
}

/*
// get the hotel names and numbers so so that the user can only select an existing hotel
public async getHotelNamesByNos(): Promise<pg.QueryResult> {
  const client = await this.pool.connect();
  const res = await client.query("SELECT hotelNb, name FROM HOTELDB.Hotel;");
  client.release();
  return res;
}*/
}