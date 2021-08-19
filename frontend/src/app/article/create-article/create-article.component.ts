import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientHttpService, AlertService } from '@app/_services';
import { editorConfigImport } from '@app/_helpers/editor-config.const';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.less']
})
export class CreateArticleComponent implements OnInit {

  htmlContent: any = "";
  loading: boolean = false;

  editorConfig = editorConfigImport;

  constructor(private articleService: ClientHttpService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onClick() {
    this.loading = true;
    let htmlData = this.sanitizer.sanitize(SecurityContext.HTML, this.htmlContent);
    this.articleService.createArticle(this.htmlContent).subscribe(() => {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigateByUrl(returnUrl);
    },
      (error) => {
        this.alertService.error(error);
        this.loading = false;
      });
    // console.log("two way data binding ", this.htmlContent);
  }
}
