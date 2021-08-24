import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ClientHttpService } from '@app/_services';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-display-temoignage',
  templateUrl: './display-temoignage.component.html',
  styleUrls: ['./display-temoignage.component.less']
})
export class DisplayTemoignageComponent implements OnInit {

  temoignage$: Observable<any>;
  temoignages: any[] = [];
  users = null;

  constructor(private clientHttpService: ClientHttpService) { }

  ngOnInit(): void {
    this.temoignage$ = this.clientHttpService.getAllTemoignage();
    this.clientHttpService.getAllTemoignage().subscribe((values) => {
      this.temoignages = values;
    })
    this.clientHttpService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

  deleteUser(id: string) {
    const user = this.users.find(x => x.id === id);
    user.isDeleting = true;
    this.clientHttpService.delete(id)
      .pipe(first())
      .subscribe(() => this.users = this.users.filter(x => x.id !== id));
  }

}
