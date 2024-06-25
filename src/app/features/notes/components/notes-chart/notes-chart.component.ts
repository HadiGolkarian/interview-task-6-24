import { Component, OnInit } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NotesApiService } from '../../../../core/data/notes-api.service';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-notes-chart',
  standalone: true,
  imports: [CanvasJSAngularChartsModule, CardComponent],
  templateUrl: './notes-chart.component.html',
  styleUrl: './notes-chart.component.sass',
})
export class NotesChartComponent implements OnInit {
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

  constructor(private notesApiService: NotesApiService) {}

  ngOnInit(): void {
    this.notesApiService.getStats().subscribe((stats) => {
      this.chartOptions.data[0].dataPoints = stats.map(
        ({ createdAt, notes }) => ({
          x: new Date(createdAt),
          y: notes,
        })
      ) as any;
    });
  }
}
