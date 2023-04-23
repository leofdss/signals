import { Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'signal';

  counter1 = signal(0);
  counter2 = signal(10);

  join = computed(() => {
    return this.counter1() + this.counter2();
  })

  constructor() {
    this.init();
  }

  init(): void {
    effect(() => {
      console.log(this.counter1())
    });

    const interval = setInterval(() => {
      this.counter1.set(this.counter1() + 1)
    }, 1000);

    setTimeout(() => {
      clearInterval(interval)
    }, 10 * 1000)
  }
}
