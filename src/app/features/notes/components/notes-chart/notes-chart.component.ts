import { Component, OnDestroy, OnInit } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { Subscription } from 'rxjs';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-chart',
  standalone: true,
  imports: [CanvasJSAngularChartsModule, CardComponent],
  templateUrl: './notes-chart.component.html',
  styleUrl: './notes-chart.component.sass',
})
export class NotesChartComponent implements OnInit, OnDestroy {
  statsSubscription?: Subscription;
  chart: any;
  chartOptions = {
    animationEnabled: true,
    theme: 'light2',
    backgroundColor: 'transparent',
    axisX: {
      valueFormatString: 'YY-MM-DD',
      intervalType: 'day',
      interval: 1,
    },
    axisY: {
      title: 'Number of notes',
      titleFontSize: 12,
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: 'line',
        name: 'Notes',
        color: '#0061fc',
        showInLegend: false,
        yValueFormatString: '#,###',
        dataPoints: [],
      },
    ],
  };

  getChartInstance(chart: object) {
    this.chart = chart;
    this.notesService.loadStats();
  }

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.statsSubscription = this.notesService.stats$.subscribe((stats) => {
      this.chartOptions.data[0].dataPoints = stats.map(
        ({ createdAt, notes }) => ({
          x: new Date(createdAt),
          y: notes,
        })
      ) as any;

      this.chart?.render();
    });
  }

  ngOnDestroy(): void {
    this.statsSubscription?.unsubscribe();
  }
}
