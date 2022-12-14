import { Component, ElementRef, ViewChild } from "@angular/core";

import { Planrepas } from "../../../../common/tables/Planrepas";
import { CommunicationService } from "./../services/communication.service";
import { FormControl } from '@angular/forms';



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
  @ViewChild("newNumerofournisseur") newNumerofournisseur: ElementRef;



  public planrepass: Planrepas[] = [];
  public duplicateError: boolean = false;

  public constructor(private communicationService: CommunicationService) {}

  formControl = new FormControl('');

  public ngOnInit(): void {
    this.getPlanrepas();

  }

  public openForm(): void {
    // Muestra el formulario en la página web
  }

  public getPlanrepas(): void {
    this.communicationService.getPlanrepas().subscribe((planrepass: Planrepas[]) => {
      this.planrepass = planrepass ? planrepass : [];

    });
  }



  public insertPlanrepas(): void {
    const planrepas: Planrepas = {
      numeroplan: this.newNumeroplan.nativeElement.innerText,
      categorie: this.newCategorie.nativeElement.innerText,
      frequence: this.newFrequence.nativeElement.innerText,
      nbpersonnes: this.newNbpersonnes.nativeElement.innerText,
      nbcalories: this.newNbcalories.nativeElement.innerText,
      prix: this.newPrix.nativeElement.innerText,
      numerofournisseur: this.newNumerofournisseur.nativeElement.innerText,
    };
    console.log(planrepas)

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
  public changeNumerofournisseur(event: any, i:number){
    const editField = event.target.textContent;
    this.planrepass[i].numerofournisseur = editField;
  }

  public updatePlanrepas(i: number) {
    this.communicationService.updatePlanrepas(this.planrepass[i]).subscribe((res: any) => {
      this.refresh();
    });
  }

}

