import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admin-panel';
  isLoading = false;
  private loaderSubscription: Subscription | undefined;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderSubscription = this.loaderService.loaderState$.subscribe(
      (state) => {
        this.isLoading = state;
      }
    );
  }

  ngOnDestroy() {
    if (this.loaderSubscription) {
      this.loaderSubscription.unsubscribe();
    }
  }

}
