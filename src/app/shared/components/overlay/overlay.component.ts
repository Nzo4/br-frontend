import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  isVisible$: Observable<boolean>;
  constructor(private headerService: HeaderService) {
    this.isVisible$ = this.headerService.buttonCatalogState$;
  }

}
