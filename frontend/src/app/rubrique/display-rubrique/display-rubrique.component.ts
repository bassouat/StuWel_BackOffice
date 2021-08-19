import { Component, OnInit } from '@angular/core';
import { Rubrique } from '@app/_models/rubrique';
import { ClientHttpService } from '@app/_services';

@Component({
  selector: 'app-display-rubrique',
  templateUrl: './display-rubrique.component.html',
  styleUrls: ['./display-rubrique.component.less']
})
export class DisplayRubriqueComponent implements OnInit {
  rubriques: Rubrique[] = [];


  constructor(private clientHttpService: ClientHttpService) { }

  ngOnInit(): void {
    this.clientHttpService.getAllRubrique().subscribe((values: Rubrique[]) => {
      this.rubriques = values.map(val => val.data);
    })

  }

}
