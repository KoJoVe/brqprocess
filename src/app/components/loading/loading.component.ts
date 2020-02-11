import { Component, OnDestroy } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'loading-component',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnDestroy {
  loading = false;

  constructor(protected loadingService: LoadingService) {
    this.loadingService.loading.subscribe(value => this.loading = value);
  }

  ngOnDestroy() {
    this.loadingService.loading.unsubscribe();
  }
}
