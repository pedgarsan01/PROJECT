import { Component, ElementRef, ViewChild } from "@angular/core";
//import { OnInit } from '@angular/core';
import { Planrepas } from "../../../../common/tables/Planrepas";
import { CommunicationService } from "./../services/communication.service";


@Component({
  selector: "app-planrepas",
  templateUrl: "./planrepas.component.html",
  styleUrls: ["./planrepas.component.css"],
})

export class PlanrepasComponent {
  @ViewChild("newNumeroplan") newNumeroplan: ElementRef;
  @ViewChild("newCategorie") newCategorie: ElementRef;
  @ViewChild("newFrequence") newFrequence: ElementRef;
  @ViewChild("newNbpersonnes") newNbpersonnes: ElementRef;
  @ViewChild("newNbcalories") newNbcalories: ElementRef;
  @ViewChild("newPrix") newPrix: ElementRef;



  public planrepass: Planrepas[] = [];
  public duplicateError: boolean = false;

  //tableColumns: string[] = ['categorie'];




  public constructor(private communicationService: CommunicationService) {}

  public ngOnInit(): void {
    this.getPlanrepas();

  }

  public getPlanrepas(): void {
    this.communicationService.getPlanrepas().subscribe((planrepass: Planrepas[]) => {
      this.planrepass = planrepass ? planrepass : [];
      console.log(planrepass);
    });
  }

  public insertPlanrepas(): void {
    const planrepas: any = {
      numeroplan: this.newNumeroplan.nativeElement.innerText,
      categorie: this.newCategorie.nativeElement.innerText,
      frequence: this.newFrequence.nativeElement.innerText,
      nbpersonnes: this.newNbpersonnes.nativeElement.innerText,
      nbcalories: this.newNbcalories.nativeElement.innerText,
      prix: this.newPrix.nativeElement.innerText,
    };

    this.communicationService.insertPlanrepas(planrepas).subscribe((res: number) => {
      if (res > 0) {
        this.communicationService.filter("update");
      }
      this.refresh();
      this.duplicateError = res === -1;
    });
  }

  private refresh() {
    this.getPlanrepas();
    // this.newNumeroplan.nativeElement.innerText = "";
    // this.newCategorie.nativeElement.innerText = "";
    // this.newFrequence.nativeElement.innerText = "";
    // this.newNbpersonnes.nativeElement.innerText = "";
    // this.newNbcalories.nativeElement.innerText = "";
    // this.newPrix.nativeElement.innerText = "";
  }

  public deletePlanrepas(numeroplan: string) {
    this.communicationService.deletePlanrepas(numeroplan).subscribe((res: any) => {
      this.refresh();
    });
  }

  public changeCategorie(event: any, i:number){
    const editField = event.target.textContent;
    this.planrepass[i].categorie = editField;
  }

  public changeFrequence(event: any, i:number){
    const editField = event.target.textContent;
    this.planrepass[i].frequence = editField;
  }

  public changeNbpersonnes(event: any, i:number){
    const editField = event.target.textContent;
    this.planrepass[i].nbpersonnes = editField;
  }

  public changeNbcalories(event: any, i:number){
    const editField = event.target.textContent;
    this.planrepass[i].nbcalories = editField;
  }

  public changePrix(event: any, i:number){
    const editField = event.target.textContent;
    this.planrepass[i].nbcalories = editField;
  }

  public updatePlanrepas(i: number) {
    this.communicationService.updatePlanrepas(this.planrepass[i]).subscribe((res: any) => {
      this.refresh();
    });
  }
}

