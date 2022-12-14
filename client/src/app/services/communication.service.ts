// À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { Planrepas } from "../../../../common/tables/Planrepas";
import { PlanrepasPK } from "../../../../common/tables/PlanrepasPK";


@Injectable()
export class CommunicationService {
  // À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
   private readonly BASE_URL: string = "http://localhost:3000/database";
   public constructor(private readonly http: HttpClient) {}

  private _listeners: any = new Subject<any>();

  public listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  public filter(filterBy: string): void {
    this._listeners.next(filterBy);
  }

  // À DÉCOMMENTER ET À UTILISER LORSQUE VOTRE COMMUNICATION EST IMPLÉMENTÉE
  
  public getPlanrepas(): Observable<Planrepas[]> {
    return this.http
      .get<Planrepas[]>(this.BASE_URL + "/planrepas")
      .pipe(catchError(this.handleError<Planrepas[]>("getPlanrepas")));
  }

  public insertPlanrepas(planrepas: Planrepas): Observable<number> {
    return this.http
      .post<number>(this.BASE_URL + "/planrepas/insert", planrepas)
      .pipe(catchError(this.handleError<number>("insertPlanrepas")));
  }

  public updatePlanrepas(planrepas: Planrepas): Observable<number> {
    return this.http
      .put<number>(this.BASE_URL + "/planrepas/update", planrepas)
      .pipe(catchError(this.handleError<number>("updatePlanrepas")));
  }

  public deletePlanrepas(numeroplan: string): Observable<number> {
    return this.http
      .post<number>(this.BASE_URL + "/planrepas/delete/" + numeroplan, {})
      .pipe(catchError(this.handleError<number>("deletePlanrepas")));
  }

  public getPlanrepasPKs(): Observable<PlanrepasPK[]> {
    return this.http
      .get<PlanrepasPK[]>(this.BASE_URL + "/planrepas/numeroplan")
      .pipe(catchError(this.handleError<PlanrepasPK[]>("getPlanrepasPKs")));
  }

  private handleError<T>(
    request: string,
    result?: T
  ): (error: Error) => Observable<T> {
    return (error: Error): Observable<T> => {
      return of(result as T);
    };
  }
   }
  

