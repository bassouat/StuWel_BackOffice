import { Component, OnInit } from '@angular/core';
import { Rubrique } from '@app/_models/rubrique';
import { AlertService, ClientHttpService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-display-rubrique',
  templateUrl: './display-rubrique.component.html',
  styleUrls: ['./display-rubrique.component.less']
})
export class DisplayRubriqueComponent implements OnInit {
  rubriques: any[] = [];
  rubrique = null;
  isDeleting: boolean = true;

  constructor(private clientHttpService: ClientHttpService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.clientHttpService.getAllRubrique().subscribe((values) => {
      this.rubriques = values;
    })
  }
  deleteTemoignage(id: string) {
    this.isDeleting = true;
    this.clientHttpService.deleteRubrique(id)
      .subscribe(() => {
        window.location.reload();
        this.rubrique = this.rubriques.filter(x => x.id !== id);
        this.isDeleting = false;
        this.alertService.success("Suppression réussi");
      },
        (error) => {
          this.alertService.error(error);
        });
  }


}
