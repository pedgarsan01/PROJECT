import { Component} from "@angular/core";
// import {  ElementRef, ViewChild} from "@angular/core";
// import { Planrepas } from "../../../../common/tables/Planrepas";


// import { CommunicationService } from "./../services/communication.service";


@Component({
  selector: "app-planrepas",
  templateUrl: "./planrepasForm.html",
  styleUrls: ["./planrepasForm.css"],
})

export class PlanrepasForm {
  // @ViewChild("newNumeroplan") newNumeroplan: ElementRef;
  // @ViewChild("newCategorie") newCategorie: ElementRef;
  // @ViewChild("newFrequence") newFrequence: ElementRef;
  // @ViewChild("newNbpersonnes") newNbpersonnes: ElementRef;
  // @ViewChild("newNbcalories") newNbcalories: ElementRef;
  // @ViewChild("newPrix") newPrix: ElementRef;
  // @ViewChild("newNumerofournisseur") newNumerofournisseur: ElementRef;



  // public planrepass: Planrepas[] = [];
  // public duplicateError: boolean = false;

  // public constructor(private communicationService: CommunicationService) {}


  // public insertPlanrepas(): void {
  //   const planrepas: Planrepas= {
  //     numeroplan: this.newNumeroplan.nativeElement.innerText,
  //     categorie: this.newCategorie.nativeElement.innerText,
  //     frequence: this.newFrequence.nativeElement.innerText,
  //     nbpersonnes: this.newNbpersonnes.nativeElement.innerText,
  //     nbcalories: this.newNbcalories.nativeElement.innerText,
  //     prix: this.newPrix.nativeElement.innerText,
  //     numerofournisseur: this.newNumerofournisseur.nativeElement.innerText,
  //   };
  //   console.log(planrepas)

  //   this.communicationService.insertPlanrepas(planrepas).subscribe((res: number) => {
  //     if (res > 0) {
  //       this.communicationService.filter("update");
  //     }
  //     // this.refresh();
  //     this.duplicateError = res === -1;
  //   });
  // }



}

