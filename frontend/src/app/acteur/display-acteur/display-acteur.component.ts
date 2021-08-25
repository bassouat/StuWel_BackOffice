import { Component, OnInit } from '@angular/core';
import { AlertService, ClientHttpService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-display-acteur',
  templateUrl: './display-acteur.component.html',
  styleUrls: ['./display-acteur.component.less']
})
export class DisplayActeurComponent implements OnInit {

  acteurs: any[] = [];
  acteur = null;
  isDeleting: boolean = true;

  constructor(private clientHttpService: ClientHttpService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.clientHttpService.getAllActeur().subscribe((values) => {
      this.acteurs = values;
    })
  }
  deleteTemoignage(id: string) {
    this.isDeleting = true;
    this.clientHttpService.deleteActeur(id)
      .pipe(first())
      .subscribe(() => {
        window.location.reload();
        this.acteur = this.acteurs.filter(x => x.id !== id);
        this.isDeleting = false;
        this.alertService.success("Suppression réussi");
      },
        (error) => {
          this.alertService.error(error);
        });
  }

}
