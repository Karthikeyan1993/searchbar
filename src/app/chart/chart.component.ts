import { Component, OnInit } from '@angular/core';
import { ChartService } from '../shared/chartservice.service';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css'],
    providers: [ChartService]
})
export class ChartComponent implements OnInit {
    chart: any;
    options: Object;
    rangeSelectors = [];
    isActive: number;
    data = [];
    minX: any;
    minY: any;
    maxX: any;
    maxY: any;
    constructor(private chartservice: ChartService) {
        this.rangeSelectors.push('1h');
        this.rangeSelectors.push('1d');
        this.rangeSelectors.push('1m');
        this.rangeSelectors.push('1y');
        this.rangeSelectors.push('all');
        this.isActive = 4;
    }
    saveInstance(chartInstance): void {
        this.chart = chartInstance;
        console.log(this.chart);
    }
    ngOnInit(): void {
        this.chartservice.getAllData().subscribe((data) => {
            this.options = {
                chart: {
                    zoomType: 'x',
                    fontFamily: 'monospace',
                    color: '#fff',
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, 'rgba(68, 70, 79, 0.5)'],
                            [1, 'rgba(68, 70, 79, 0.5)']
                        ]
                    },
                    borderWidth: 0,
                    borderRadius: 0,
                    plotBackgroundColor: null,
                    plotShadow: false,
                    plotBorderWidth: 0
                },
                series: [{
                    type: 'area',
                    color: '#f6a821',
                    data: data,
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, 'rgba(240, 185, 22, 0.30)'],
                            [1, 'rgba(240, 185, 22, 0.10)']
                        ]
                    }
                }], navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                }, credits: {
                    enabled: false
                }, rangeSelector: {
                    buttonTheme: {
                        fill: '#2f323b',
                        stroke: 'none',
                        height: 18,
                        padding: 2,
                        'stroke-width': 15,
                        style: {
                            color: '#949ba2',
                            fontFamily: 'Roboto Condensed'
                        },
                        states: {
                            hover: {
                                fill: '#2f323b',
                                stroke: 'none',
                                style: {
                                    color: '#fff',
                                }
                            }, select: {
                                fill: '#2f323b',
                                style: {
                                    color: 'white',
                                }
                            }
                        }
                    },
                    buttons: [{
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'day',
                        count: 1,
                        text: '1d'
                    }, {
                        type: 'month',
                        count: 1,
                        text: '1m'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1y',
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    selected: 3,
                    enabled: false,
                    inputEnabled: false,
                }, yAxis: [{
                    floor: 0,
                    gridLineWidth: 0,
                    lineColor: '#949ba2',
                    labels: {
                        style: {
                            color: '#949ba2',
                            fontFamily: 'Roboto Condensed'
                        }
                    },
                }], xAxis: {
                    // type: 'datetime',
                    // dateTimeLabelFormats: {
                    //     day: '%H'
                    // },
                    // tickInterval: 3600 * 1000,
                    lineColor: '#949ba2',
                    labels: {
                        style: {
                            color: '#949ba2',
                            fontFamily: 'Roboto Condensed'
                        }
                    },
                    gapGridLineWidth: 0
                },

            };
        });
    }

    onAfterSetExtremesX(e) {
        this.minX = e.context.min;
        this.maxX = e.context.max;
    }

    onAfterSetExtremesY(e) {
        this.minY = e.context.min;
        this.maxY = e.context.max;
    }

    activateItem = (i, item) => {
        this.isActive = i;
        if (item === '1h') {
            this.chartservice.getIntraData().subscribe((data) => {
                const items = this.formatData(data);
                this.chart.series[0].setData(items);
            });
        }
    }

    formatData = (items) => {
        const data = [];
        for (let i = 0; i < items.t.length; i++) {
            data.push([
                items.t[i], items.c[i]
            ]);
        }
        return data;
    }
}
